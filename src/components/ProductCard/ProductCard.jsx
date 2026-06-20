import './ProductCard.css'
import { useEffect, useState } from 'react'
import supabase from './../../supabase'

function ProductCard() {
    const [products, setProducts] = useState([])
    const [editingId, setEditingId] = useState(null)

const [editName, setEditName] = useState('')
const [editPrice, setEditPrice] = useState('')
const [editImage, setEditImage] = useState('')
const [editDescription, setEditDescription] = useState('')
    
    async function fetchProducts() {
            const { data, error } = await supabase.from('product').select('*')

        if (error) {
            console.log(error)
        } 
        else{
            setProducts(data)
        }

    }

    async function deleteProduct(id) {
        const confirmDelete = window.confirm(
            "Are you sure you want to delete this product?"
        )

        if (!confirmDelete) return

        const { error } = await supabase.from("product").delete().eq("id", id)

        if (error) {
            alert(error.message)
        } else {
            fetchProducts()
        }
}
function openEdit(product) {
    setEditingId(product.id)

    setEditName(product.name)
    setEditPrice(product.price)
    setEditImage(product.image)
    setEditDescription(product.description)
}
async function updateProduct() {
    const { error } = await supabase.from('product').update({name: editName,price: editPrice,image: editImage,description: editDescription,}).eq('id', editingId)
    if (error) {
        alert(error.message)
    } else {
        alert('Product Updated Successfully')
        setEditingId(null)
        fetchProducts()
    }
}
    useEffect(() => {
        fetchProducts()
    },[])
    return (
        <>
            <div className="productcard">
                <h1 className='p-title'>Shop All Products</h1>
            </div>

            <div className='product-box'>
                {products.map((product) => (
                    <div className='product-card' key={product.id} >
                        <img
                            src={product.image}
                            alt={product.name}
                            className='product-image'
                            />
                        
                        <h2 className='product-name'>{product.name}</h2>

                        <h3 className='product-price'>₹{product.price}</h3>
                        <button onClick={() => deleteProduct(product.id)} className='delete-btn'>Delete</button>
                        <button onClick={() => openEdit(product)} className='edit-btn'>Edit</button>
            </div>
        ))}
    </div>
    {editingId && (
    <div className="edit-modal">
        <div className="edit-content">
            <h2>Edit Product</h2>
            <input
                value={editName}
                onChange={(e) => setEditName(e.target.value)}
                placeholder="Product Name"
                className='e-in'
            />
            <input
                value={editPrice}
                onChange={(e) => setEditPrice(e.target.value)}
                placeholder="Price"
                className='e-in'
            />
            <input
                value={editImage}
                onChange={(e) => setEditImage(e.target.value)}
                placeholder="Image URL"
                className='e-in'
            />
            <button onClick={updateProduct} className='e-btn'>Save</button>
            <button onClick={() => setEditingId(null)} className='e-btn'>Cancel</button>
        </div>
    </div>
)}
</>
)
}

export default ProductCard
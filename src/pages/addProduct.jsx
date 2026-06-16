// import Navbar from './../components/Navbar/Navbar'
// import Product from './../components/addingProduct/addingProduct'
import './addProduct.css'
import { useState } from 'react'
import supabase from './../supabase'
import Footer from '../components/Footer/Footer'

function AddProduct() {
    const [name, setName] = useState('')
    const [price, setPrice] = useState('')
    const [image, setImage] = useState('')

    async function handleSubmit(e) {
    e.preventDefault()

    const { error } = await supabase.from('product').insert([{name,price,image,},])

        if (error) {
            alert(error.message)
        } else {
            alert('Product Added Successfully')

        setName('')
        setPrice('')
        setImage('')
        }
    }

    return (
        <>

        <div className='add-box'>
        <h1 className='p-title'>Add Product</h1>

        <form onSubmit={handleSubmit}>
            <input
                placeholder="Product Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className='p-name'/>

            <input
                placeholder="Price"
                value={price}
                onChange={(e) => setPrice(e.target.value)} 
                className='p-price' />
            
            <input
                placeholder="Image URL"
                value={image}
                onChange={(e) => setImage(e.target.value)}
                className='p-img'/>


            <button type="submit" className='p-btn'>
                Add Product
            </button>
        </form>
        </div>
        <Footer />
    </>
)
}

export default AddProduct
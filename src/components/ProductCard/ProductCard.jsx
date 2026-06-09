import './ProductCard.css'
import Bag from "./../../assets/bag.png"
import Book from "./../../assets/book.png"
import Chair from "./../../assets/chair.png"
import Laptop from "./../../assets/laptop.png"
import Shoes from "./../../assets/shoes.png"
import Smartwatch from "./../../assets/smartwatch.png"
import Headphone from "./../../assets/headphone.png"
import Watch from "./../../assets/watch.png"

function ProductCard(){
    return(
        <>
        <h1 className='productcard-title'>Shop All Products</h1>
        <div className='productcard'>
            <div className='product-card'>
                <img src={Bag} alt='bag' className='product-img'></img>
                <h2 className='product-name'>Bag</h2>
                <h2 className='product-price'>$56.00</h2>
            </div>
            <div className='product-card'>
                <img src={Book} alt='Book' className='product-img'></img>
                <h2 className='product-name'>You Can</h2>
                <h2 className='product-price'>$89.00</h2>
            </div>
            <div className='product-card'>
                <img src={Watch} alt='watch' className='product-img'></img>
                <h2 className='product-name'>Sonata Sleek</h2>
                <h2 className='product-price'>$76.00</h2>
            </div>
            <div className='product-card'>
                <img src={Laptop} alt='laptop' className='product-img'></img>
                <h2 className='product-name'>Acer ALG</h2>
                <h2 className='product-price'>$120.00</h2>
            </div>
            <div className='product-card'>
                <img src={Shoes} alt='shoes' className='product-img'></img>
                <h2 className='product-name'>Nike Jordan 1</h2>
                <h2 className='product-price'>$99.00</h2>
            </div>
            <div className='product-card'>
                <img src={Smartwatch} alt='smaretwatch' className='product-img'></img>
                <h2 className='product-name'>Smartwatch</h2>
                <h2 className='product-price'>$90.00</h2>
            </div>
            <div className='product-card'>
                <img src={Chair} alt='chair' className='product-img'></img>
                <h2 className='product-name'>Gaming Chair</h2>
                <h2 className='product-price'>$87.00</h2>
            </div>
            <div className='product-card'>
                <img src={Headphone} alt='headphone' className='product-img'></img>
                <h2 className='product-name'>Wireless Headphone</h2>
                <h2 className='product-price'>$70.00</h2>
            </div>
        </div>
        </>
    )
}

export default ProductCard
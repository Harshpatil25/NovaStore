import './FeatureProduct.css'
import sneakers from '../../assets/shoes.png'
import laptop from '../../assets/laptop.png'
import book from '../../assets/book.png'
import watch from '../../assets/watch.png'
import { Link } from 'react-router-dom'

function FeatureProduct(){
    return(
        <>
            <h1 className='feature-title'>Featured Products</h1>
            <div className='feature-bar'>
                <div className='feature-card'>
                    <img src={sneakers} alt='Nike Jordan 1' className='feature-img'></img>
                    <h2 className='feature-name'>Nike Jordan 1</h2>
                    <h3 className='feature-type'>Sneakers</h3>
                    <h2 className='feature-price'>₹10000</h2>
                    <Link to="/shop" className="feature-buy">🛒</Link>
                </div>
                <div className='feature-card'>
                    <img src={laptop} alt='Acer Alg' className='feature-img'></img>
                    <h2 className='feature-name'>Acer ALG</h2>
                    <h3 className='feature-type'>Laptop</h3>
                    <h2 className='feature-price'>₹65000</h2>
                    <Link to="/shop" className="feature-buy">🛒</Link>
                </div>
                <div className='feature-card'>
                    <img src={watch} alt='Sonata Sleek' className='feature-img'></img>
                    <h2 className='feature-name'>Sonata sleek</h2>
                    <h3 className='feature-type'>Watch</h3>
                    <h2 className='feature-price'>₹2100</h2>
                    <Link to="/shop" className="feature-buy">🛒</Link>
                </div>
                <div className='feature-card'>
                    <img src={book} alt='You can' className='feature-img'></img>
                    <h2 className='feature-name'>You can</h2>
                    <h3 className='feature-type'>Books</h3>
                    <h2 className='feature-price'>₹1500</h2>
                    <Link to="/shop" className="feature-buy">🛒</Link>
                </div>
            </div>
        </>
    )
}

export default FeatureProduct;
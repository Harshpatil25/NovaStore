import './FeatureProduct.css'
import sneakers from '../../assets/shoes.png'
import laptop from '../../assets/laptop.png'
import book from '../../assets/book.png'
import watch from '../../assets/watch.png'

function FeatureProduct(){
    return(
        <>
            <h1 className='feature-title'>Featured Products</h1>
            <div className='feature-bar'>
                <div className='feature-card'>
                    <img src={sneakers} alt='Nike Jordan 1' className='feature-img'></img>
                    <h2 className='feature-name'>Nike Jordan 1</h2>
                    <h3 className='feature-type'>Sneakers</h3>
                    <h2 className='feature-price'>$99</h2>
                    <a href='' className='feature-buy'>🛒</a>
                </div>
                <div className='feature-card'>
                    <img src={laptop} alt='Acer Alg' className='feature-img'></img>
                    <h2 className='feature-name'>Acer ALG</h2>
                    <h3 className='feature-type'>Laptop</h3>
                    <h2 className='feature-price'>$120</h2>
                    <a href='' className='feature-buy'>🛒</a>
                </div>
                <div className='feature-card'>
                    <img src={watch} alt='Sonata Sleek' className='feature-img'></img>
                    <h2 className='feature-name'>Sonata sleek</h2>
                    <h3 className='feature-type'>Watch</h3>
                    <h2 className='feature-price'>$76</h2>
                    <a href='' className='feature-buy'>🛒</a>
                </div>
                <div className='feature-card'>
                    <img src={book} alt='You can' className='feature-img'></img>
                    <h2 className='feature-name'>You can</h2>
                    <h3 className='feature-type'>Books</h3>
                    <h2 className='feature-price'>$89</h2>
                    <a href='' className='feature-buy'>🛒</a>
                </div>
            </div>
        </>
    )
}

export default FeatureProduct;
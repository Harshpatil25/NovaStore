import './Categories.css'
import sportIcon from '../../assets/sports-icon.png'
import fashion from '../../assets/cloth-icon.png'
import home from '../../assets/house-icon.png'
import laptop from '../../assets/laptop-icon.png'
import shoes from '../../assets/shoes-icon.png'
import book from '../../assets/book-icon.png'




function Categories(){
    return(
        <>
            <h1 className="categories-title">Shop by Category</h1>
            <div className="categories-container">
                <div className="categories-card">
                    <img src={sportIcon} alt="Sports" className="categories-image" />
                    <h3 className="category-title">Sports</h3>
                </div>
                <div className="categories-card">
                    <img src={fashion} alt="Fashion" className="categories-image" />
                    <h3 className="category-title">Fashion</h3>
                </div>
                <div className="categories-card">
                    <img src={home} alt='Home & Garden' className="categories-image" />
                    <h3 className="category-title">Home & Garden</h3>
                </div>
                <div className="categories-card">
                    <img src={laptop} alt="electronics" className="categories-image" />
                    <h3 className="category-title">Electronics</h3>
                </div>
                <div className="categories-card">
                    <img src={shoes} alt="Shoes" className="categories-image" />
                    <h3 className="category-title">Shoes</h3>
                </div>
                <div className="categories-card">
                    <img src={book} alt="Books" className="categories-image" />
                    <h3 className="category-title">Books</h3>
                </div>
            </div>
        </>
    )
}

export default Categories;
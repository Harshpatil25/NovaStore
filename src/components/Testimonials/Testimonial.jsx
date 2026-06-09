import './Testimonial.css'

function Testimonial(){
    return(
        <>
            <h1 className='testimonial-title'>What Customers Say</h1>
            <div className='testimonial-bar'>
                <div className='testimonial-card'>
                    <h2 className='rating'>⭐⭐⭐⭐⭐</h2>
                    <p className='description'>"I was impressed by the quality of the products and the fast delivery. Everything arrived exactly as described, and the shopping experience was smooth from start to finish."</p>
                    <h2 className='customer-name'>- Sarah Johnson</h2>
                </div>
                <div className='testimonial-card'>
                    <h2 className='rating'>⭐⭐⭐⭐</h2>
                    <p className='description'>"Nova Store offers a fantastic selection of products at great prices. Customer service was responsive and helpful, making my purchase completely hassle-free."</p>
                    <h2 className='customer-name'>- Michael Chen</h2>
                </div>
                <div className='testimonial-card'>
                    <h2 className='rating'>⭐⭐⭐⭐⭐</h2>
                    <p className='description'>"This is one of the best online stores I've used. The website is easy to navigate, the checkout process is quick, and the products exceeded my expectations."</p>
                    <h2 className='customer-name'>- Emily Rodriguez</h2>
                </div>
            </div>
        </>
    )
}

export default Testimonial;
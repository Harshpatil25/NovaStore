import './Footer.css'

function Footer(){
    return(
        <>
            <div className='footer'>
                <div className='name'>
                    <h1 className='name-title'>NovaStore</h1>
                    <p className='name-desc'>Your one-stop destination for premium products</p>
                </div>
                <div className='shop'>
                    <h2 className='shop-title'>Shop</h2>
                    <a href='' className='shop-link'>All Products</a>
                    <a href='' className='shop-link'>New Arrivals</a>
                    <a href='' className='shop-link'>Best Sellers</a>
                    <a href='' className='shop-link'>Deals</a>
                </div>
                <div className='company'>
                    <h2 className='company-title'>Company</h2>
                    <a href='' className='company-link'>About us</a>
                    <a href='' className='company-link'>Careers</a>
                    <a href='' className='company-link'>Privacy Policy</a>
                    <a href='' className='company-link'>Terms & Conditions</a>
                </div>
                <div className='help'>
                    <h2 className='help-title'>Help</h2>
                    <a href='' className='help-link'>FAQs</a>
                    <a href='' className='help-link'>Shipping</a>
                    <a href='' className='help-link'>Returns</a>
                    <a href='' className='help-link'>Contact Us</a>
                </div>
                <div className='contact1'>
                    <h2 className='contact-title1'>Contact</h2>
                    <a href='' className='contact-link'>📞 +123 456 7890</a>
                    <a href='' className='contact-link'>✉️ support@novastore.com</a>
                    <a href='' className='contact-link'>🏠 123, Market Street, New York, USA</a>
                </div>
                <div className='footer-end'>
                    <p className='footer-end-desc'>&copy; 2026 NovaStore. All rights reserved. </p>
                </div>
            </div>
        </>
    )
}

export default Footer
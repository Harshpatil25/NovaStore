import './AboutCard.css'
import NovaStore from "./../../assets/novastore.png"

function AboutCard(){
    return(
        <>
            <div className='about-container'>
                <div className='about-desc'>
                    <h1 className='about-title'>About NovaStore</h1>
                    <p className='about-details'>At NovaStore, we believe shopping should be more than just a<br></br>
                                                    transaction—it should be an experience. Our mission is to<br></br>
                                                    provide customers with high-quality products that combine<br></br>
                                                    style, functionality, and affordability. With a carefully<br></br>
                                                    curated collection of fashion, electronics, accessories, and<br></br>
                                                    lifestyle products, we strive to deliver excellence in every<br></br>
                                                    purchase.<br></br><br></br>
                                                    Built with a passion for innovation and customer satisfaction,<br></br>
                                                    NovaStore focuses on creating a seamless and enjoyable online<br></br>
                                                    shopping journey. We are committed to quality, trust, and<br></br>
                                                    delivering products that inspire confidence and elevate<br></br>
                                                    everyday living.<br></br>
                    </p>
                    <img src={NovaStore} alt='novastore' className='about-img'></img>
                </div>
                <div className='adv'>
                    <div className='adv-det'>
                        <h2 className='adv-title'>10K+</h2>
                        <p className='adv-desc'>Happy Customer</p>
                    </div>
                    <div className='adv-det'>
                        <h2 className='adv-title'>500+</h2>
                        <p className='adv-desc'>Premium Products</p>
                    </div>
                    <div className='adv-det'>
                        <h2 className='adv-title'>24/7</h2>
                        <p className='adv-desc'>Customer Supports</p>
                    </div>
                    <div className='adv-det'>
                        <h2 className='adv-title'>100%</h2>
                        <p className='adv-desc'>Satisfaction</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AboutCard
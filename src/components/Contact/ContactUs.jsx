import './ContactUs.css'

function ContactUs(){
    return(
        <>
            <div className='contact-container'>
                <div className='contact-us'>
                    <h1 className='contact-title'>Get In Touch</h1>
                    <div className='det'>
                        <h2>Phone</h2>
                        <a href=''>📞 +123 4567 890</a>
                    </div>
                    <div className='det'>
                        <h2>Email</h2>
                        <a href=''>✉️ support@novastore.com</a>
                    </div>
                    <div className='det'>
                        <h2>Address</h2>
                        <a href=''>🏠 123, Market Street, New York, USA</a>
                    </div>
                    <div className='det'>
                        <h2>Working Hours</h2>
                        <a href=''>🕛 Mon - Sat: 9:00 AM - 6:00 PM</a>
                    </div>
                </div>
                <div className='contact-det'>
                    <input type="text" placeholder='Your Name' className='c-name'></input>
                    <input type="email" placeholder='Your Email' className='c-email'></input>
                    <input type='text' placeholder='Subject' className='c-sub'></input>
                    <div className='msg-box'>
                        <textarea placeholder='Message'></textarea>
                    </div>
                    <button href='' className='c-btn'>Submit</button>
                </div>
            </div>
        </>
    )
}

export default ContactUs
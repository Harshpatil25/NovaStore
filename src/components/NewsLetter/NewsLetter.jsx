import './NewsLetter.css'
import mailIcon from '../../assets/mail-icon.png'

function NewsLetter(){
    return(
        <>
            <div className='newsletter-bar'>
                <div className='newsletter-card'>
                    <img src={mailIcon} alt='Mail icon' className='newsletter-img'></img>
                    <button className='submit-btn'>Subscribe</button>
                    <h2 className='newsletter-title'>Stay updated</h2>
                    <p className='newsletter-description'>Subscribe to receive exclusive offers and updates.</p>
                    <input type="email" placeholder="Enter your email..." className='newsletter-email'></input>
                </div>
            </div>
        </>
    )
}

export default NewsLetter
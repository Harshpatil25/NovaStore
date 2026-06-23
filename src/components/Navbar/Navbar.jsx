import './Navbar.css';
import { Link } from "react-router-dom"

function Navbar(){
    return(
        <>
            <nav className="navbar">
                <ul className="nav-links">
                    <li className='li-a'><Link to='/'>Home</Link></li>
                    <li className='li-a'><Link to="/shop">Shop</Link></li>
                    <li className='li-a'><Link to="/about">About</Link></li>
                    <li className='li-a'><Link to="/contact">Contact</Link></li>
                    <li className='add'><Link to='/addProduct'>➕</Link></li>
                </ul>
            </nav>
        </>
    )
}

export default Navbar;
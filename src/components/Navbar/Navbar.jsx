import './Navbar.css';
import logo from '../../assets/logo.png';
import { Link } from "react-router-dom"

function Navbar(){
    return(
        <>
            <nav className="navbar">
                <ul className="nav-links">
                    <img src={logo} alt="Nova Store Logo" className="logo" />
                    <h1 className="logo-text">NovaStore</h1>
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to="/shop">Shop</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                    <li><Link to='/addProduct'>Add Product</Link></li>
                    <input type="text" placeholder="Search..." className="search-bar" />
                </ul>
            </nav>
        </>
    )
}

export default Navbar;
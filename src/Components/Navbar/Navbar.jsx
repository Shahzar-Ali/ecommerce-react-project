import { useState, useContext } from 'react';
import { X, Menu } from 'lucide-react';
import { Link } from 'react-router-dom';
import logo from '../Assets/e-com.png';
import cart from '../Assets/cart_icon.png';
import './Navbar.css';
import NavItems from './NavItems';
import { shopContext } from '../../Context/ShopContext';

export const Navbar = () => {
    const [open, setOpen] = useState(false);
    const [menu, setMenu] = useState("Shop");

    const { getTotalItems } = useContext(shopContext);

    const toggleMobileMenu = () => {
        setOpen(prevOpen => !prevOpen);
    };

    return (
        <div className="navbar">
            <div className="logo-container">
                <img src={logo} alt="logo" className="logo" />
            </div>
            <div className="mobile-menu-icon" onClick={toggleMobileMenu}>
                {open ? <X /> : <Menu />}
            </div>
            <div className={`menu-content ${open ? 'active' : ''}`}>
                <NavItems menu={menu} setMenu={setMenu} />
            </div>
            <div className={`action-container ${open ? 'active' : ''}`}>
                <Link to='/Login' onClick={() => setMenu("login")} className="login-button">Login</Link>
                <Link to='/cart' onClick={() => setMenu("cart")}>
                    <img src={cart} alt="cart" className="cart-icon" />
                </Link>
                <div className="cart-count">{getTotalItems()}</div>
            </div>
        </div>
    );
};

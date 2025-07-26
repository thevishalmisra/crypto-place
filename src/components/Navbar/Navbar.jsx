import React, { useContext } from 'react';
import './Navbar.css';
import logo from '../../assets/logo.png';
import arrow_icon from '../../assets/arrow_icon.png';
import { CoinContext } from '../../context/CoinContext';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const { setcurrency } = useContext(CoinContext);
  const location = useLocation();

  const currencyHandler = (event) => {
    const value = event.target.value;
    const currencies = {
      usd: { name: "usd", symbol: "$" },
      eur: { name: "eur", symbol: "€" },
      inr: { name: "inr", symbol: "₹" }
    };
    setcurrency(currencies[value] || currencies.usd);
  };

  const isActive = (path) => location.pathname === path ? 'active' : '';

  return (
    <nav className='navbar'>
      <Link to='/' className='navbar-logo'>
        <img src={logo} alt="Cryptoplace Logo" className='logo' />
      </Link>

      <ul className='navbar-links'>
        <li className={isActive('/')}><Link to='/'>Home</Link></li>
        <li className={isActive('/features')}><Link to='/features'>Features</Link></li>
        <li className={isActive('/pricing')}><Link to='/pricing'>Pricing</Link></li>
        <li className={isActive('/blog')}><Link to='/blog'>Blog</Link></li>
      </ul>

      <div className="nav-right">
        <select onChange={currencyHandler} aria-label="Select currency">
          <option value="usd">USD</option>
          <option value="eur">EUR</option>
          <option value="inr">INR</option>
        </select>
        <button className="signup-button">
          Sign up <img src={arrow_icon} alt="Arrow Icon" />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;



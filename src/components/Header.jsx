import React from 'react';
import { FaShoppingCart } from 'react-icons/fa';

const Header = () => (
    <header style={{ display: 'flex', justifyContent: 'space-between', padding: '10px', background: '#f5f5f5' }}>
        <h1>Computer Store</h1>
        <nav>
            <ul style={{ display: 'flex', listStyle: 'none' }}>
                <li style={{ margin: '0 10px' }}>Home</li>
                <li style={{ margin: '0 10px' }}>Catalogue</li>
                <li style={{ margin: '0 10px' }}>About</li>
            </ul>
        </nav>
        <FaShoppingCart />
    </header>
);
export default Header;

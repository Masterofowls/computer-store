import React from 'react';

const Navbar = () => (
    <div style={{ position: 'sticky', top: 0, background: '#333', padding: '10px' }}>
        <ul style={{ display: 'flex', listStyle: 'none', justifyContent: 'space-around', color: '#fff' }}>
            <li>Categories</li>
            <li>Deals</li>
            <li>New Arrivals</li>
        </ul>
    </div>
);

export default Navbar;

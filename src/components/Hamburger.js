import React from 'react';
import '../styling/Hamburger.css';

const HamburgerMenu = props => (
    <button className="toggle-button">
        <div className="toggle-button_line" />
        <div className="toggle-button_line" />
        <div className="toggle-button_line" />
    </button>
);

export default HamburgerMenu;
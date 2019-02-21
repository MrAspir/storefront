import React from 'react';

import Logo from './Logo/Logo';
import Menu from './Menu/Menu';
import CartWidget from '../Cart/CartWidget/CartWidget';

const Header = () => (
    <div className="Header">
        <div className="Header__container">
            <div className="Header__row">
                <div className="Header__logo">
                    <Logo />
                </div>

                <div className="Header__menu">
                    <Menu />
                </div>

                <div className="Header__cart">
                    <CartWidget />
                </div>
            </div>
        </div>
    </div>
);

export default Header;

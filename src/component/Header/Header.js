import React from 'react';

import Logo from './component/Logo/Logo';
import Menu from './component/Menu/Menu';
import Cart from './component/Cart/Cart';

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
                    <Cart />
                </div>
            </div>
        </div>
    </div>
);

export default Header;

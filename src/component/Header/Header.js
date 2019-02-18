import React from 'react';

import Logo from './component/Logo/Logo';

const Header = () => (
    <div className="Header">
        <div className="Header__container">
            <div className="Header__row">
                <div className="Header__logo">
                    <Logo />
                </div>

                <div className="Header__menu">

                </div>

                <div className="Header__cart">

                </div>
            </div>
        </div>
    </div>
);

export default Header;

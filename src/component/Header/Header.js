import React from 'react';
import PropTypes from 'prop-types';

import Logo from './Logo/Logo';
import Menu from './Menu/Menu';
import CartWidget from '../Cart/CartWidget/CartWidget';

const Header = props => (
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
                    <CartWidget {...props} />
                </div>
            </div>
        </div>
    </div>
);

Header.propTypes = {
    cart: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        image: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        brand: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        quantity: PropTypes.number.isRequired
    })).isRequired,
    onRemoveCartItem: PropTypes.func.isRequired
};

export default Header;

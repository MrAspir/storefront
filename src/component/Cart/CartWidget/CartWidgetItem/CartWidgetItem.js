import React from 'react';
import PropTypes from 'prop-types';

import config from '../../../../config';

const CartWidgetItem = ({ image, title, brand, price, quantity, onRemoveCartItem }) => (
    <div className="CartWidgetItem">
        <div className="CartWidgetItem__media">
            <picture className="CartWidgetItem__picture">
                <img src={`${config.host}/media/${image}`} alt={title} />
            </picture>
        </div>

        <div className="CartWidgetItem__content">
            <div className="CartWidgetItem__title">
                {title}
                <span className="CartWidgetItem__quantity">x {quantity}</span>
            </div>

            <div className="CartWidgetItem__brand">{brand}</div>
            <div className="CartWidgetItem__price">${price.toFixed(2)}</div>
            <button className="CartWidgetItem__remove" onClick={onRemoveCartItem}></button>
        </div>
    </div>
);

CartWidgetItem.propTypes = {
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    brand: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    quantity: PropTypes.number.isRequired,
    onRemoveCartItem: PropTypes.func.isRequired
};

export default CartWidgetItem;

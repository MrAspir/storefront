import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import config from '../../../config';

import Quantity from '../Quantity/Quantity';

const { host, routs } = config;

class CartItem extends Component {
    static  propTypes = {
        id: PropTypes.number.isRequired,
        image: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        brand: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        quantity: PropTypes.number.isRequired,
        onUpdateCartItemQuantity: PropTypes.func.isRequired,
        onRemoveCartItem: PropTypes.func.isRequired
    };

    totalPrice = () => this.props.price * this.props.quantity;

    render() {
        const { id, image, title, brand, price, quantity, onUpdateCartItemQuantity, onRemoveCartItem } = this.props;

        return (
            <tr className="CartItem">
                <td>
                    <div className="CartItem__product">
                        <div className="CartItem__media">
                            <Link to={routs.product.replace(':id', id)}>
                                <picture className="CartItem__picture">
                                    <img src={`${host}/media/${image}`} alt={title} />
                                </picture>
                            </Link>
                        </div>

                        <div className="CartItem__content">
                            <div className="CartItem__brand">{brand}</div>
                            <div className="CartItem__title">{title}</div>
                            <div className="CartItem__price">${price.toFixed(2)}</div>
                        </div>
                    </div>
                </td>

                <td className="CartItem__quantity">
                    <Quantity quantity={quantity} onQuantityChange={value => onUpdateCartItemQuantity(id, value)} />
                </td>

                <td className="CartItem__total">
                    <div className="CartItem__price">${this.totalPrice().toFixed(2)}</div>
                </td>

                <td className="CartItem__action">
                    <button className="CartItem__remove" onClick={onRemoveCartItem}></button>
                </td>
            </tr>
        );
    }
}

export default CartItem;

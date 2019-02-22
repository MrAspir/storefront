import React, { Component } from 'react';
import PropTypes from 'prop-types';

import config from '../../config';

import ProductService from '../../service/product';

import Quantity from '../Cart/Quantity/Quantity';

class Product extends Component {
    static propTypes = {
        match: PropTypes.shape({
            params: PropTypes.shape({
                id: PropTypes.string.isRequired
            }).isRequired
        }).isRequired,
        onUpdateCart: PropTypes.func.isRequired
    };

    state = {
        id: this.props.match.params.id,
        isLoaded: false,
        product: {},
        quantity: 1
    };

    quantityChange = (value) => {
        this.setState({
           quantity: value
        });
    };

    onSubmit = (event) => {
        event.preventDefault();

        const { id, image, title, brand, description, price } = this.state.product;

        this.props.onUpdateCart({
            id,
            image,
            title,
            brand,
            description,
            price,
            quantity: this.state.quantity
        });
    };

    componentDidMount() {
        ProductService.getOne(+this.state.id).then((response) => {
           this.setState({
               isLoaded: true,
               product: response
           });
        });
    }

    render() {
        const { image, brand, title, price, description } = this.state.product;

        return (
            <div className="Product">
                <div className="Product__container">
                    <div className={`Product__row ${this.state.isLoaded ? '' : 'loading'}`}>
                        <div className="Product__left">
                            <div className="Product__media">
                                <picture className="Product__picture">
                                    <img src={`${config.host}/media/${image}`} alt={title} />
                                </picture>
                            </div>
                        </div>

                        <div className="Product__right">
                            <div className="Product__brand">{brand}</div>
                            <div className="Product__title">{title}</div>
                            <div className="Product__price">${(+price).toFixed(2)}</div>
                            <div className="Product__description">{description}</div>

                            <form className="Product__form" onSubmit={this.onSubmit}>
                                <div className="Product__quantity">
                                    <Quantity
                                        quantity={this.state.quantity}
                                        onQuantityChange={(value) => this.quantityChange(value)}
                                    />
                                </div>

                                <button className="Product__button">Add to cart</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Product;

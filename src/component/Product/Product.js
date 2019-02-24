import React, { Component } from 'react';
import PropTypes from 'prop-types';

import config from '../../config';

import ProductService from '../../service/product';

import Quantity from '../Cart/Quantity/Quantity';

const { host } = config;

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

    isLoaded = () => this.state.isLoaded;

    onLoad = (id) => ProductService.getOne(id)
        .then(response => (
            this.setState({
                isLoaded: true,
                product: response
            })
        ));

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
        this.onLoad(+this.state.id);
    }

    componentWillUpdate(nextProps, nextState, nextContext) {
        this.onLoad(+nextState.id);
    }

    componentWillReceiveProps(nextProps, nextContext) {
        const nextId = nextProps.match.params.id;

        if (nextId !== this.state.id) {
            this.setState({
                id: nextId
            })
        }
    }

    render() {
        const { product: { image, brand, title, price, description }, quantity } = this.state;

        return (
            <div className="Product">
                <div className="Product__container">
                    <div className={`Product__row ${this.isLoaded() ? '' : 'loading'}`}>
                        <div className="Product__left">
                            <div className="Product__media">
                                <picture className="Product__picture">
                                    <img src={`${host}/media/${image}`} alt={title} />
                                </picture>
                            </div>
                        </div>

                        <div className="Product__right">
                            <div className="Product__brand">{brand}</div>
                            <h1 className="Product__title">{title}</h1>
                            <div className="Product__price">${(+price).toFixed(2)}</div>
                            <div className="Product__description">{description}</div>

                            <form className="Product__form" onSubmit={this.onSubmit}>
                                <div className="Product__quantity">
                                    <Quantity
                                        quantity={quantity}
                                        onQuantityChange={value => this.quantityChange(value)}
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

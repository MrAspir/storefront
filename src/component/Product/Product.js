import React, { Component } from 'react';

import config from '../../config';

import ProductService from '../../service/product';

import Quantity from '../Cart/Quantity/Quantity';

class Product extends Component {
    state = {
        id: this.props.match.params.id,
        isLoaded: false,
        product: {}
    };

    onSubmit = (event) => {

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
                    <div className="Product__row">
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
                            <div className="Product__price">${price}</div>
                            <div className="Product__description">{description}</div>

                            <form className="Product__form" onSubmit={this.onSubmit}>
                                <div className="Product__quantity">
                                    <Quantity />
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

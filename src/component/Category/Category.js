import React, { Component } from 'react';
import PropTypes from 'prop-types';

import ProductService from '../../service/product';

import CategorySlide from './CategorySlide/CategorySlide';
import CategoryCard from './CategoryCard/CategoryCard';

class Category extends Component {
    static propTypes = {
        onUpdateCart: PropTypes.func.isRequired
    };

    state = {
        isLoaded: false,
        products: []
    };

    idLoaded = () => this.state.isLoaded;

    addToCart = (productId) => {
        const {
            id, image, title, brand, description, price
        } = this.state.products.find(product => product.id === productId);

        this.props.onUpdateCart({
            id,
            image,
            title,
            brand,
            description,
            price,
            quantity: 1
        });
    };

    componentDidMount() {
        ProductService.getAll()
            .then(response => (
                this.setState({
                    isLoaded: true,
                    products: response
                })
            ));
    }

    render() {
        return (
            <div className="Category">
                <CategorySlide />

                <div className="Category__container">
                    <div className={`Category__row ${this.idLoaded() ? '' : 'loading'}`}>
                        {this.idLoaded() && this.state.products.map(product => (
                            <CategoryCard
                                key={product.id}
                                {...product}
                                onAddToCart={() => this.addToCart(product.id)}
                            />
                        ))}
                    </div>
                </div>
            </div>
        );
    }
}

export default Category;

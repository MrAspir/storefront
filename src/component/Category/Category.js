import React, { Component } from 'react';

import ProductService from '../../service/product';

import CategorySlide from './CategorySlide/CategorySlide';
import CategoryCard from './CategoryCard/CategoryCard';

class Category extends Component {
    state = {
        isLoaded: false,
        products: []
    };

    addToCart = () => {

    };

    componentDidMount() {
        ProductService.getAll().then((response) => {
            this.setState({
                isLoaded: true,
                products: response
            });
        });
    }

    render() {
        return (
            <div className="Category">
                <CategorySlide />

                <div className="Category__container">
                    <div className={`Category__row ${this.state.isLoaded ? '' : 'loading'}`}>
                        {this.state.isLoaded && this.state.products.map(product => (
                            <CategoryCard
                                key={product.id}
                                {...product}
                                addToCart={() => this.addToCart()}
                            />
                        ))}
                    </div>
                </div>
            </div>
        );
    }
}

export default Category;

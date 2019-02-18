import React, { Component } from 'react';

class Product extends Component {
    state = {
        id: this.props.match.params.id,
    };

    render() {
        return (
            <div className="Product">
                Product { this.state.id }
            </div>
        );
    }
}

export default Product;

import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Quantity extends Component {
    static propTypes = {
        quantity: PropTypes.number.isRequired,
        onQuantityChange: PropTypes.func.isRequired
    };

    onChange = (event) => {
        let { value } = event.target;

        value = +value;

        if (value < 1) {
            value = 1;
        }

        this.props.onQuantityChange(value);
    };

    quantity = (event, number) => {
        event.preventDefault();

        if (number < 0 && this.props.quantity === 1) {
            return;
        }

        this.props.onQuantityChange(this.props.quantity + number);
    };

    render() {
        return (
            <div className="Quantity">
                <div className="Quantity__input">
                    <input className="form-control" type="number" name="quantity" min="1" value={this.props.quantity} onChange={this.onChange} />
                </div>

                <div className="Quantity__controls">
                    <button className="Quantity__increment" onClick={(event) => this.quantity(event, 1)}>+</button>
                    <button className="Quantity__decrement" onClick={(event) => this.quantity(event, -1)}>-</button>
                </div>
            </div>
        );
    }
}

export default Quantity;

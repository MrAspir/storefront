import React, { Component } from 'react';

class Quantity extends Component {
    onChange = (event) => {
        const { name } = event.target;
        let { value } = event.target;

        if (value < 1) {
            value = 1;
        }

        this.props.onQuantityChange(+value);
    };

    quantity = (event, number) => {
        event.preventDefault();

        if (number < 0 && this.props.quantity === 1) {
            return;
        }

        console.log(this.props.quantity);
        console.log(number);

        this.props.onQuantityChange(this.props.quantity + number);
    };

    render() {
        console.log(this.props.quantity);

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

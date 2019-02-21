import React, { Component } from 'react';

class Quantity extends Component {
    state = {
        quantity: 1
    };

    onChange = (event) => {
        const { name } = event.target;
        let { value } = event.target;

        if (value < 1) {
            value = 1;
        }

        this.setState({
            [name]: +value
        });
    };

    quantity = (event, number) => {
        event.preventDefault();

        if (+number < 0 && this.state.quantity === 1) {
            return;
        }

        this.setState({
            quantity: this.state.quantity + number
        })
    };

    render() {
        return (
            <div className="Quantity">
                <div className="Quantity__input">
                    <input className="form-control" type="number" name="quantity" min="1" value={this.state.quantity} onChange={this.onChange} />
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

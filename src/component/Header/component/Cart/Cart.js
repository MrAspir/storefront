import React, { Component } from 'react';

class Cart extends Component {
    state = {
        count: 0,
        dropIsShow: false
    };

    dropShow = () => this.setState({ dropIsShow: true });
    dropHide = () => this.setState({ dropIsShow: false });
    dropToggle = () => this.state.dropIsShow ? this.dropHide() : this.dropShow();

    setWrapperRef = (node) => {
        this.wrapperRef = node;
    };

    handleClickOutside = (event) => {
        if (this.state.dropIsShow) {
            if (this.wrapperRef && !this.wrapperRef.contains(event.target)) {
                this.dropHide();
            }
        }
    };

    componentDidMount() {
        document.addEventListener('mousedown', this.handleClickOutside);
    }

    componentWillUnmount() {
        document.removeEventListener('mousedown', this.handleClickOutside);
    }

    render() {
        return (
            <div className="Cart" ref={this.setWrapperRef}>
                <button className="Cart__button" onClick={this.dropToggle}>My Cart ({this.state.count})</button>

                <div className={`Cart__drop ${this.state.dropIsShow ? 'show' : ''}`}>
                    <p>Cart's empty</p>
                </div>
            </div>
        );
    }
}

export default Cart;

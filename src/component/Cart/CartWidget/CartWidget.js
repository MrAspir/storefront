import React, { Component } from 'react';

class CartWidget extends Component {
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
            <div className="CartWidget" ref={this.setWrapperRef}>
                <button className="CartWidget__button" onClick={this.dropToggle}>My Cart ({this.state.count})</button>

                <div className={`CartWidget__drop ${this.state.dropIsShow ? 'show' : ''}`}>
                    <p>Cart's empty</p>
                </div>
            </div>
        );
    }
}

export default CartWidget;

import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import config from '../../../config';

const CategoryCard = ({ id, image, title, brand, price, onAddToCart }) => (
    <div className="CategoryCard">
        <div className="CategoryCard__inner">
            <div className="CategoryCard__media">
                <picture className="CategoryCard__picture">
                    <img src={`${config.host}/media/${image}`} alt={title} />
                </picture>

                <div className="CategoryCard__controls">
                    <Link className="CategoryCard__button" to={`/product/${id}`}>View details</Link>
                    <button className="CategoryCard__button" onClick={onAddToCart}>Add to cart</button>
                </div>
            </div>

            <div className="CategoryCard__content">
                <div className="CategoryCard__brand">{brand}</div>
                <h3 className="CategoryCard__title">{title}</h3>
                <div className="CategoryCard__price">${price.toFixed(2)}</div>
            </div>
        </div>
    </div>
);

CategoryCard.propTypes = {
    id: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    brand: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    onAddToCart: PropTypes.func.isRequired
};

export default CategoryCard;

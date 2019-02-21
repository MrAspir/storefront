import React from 'react';
import { Link } from 'react-router-dom';

import config from '../../../config';

const CategoryCard = ({ id, image, title, brand, price, addToCart }) => (
    <div className="CategoryCard">
        <div className="CategoryCard__inner">
            <div className="CategoryCard__media">
                <picture className="CategoryCard__picture">
                    <img src={`${config.host}/media/${image}`} alt={title} />
                </picture>

                <div className="CategoryCard__controls">
                    <Link className="CategoryCard__button" to={`//${config.host}/product/${id}`}>View details</Link>
                    <button className="CategoryCard__button" onClick={addToCart}>Add to cart</button>
                </div>
            </div>

            <div className="CategoryCard__content">
                <div className="CategoryCard__brand">{brand}</div>
                <h3 className="CategoryCard__title">{title}</h3>
                <div className="CategoryCard__price">${price}</div>
            </div>
        </div>
    </div>
);

export default CategoryCard;

import React from 'react';

import config from '../../../config';

const CategorySlide = () => (
    <div className="CategorySlide">
        <picture className="CategorySlide__picture">
            <img src={`${config.host}/media/plates-header.jpg`} alt="Plates" />
        </picture>

        <div className="CategorySlide__container">
            <div className="CategorySlide__content">
                <h1>Plates</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at purus pulvinar, placerat turpis ac, interdum metus. In eget massa sed enim hendrerit auctor a eget arcu. Curabitur ac pharetra nisl sit.</p>
            </div>
        </div>
    </div>
);

export default CategorySlide;

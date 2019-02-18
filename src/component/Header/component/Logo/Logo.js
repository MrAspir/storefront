import React from 'react';
import { Link } from 'react-router-dom';

const Logo = () => (
    <div className="Logo">
        <Link to="/" class="Logo__link">
            <img src="media/logo.png" alt="Hero" />
        </Link>
    </div>
);

export default Logo;

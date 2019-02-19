import React from 'react';
import { Link } from 'react-router-dom';

const Logo = () => (
    <Link className="Logo" to="/">
        <img src="media/logo.png" alt="Hero" />
    </Link>
);

export default Logo;

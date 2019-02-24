import React from 'react';
import { Link } from 'react-router-dom';

import config from '../../../config';

const { host, routs } = config;

const Logo = () => (
    <Link className="Logo" to={routs.homepage}>
        <img src={`${host}/media/logo.png`} alt="Hero" />
    </Link>
);

export default Logo;

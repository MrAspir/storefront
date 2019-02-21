import React from 'react';
import { Link } from 'react-router-dom';

import config from '../../../../config';

const Logo = () => (
    <Link className="Logo" to="/">
        <img src={`${config.host}/media/logo.png`} alt="Hero" />
    </Link>
);

export default Logo;

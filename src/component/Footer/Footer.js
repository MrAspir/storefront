import React from 'react';

import Copyright from './component/Copyright/Copyright';
import Developed from './component/Developed/Developed';

const Footer = () => (
    <footer className="Footer">
        <div className="Footer__container">
            <div className="Footer__row">
                <div className="Footer__copyright">
                    <Copyright />
                </div>

                <div className="Footer__developed">
                    <Developed />
                </div>
            </div>
        </div>
    </footer>
);

export default Footer;

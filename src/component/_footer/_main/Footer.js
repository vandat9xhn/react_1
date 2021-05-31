import React from 'react';
//
import FooterBody from '../body/_main/FooterBody';
import FooterFoot from '../foot/_main/FooterFoot';
//
import './Footer.scss';

//
function Footer() {
    return (
        <div className="Footer">
            <div className="Footer_contain">
                <div>
                    <FooterBody />
                </div>

                <div>
                    <FooterFoot />
                </div>
            </div>
        </div>
    );
}

export default Footer;

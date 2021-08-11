import React from 'react';
import { withRouter } from 'react-router-dom';
//
import FooterBody from '../body/_main/FooterBody';
import FooterFoot from '../foot/_main/FooterFoot';
//
import './Footer.scss';

//
function Footer() {
    //
    return (
        <div
            className={`Footer ${
                location.pathname.search(
                    /(\/profile|\/stor(ies|y)|\/new-feed|\/city-street)/
                ) >= 0
                    ? 'display-none'
                    : ''
            }`}
        >
            <div>
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

export default withRouter(Footer);

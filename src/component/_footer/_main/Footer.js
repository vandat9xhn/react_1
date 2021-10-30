import React from 'react';
import { withRouter } from 'react-router-dom';
//
import FooterWhich from '../which_footer/FooterWhich';
//
import './Footer.scss';

//
function Footer() {
    //
    if (/(^\/profile\/\d+$|\/friends)/.test(location.pathname)) {
        return null;
    }

    //
    return (
        <div className="Footer">
            <FooterWhich />

            <div className="Footer_foot padding-y-10px bg-shadow-9 font-18px text-upper font-500">
                <div className="display-flex-center">
                    <span className="color-react">ReactJs</span>
                    <span className="Footer_join margin-x-15px"></span>
                    <span className="color-django">Django</span>
                </div>
            </div>
        </div>
    );
}

export default withRouter(Footer);

import React from 'react';
//
import FooterWhich from '../which_footer/FooterWhich';

//
import './Footer.scss';

//
function Footer() {
    //
    return (
        <div className="Footer">
            <FooterWhich />

            <div className="padding-y-10px bg-shadow-9 font-18px text-upper font-500">
                <div className="display-flex-center">
                    <span className="color-react">ReactJs</span>
                    <span className="Footer_join margin-x-15px"></span>
                    <span className="color-django">Django</span>
                </div>
            </div>
        </div>
    );
}

export default Footer;

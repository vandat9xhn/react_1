import React from 'react';
import PropTypes from 'prop-types';
//
import FPHomeAboutSite from '../../../home/left/about/site/FPHomeAboutSite';
import FPHomeAboutPhone from '../../../home/left/about/phone/FPHomeAboutPhone';
import FPHomeAboutChat from '../../../home/left/about/chat/FPHomeAboutChat';

import FbPageAboutHead from '../../_components/head/FbPageAboutHead';

//
FbPageAboutContact.propTypes = {};

//
function FbPageAboutContact({ site_obj, phone_obj, page_id }) {
    //
    return (
        <div className="FbPageAboutContact">
            <div className="fb-page-about-head">
                <FbPageAboutHead title="ADDITIONAL CONTACT INFO" />
            </div>

            <div>
                <div className="fb-page-about-item">
                    <FPHomeAboutSite site_obj={site_obj} />
                </div>

                <div className="fb-page-about-item">
                    <FPHomeAboutPhone phone_obj={phone_obj} />
                </div>

                <div className="fb-page-about-item">
                    <FPHomeAboutChat page_id={page_id} />
                </div>
            </div>
        </div>
    );
}

export default FbPageAboutContact;

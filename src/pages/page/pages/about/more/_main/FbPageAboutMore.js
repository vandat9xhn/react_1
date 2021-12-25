import React from 'react';
import PropTypes from 'prop-types';
//
import FPHomeAboutInfo from '../../../home/left/about/info/FPHomeAboutInfo';

import FbPageAboutHead from '../../_components/head/FbPageAboutHead';

//
FbPageAboutMore.propTypes = {};

//
function FbPageAboutMore({ info_obj }) {
    //
    return (
        <div className="FbPageAboutMore">
            <div className="fb-page-about-head">
                <FbPageAboutHead title="MORE INFO" />
            </div>

            <div>
                <div className="fb-page-about-item">
                    <FPHomeAboutInfo info_obj={info_obj} />
                </div>
            </div>
        </div>
    );
}

export default FbPageAboutMore;

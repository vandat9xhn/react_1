import React from 'react';
import PropTypes from 'prop-types';
//
import FPHomeAboutLike from '../../../home/left/about/like/FPHomeAboutLike';
import FPHomeAboutFollow from '../../../home/left/about/follow/FPHomeAboutFollow';

import FbPageAboutHead from '../../_components/head/FbPageAboutHead';

//
FbPageAboutGeneral.propTypes = {};

//
function FbPageAboutGeneral({ like_obj, follow_obj }) {
    //
    return (
        <div className="FbPageAboutGeneral">
            <div className="fb-page-about-head">
                <FbPageAboutHead title="GENERAL" />
            </div>

            <div>
                <div className="fb-page-about-item">
                    <FPHomeAboutLike like_obj={like_obj} />
                </div>

                <div className="fb-page-about-item">
                    <FPHomeAboutFollow follow_obj={follow_obj} />
                </div>
            </div>
        </div>
    );
}

export default FbPageAboutGeneral;

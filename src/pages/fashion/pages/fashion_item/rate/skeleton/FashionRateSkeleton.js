import React from 'react';
import PropTypes from 'prop-types';
//
import SkeletonDiv from '../../../../../../component/skeleton/skeleton_div/SkeletonDiv';
//
import './FashionRateSkeleton.scss';

//
FashionRateSkeleton.propTypes = {};

//
function FashionRateSkeleton(props) {
    return (
        <div>
            <div className="FashionRateChart">
                <div className="FashionRateSkeleton_title FashionRateChart_title">
                    <SkeletonDiv />
                </div>

                <div className="display-flex-center">
                    <div className="FashionRateSkeleton_avg">
                        <SkeletonDiv />
                    </div>
                </div>

                <div className="FashionRateBar_bar">
                    <SkeletonDiv num={5} />
                </div>
            </div>
            <br />

            <div>
                {[1, 2].map((ix) => (
                    <div key={ix} className="FashionRateSkeleton_cmt_item">
                        <div className="FashionRateSkeleton_user">
                            <SkeletonDiv />
                        </div>

                        <div className="FashionRateSkeleton_cmt">
                            <SkeletonDiv />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default FashionRateSkeleton;

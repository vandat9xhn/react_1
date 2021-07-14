import React from 'react';
import PropTypes from 'prop-types';
//
import SkeletonDiv from '../../../../../../component/skeleton/skeleton_div/SkeletonDiv';
//
import image_loading from '../../../../../../../image/image_loading.svg';
import '../../item/_main/CityItem.scss';
import './CityItemSkeleton.scss';

//
CityItemSkeleton.propTypes = {};

//
function CityItemSkeleton() {
    // 
    return (
        <div className="CityItem brs-5px bg-primary">
            <div className="CityItemSkeleton_head">
                <SkeletonDiv />
            </div>

            <div className="CityItemSkeleton_address">
                <SkeletonDiv num={2} />
            </div>

            <div className="CityItemSkeleton_quote">
                <SkeletonDiv />
            </div>

            <div className="CityItem_img-contain bg-loader brs-5px">
                <div className="display-flex-center h-100per">
                    <img src={image_loading} alt="" />
                </div>
            </div>
        </div>
    );
}

export default CityItemSkeleton;

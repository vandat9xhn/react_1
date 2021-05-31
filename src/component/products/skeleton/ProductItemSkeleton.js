import React from 'react';
import PropTypes from 'prop-types';
// 
import SkeletonDiv from '../../skeleton/skeleton_div/SkeletonDiv';
// 
import image_loading from '../../../../image/image_loading.svg';

//
ProductItemSkeleton.propTypes = {};

//
function ProductItemSkeleton() {
    // 
    return (
        <div className="ProductItem">
            <div className="ProductItem_head">
                <div className="ProductItem_img">
                    <img src={image_loading} alt="" />
                </div>
            </div>

            <SkeletonDiv num={3} />
        </div>
    );
}

export default ProductItemSkeleton;

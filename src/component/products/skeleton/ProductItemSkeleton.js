import React from 'react';
import PropTypes from 'prop-types';
//
import SkeletonDiv from '../../skeleton/skeleton_div/SkeletonDiv';
//
import image_loading from '../../../../image/image_loading.svg';

//
ProductItemSkeleton.propTypes = {};

//
function ProductItemSkeleton({ num_row_info }) {
    //
    return (
        <div className="ProductItem padding-8px position-rel">
            <div className="ProductItem_head">
                <div className="ProductItem_head-img pos-abs-100">
                    <img src={image_loading} alt="" />
                </div>
            </div>

            <div className="ProductItem_foot">
                <SkeletonDiv num={num_row_info} />
            </div>
        </div>
    );
}

export default ProductItemSkeleton;

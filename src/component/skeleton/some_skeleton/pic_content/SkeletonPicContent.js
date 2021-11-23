import React from 'react';
import PropTypes from 'prop-types';
//
import SkeletonDiv from '../../skeleton_div/SkeletonDiv';
//
import white_person from '../../../../../image/white_person.svg';

//
SkeletonPicContent.propTypes = {};

//
function SkeletonPicContent({ size_pic }) {
    //
    return (
        <div className="display-flex align-items-center">
            <img
                className="brs-50 border-blur object-fit-cover"
                src={white_person}
                alt=""
                width={size_pic}
                height={size_pic}
            />

            <div className="flex-grow-1 padding-8px line-20px">
                <SkeletonDiv />

                <SkeletonDiv />
            </div>
        </div>
    );
}

export default SkeletonPicContent;

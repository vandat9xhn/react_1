import React from 'react';
import PropTypes from 'prop-types';
//
import { UnitNumber } from '../../../../../_some_function/UnitNumber';
// 
import IconsPost from '../../../../../_icons_svg/icons_post/IconsPost';

//
BtnPostShare.propTypes = {};

//
function BtnPostShare({ sharePost, count_share }) {
    //
    return (
        <div
            className="BtnPostShare display-flex-center h-100per cursor-pointer"
            onClick={sharePost}
            title="Share"
        >
            <IconsPost y={200} />

            <div className="margin-left-5px">
                <span className="BtnPostCmtShare_title">
                    Share{count_share >= 2 ? 's' : ''}
                </span>

                <span
                    className={
                        count_share ? 'BtnPostCmtShare_total' : 'display-none'
                    }
                >
                    {UnitNumber(count_share)}
                </span>
            </div>
        </div>
    );
}

export default BtnPostShare;

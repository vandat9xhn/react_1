import React from 'react';
import PropTypes from 'prop-types';
//
import IconsPost from '../../../../../../../_icons_svg/icons_post/IconsPost';
import PLUseful from '../../../../useful/PLUseful';
// 
import './PLRItemFootLeft.scss';

//
PLRItemFootLeft.propTypes = {};

//
function PLRItemFootLeft({
    count_like,
    count_discuss,

    handleLike,
    showDiscuss,
}) {
    //
    return (
        <div className="PLRItemFootLeft">
            <div className="display-flex align-items-center text-blue">
                <PLUseful count_like={count_like} handleLike={handleLike} />

                <div
                    className="margin-left-20px cursor-pointer"
                    onClick={showDiscuss}
                >
                    <IconsPost x={200} size_icon="15px" />

                    <span className="margin-left-5px">{count_discuss || ''} thảo luận</span>
                </div>
            </div>
        </div>
    );
}

export default PLRItemFootLeft;

import React from 'react';
import PropTypes from 'prop-types';

// 
InfoCmt.propTypes = {};

// 
function InfoCmt(props) {
    const {count_comment, handleClickBtnCmt} = props;

    // 
    return (
        <div>
            <div
                className={`Info_cmt cursor-pointer ${
                    count_comment ? '' : 'display-none'
                }`}
                onClick={handleClickBtnCmt}
            >
                {count_comment} comments
            </div>
        </div>
    );
}

export default InfoCmt;

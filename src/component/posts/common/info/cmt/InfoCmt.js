import React from 'react';
import PropTypes from 'prop-types';

//
InfoCmt.propTypes = {};

//
function InfoCmt({ count_comment, handleClickBtnCmt }) {
    //
    return (
        <div
            className={`Info_cmt cursor-pointer ${
                count_comment ? '' : 'display-none'
            }`}
            onClick={handleClickBtnCmt}
        >
            <span className="font-14px label-field">
                {count_comment} comment{count_comment > 1 ? 's' : ''}
            </span>
        </div>
    );
}

export default InfoCmt;

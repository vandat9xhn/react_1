import React from 'react';
import PropTypes from 'prop-types';

//
InfoCmt.propTypes = {};

//
function InfoCmt({ count_comment, handleClickBtnCmt }) {
    //
    return count_comment ? (
        <div
            className="Info_cmt cursor-pointer hv-underline"
            onClick={handleClickBtnCmt}
        >
            <span>
                {count_comment} comment{count_comment > 1 ? 's' : ''}
            </span>
        </div>
    ) : null;
}

export default InfoCmt;

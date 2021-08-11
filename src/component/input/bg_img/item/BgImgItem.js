import React from 'react';
import PropTypes from 'prop-types';
//
import './BgImgItem.scss';

//
BgImgItem.propTypes = {};

//
function BgImgItem({
    ix,
    is_active,
    bg_img,
    handleChooseBg,
}) {
    //
    function onChooseBg() {
        handleChooseBg(ix);
    }

    //
    return (
        <img
            className={`BgImgItem wh-100 brs-50 ${
                is_active
                    ? 'BgImgItem_img-active pointer-events-none'
                    : 'BgImgItem_img-inactive cursor-pointer'
            }`}
            src={bg_img}
            alt=""
            onClick={onChooseBg}
        />
    );
}

export default BgImgItem;

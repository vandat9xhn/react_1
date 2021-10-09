import React from 'react';
import PropTypes from 'prop-types';
//
import './CUPHomeBgItemMb.scss';

//
CUPHomeBgItemMb.propTypes = {};

//
function CUPHomeBgItemMb({ ix, is_active, is_bg_img, bg, handleChooseBg }) {
    //
    function onClick() {
        handleChooseBg(ix);
    }

    //
    return (
        <div
            className={`CUPHomeBgItemMb brs-4px border-blur ${
                is_active ? 'CUPHomeBgItemMb-active' : ''
            }`}
            style={{
                backgroundColor: is_bg_img ? undefined : bg,
                backgroundImage: is_bg_img ? `url(${bg})` : undefined,
            }}
            onClick={onClick}
        ></div>
    );
}

export default CUPHomeBgItemMb;

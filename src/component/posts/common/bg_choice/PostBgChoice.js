import React from 'react';
import PropTypes from 'prop-types';
//
import { getBgColorOrImg } from '../../../../_some_function/getBgColorOrImg';
//
import './PostBgChoice.scss';

//
PostBgChoice.propTypes = {};

//
function PostBgChoice({ bg, is_bg_img, ix, is_active, handleChooseBg }) {
    //
    function onClick() {
        !is_active && handleChooseBg(ix);
    }

    //
    return (
        <div
            className={`PostBgChoice wh-100 brs-4px border-blur ${
                is_active ? 'PostBgChoice-active' : ''
            }`}
            style={{
                ...getBgColorOrImg({ bg: bg, is_bg_img: is_bg_img }),
            }}
            onClick={onClick}
        ></div>
    );
}

export default PostBgChoice;

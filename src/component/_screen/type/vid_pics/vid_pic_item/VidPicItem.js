import React from 'react';
import PropTypes from 'prop-types';
//
import { VideoOrImage } from '../../../../../_some_function/VideoOrImage';
//
import './VidPicItem.scss';

//
VidPicItem.propTypes = {
    item_ix: PropTypes.number,
    is_active: PropTypes.bool,

    url: PropTypes.string,
    type: PropTypes.string,

    changeCurrent: PropTypes.func,
};

//
function VidPicItem({ item_ix, is_active, url, type, changeCurrent }) {
    //
    function onChangeCurrent() {
        changeCurrent(item_ix);
    }

    //
    return (
        <div
            className={`VidPicItem_item brs-5px ${
                is_active ? '' : 'opacity-05'
            }`}
            onClick={onChangeCurrent}
        >
            {VideoOrImage(url, type)}
        </div>
    );
}

export default VidPicItem;

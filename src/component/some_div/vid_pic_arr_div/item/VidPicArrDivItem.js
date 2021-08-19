import React from 'react';
import PropTypes from 'prop-types';

//
VidPicArrDivItem.propTypes = {
    vid_pic: PropTypes.string,
    ix: PropTypes.number,
    is_active: PropTypes.bool,
    handleChangeImage: PropTypes.func,
};

//
function VidPicArrDivItem({ vid_pic, ix, is_active, handleChangeImage }) {
    //
    function onChangeImage() {
        handleChangeImage(ix);
    }

    //
    return (
        <div
            className={`VidPicArrDivItem wh-100 ${
                is_active ? 'VidPicArrDivItem-active border-active' : ''
            }`}
            onClick={onChangeImage}
        >
            <img className="wh-100 object-fit-cover" src={vid_pic} alt="" />
        </div>
    );
}

export default VidPicArrDivItem;

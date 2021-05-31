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
        <div>
            <div
                className={is_active ? 'border-active' : ''}
                onClick={onChangeImage}
            >
                <img src={vid_pic} alt="" />
            </div>
        </div>
    );
}

export default VidPicArrDivItem;

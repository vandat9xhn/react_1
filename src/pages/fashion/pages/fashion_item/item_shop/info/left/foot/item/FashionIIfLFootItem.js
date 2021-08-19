import React from 'react';
import PropTypes from 'prop-types';

//
FashionIIfLFootItem.propTypes = {
    vid_pic: PropTypes.string,
    ix: PropTypes.number,
    is_active: PropTypes.bool,
    handleChangeImage: PropTypes.func,
};

//
function FashionIIfLFootItem({
    vid_pic,
    ix,
    is_active,
    
    handleChangeImage,
    handleClickVidPic,
}) {
    //
    function handleMouseEnter() {
        handleChangeImage(ix);
    }

    //
    function onClickVidPic() {
        handleClickVidPic(ix);
    }

    //
    return (
        <div
            className={`FashionIIfLFootItem wh-100 ${
                is_active ? 'FashionIIfLFootItem-active border-active' : ''
            }`}
            onClick={onClickVidPic}
            onMouseEnter={handleMouseEnter}
        >
            <img className="wh-100 object-fit-cover" src={vid_pic} alt="" />
        </div>
    );
}

export default FashionIIfLFootItem;

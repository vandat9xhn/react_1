import React, { useContext } from 'react';
import PropTypes from 'prop-types';

//
FashionIIfLFootItem.propTypes = {
    ix: PropTypes.number,
    is_active: PropTypes.bool,
    vid_pic: PropTypes.string,

    changeVidPicIx: PropTypes.func,
    handleClickVidPic: PropTypes.func,
};

//
function FashionIIfLFootItem({
    ix,
    is_active,
    vid_pic,
    
    changeVidPicIx,
    handleClickVidPic,
}) {
    //
    function handleMouseEnter() {
        changeVidPicIx(ix);
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

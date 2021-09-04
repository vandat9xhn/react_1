import React from 'react';
import PropTypes from 'prop-types';
//
import { IS_MOBILE } from '../../../../../../../../_constant/Constant';

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
    handleZoom,
}) {
    //
    function handleMouseEnter() {
        changeVidPicIx(ix);
    }

    //
    function onClickVidPic() {
        handleZoom(ix);
    }

    //
    return (
        <div
            className={`FashionIIfLFootItem wh-100 ${
                is_active ? 'FashionIIfLFootItem-active border-active' : ''
            }`}
            onClick={IS_MOBILE ? handleMouseEnter : onClickVidPic}
            onMouseEnter={IS_MOBILE ? undefined : handleMouseEnter}
        >
            <img className="wh-100 object-fit-cover" src={vid_pic} alt="" />
        </div>
    );
}

export default FashionIIfLFootItem;

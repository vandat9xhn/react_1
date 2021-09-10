import React from 'react';
import PropTypes from 'prop-types';
//
import './FsShopVidPicSingle.scss';

//
FsShopVidPicSingle.propTypes = {
    vid_pic: PropTypes.string,
};

//
function FsShopVidPicSingle({ vid_pic }) {
    //
    return (
        <div className="FsShopVidPicSingle">
            <img
                className="FsShopVidPicSingle_img w-100per"
                src={vid_pic}
                alt=""
            />
        </div>
    );
}

export default FsShopVidPicSingle;

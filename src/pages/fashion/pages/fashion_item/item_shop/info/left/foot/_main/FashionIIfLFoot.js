import React from 'react';
import PropTypes from 'prop-types';
//
import FashionIIfLFootItem from '../item/FashionIIfLFootItem';
//
import image_loading from '../../../../../../../../../../image/image_loading.svg';

//
export const FashionIIfLFootPropTypes = {
    vid_pic_arr: PropTypes.arrayOf(PropTypes.string),
    active_ix: PropTypes.number,
    handleChangeImage: PropTypes.func,
    has_fetched: PropTypes.bool,
};

//
FashionIIfLFoot.propTypes = {
    ...FashionIIfLFootPropTypes,
};
FashionIIfLFoot.defaultProps = {
    has_fetched: false,
};

//
function FashionIIfLFoot({
    vid_pic_arr,
    has_fetched,
    active_ix,

    handleChangeImage,
    handleClickVidPic,
}) {
    //
    return (
        <div
            className={`FashionIIfLFoot ${
                has_fetched ? '' : 'pointer-events-none'
            }`}
        >
            <div className="FashionIIfLFoot_row display-flex">
                {(has_fetched
                    ? vid_pic_arr
                    : [image_loading, image_loading]
                ).map((vid_pic, ix) => (
                    <div key={`${ix}`} className="FashionIIfLFoot_item">
                        <FashionIIfLFootItem
                            vid_pic={vid_pic}
                            ix={ix}
                            is_active={ix == active_ix}
                            // 
                            handleChangeImage={handleChangeImage}
                            handleClickVidPic={handleClickVidPic}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default FashionIIfLFoot;

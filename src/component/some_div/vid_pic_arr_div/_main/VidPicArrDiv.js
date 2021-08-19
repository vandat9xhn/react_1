import React from 'react';
import PropTypes from 'prop-types';
//
import VidPicArrDivItem from '../item/VidPicArrDivItem';
//
import image_loading from '../../../../../image/image_loading.svg';

//
export const VidPicArrDivPropTypes = {
    vid_pic_arr: PropTypes.arrayOf(PropTypes.string),
    active_ix: PropTypes.number,
    handleChangeImage: PropTypes.func,
    has_fetched: PropTypes.bool,
};

//
VidPicArrDiv.propTypes = {
    ...VidPicArrDivPropTypes,
};
VidPicArrDiv.defaultProps = {
    has_fetched: false,
};

//
function VidPicArrDiv({
    vid_pic_arr,
    has_fetched,
    active_ix,
    handleChangeImage,
}) {
    //
    return (
        <div
            className={`VidPicArrDiv ${
                has_fetched ? '' : 'pointer-events-none'
            }`}
        >
            <div className="VidPicArrDiv_row display-flex">
                {(has_fetched
                    ? vid_pic_arr
                    : [image_loading, image_loading]
                ).map((vid_pic, ix) => (
                    <div key={`${ix}`} className="VidPicArrDiv_item">
                        <VidPicArrDivItem
                            vid_pic={vid_pic}
                            ix={ix}
                            is_active={ix == active_ix}
                            handleChangeImage={handleChangeImage}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default VidPicArrDiv;

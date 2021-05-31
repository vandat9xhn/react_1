import React, { useState } from 'react';
import PropTypes from 'prop-types';
// 
import VidPicArrDiv from '../../../../../../../component/some_div/vid_pic_arr_div/_main/VidPicArrDiv';
// 
import image_loading from '../../../../../../../../image/image_loading.svg';
import './FashionItemInfoLeft.scss';

// 
FashionItemInfoLeft.propTypes = {
    vid_pic_arr: PropTypes.arrayOf(
        PropTypes.string,
    ),
    has_fetched: PropTypes.bool,
};

// 
function FashionItemInfoLeft({vid_pic_arr, has_fetched}) {

    // 
    const [active_ix, setActiveIx] = useState(0)

    // 
    function handleChangeImage(new_active_ix) {
        new_active_ix != active_ix && setActiveIx(new_active_ix)
    }

    // 
    return (
        <div>
            <div className="FashionInfo_img brs-5px">
                <img
                    src={has_fetched ? vid_pic_arr[active_ix] : image_loading}
                    alt=""
                />
            </div>

            <div className="FashionInfo_images">
                <VidPicArrDiv
                    vid_pic_arr={vid_pic_arr}
                    has_fetched={has_fetched}
                    active_ix={active_ix}
                    handleChangeImage={handleChangeImage}
                />
            </div>
        </div>
    );
}

export default FashionItemInfoLeft;

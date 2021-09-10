import React from 'react';
import PropTypes from 'prop-types';
//
import Carousel from '../../../../../component/carousel/_main/Carousel';
// 
import './FsShopVidPicCarousel.scss';

//
FsShopVidPicCarousel.propTypes = {};

//
function FsShopVidPicCarousel({ vid_pics }) {
    //
    return (
        <div className="FsShopVidPicCarousel">
            <Carousel
                vid_pics={[
                    vid_pics[vid_pics.length - 1],
                    ...vid_pics,
                    vid_pics[0],
                ]}
                // link_to_arr
                has_fetched={true}
                // time_interval
                // time_trans
                // disabled_btn_when_trans
                // time_disabled_btn
                // is_btn_circle
                // use_next_prev
            />
        </div>
    );
}

export default FsShopVidPicCarousel;

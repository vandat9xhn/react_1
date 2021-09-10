import React from 'react';
import PropTypes from 'prop-types';
// 
import Carousel from '../../../../../../component/carousel/_main/Carousel';

// 
FsShopInfoLeft.propTypes = {
    
};

// 
function FsShopInfoLeft({vid_pics, has_fetched}) {
    // 
    return (
        <div className="FsShopInfoLeft wh-100">
            <Carousel
                vid_pics={vid_pics}
                // link_to_arr
                has_fetched={has_fetched}
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

export default FsShopInfoLeft;
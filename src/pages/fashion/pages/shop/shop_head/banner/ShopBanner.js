import React from 'react';
import PropTypes from 'prop-types';
//
import Carousel from '../../../../../../component/carousel/_main/Carousel';
// 
import './ShopBanner.scss';

//
ShopBanner.propTypes = {
    vid_pics: PropTypes.array,
};
ShopBanner.defaultProps = {
    vid_pics: ['', '', '']
}
//
function ShopBanner(props) {
    const vid_pics = props.vid_pics.map(item => item.vid_pic);
    //
    const new_vid_pics = [
        vid_pics[vid_pics.length - 1],
        ...vid_pics,
        vid_pics[0],
    ];
    //
    return (
        vid_pics.length >= 1 && (
            <div className="ShopBanner">
                <div className="ShopBanner_carousel">
                    {vid_pics.length >= 2 ? (
                        <Carousel vid_pics={new_vid_pics} />
                    ) : (
                        <img src={new_vid_pics[0]} alt="" />
                    )}
                </div>
            </div>
        )
    );
}

export default ShopBanner;

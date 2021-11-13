import React from 'react';
import PropTypes from 'prop-types';
//
import image_loading from '../../../../../../image/image_loading.svg';
//
import VidPicPostItem from '../item/VidPicPostItem';
//
// import './VidPicsPost.scss';

VidPicsPost.propTypes = {
    vid_pics: PropTypes.array,
};

VidPicsPost.defaultProps = {
    // vid_pics: [1],
};

//
function VidPicsPost({ post_ix, vid_pics, vid_pic_count }) {
    //
    return (
        <div className="VidPicsPost">
            {vid_pic_count ? (
                <div className={vid_pic_count > 0 ? 'VidPics_grid' : ''}>
                    {vid_pics.map((item, index) => (
                        <VidPicPostItem
                            key={index}
                            index={index}
                            post_ix={post_ix}
                            vid_pic_count={vid_pic_count}
                            id={item.id}
                            vid_pic={item.vid_pic}
                        />
                    ))}
                </div>
            ) : (
                <img src={image_loading} alt="" />
            )}
        </div>
    );
}

export default VidPicsPost;

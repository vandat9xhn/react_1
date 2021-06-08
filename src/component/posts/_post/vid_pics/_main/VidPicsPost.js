import React from 'react';
import PropTypes from 'prop-types';
//
import image_loading from '../../../../../../image/image_loading.svg';
// 
import VidPicPostItem from '../item/VidPicPostItem';
// 
// import './VidPicsPost.scss';

//
function VidPicsPost(props) {
    const { post_ix, vid_pics } = props;
    
    // 
    return (
        <div className="VidPicsPost">
            {vid_pics ? (
                <div className={vid_pics.length > 0 ? 'VidPics_count' : ''}>
                    {vid_pics.map((item, index) => (
                        <VidPicPostItem
                            key={`VidPicsPost_${index}`}
                            index={index}
                            post_ix={post_ix}
                            count_vid_pic={vid_pics.length}
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

VidPicsPost.propTypes = {
    vid_pics: PropTypes.array,
};

VidPicsPost.defaultProps = {
    vid_pics: [1],
};

export default VidPicsPost;

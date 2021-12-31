import React from 'react';
import PropTypes from 'prop-types';
// 
import BtnActions from '../../../../../../../component/button/actions/BtnActions';
import Posts from '../../../../../../../component/posts/_posts/_main/Posts';
// 
import './PrPtAnAlbumFeed.scss';

//
PrPtAnAlbumFeed.propTypes = {};

//
function PrPtAnAlbumFeed({
    album_name,
    post_arr,
    has_fetched,
    
    AddPostToAlbum,
}) {
    //
    return (
        <div className="PrPtAnAlbumFeed margin-auto">
            <div className="padding-x-16px padding-y-12px brs-8px bg-primary box-shadow-1">
                <BtnActions
                    className="PrPtAnAlbumFeed_add w-100per bg-ccc font-17px"
                    title={`Add a post to ${album_name}`}
                    handleClick={AddPostToAlbum}
                />
            </div>

            <div className="PrPtAnAlbumFeed_posts margin-top-15px">
                <Posts posts={post_arr} has_fetched={has_fetched} />
            </div>
        </div>
    );
}

export default PrPtAnAlbumFeed;

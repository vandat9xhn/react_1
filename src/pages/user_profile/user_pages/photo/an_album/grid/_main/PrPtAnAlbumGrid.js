import React from 'react';
import PropTypes from 'prop-types';
//
import ProfilePhotoMain from '../../../_component/_main/ProfilePhotoMain';
import ProfilePhotoItem from '../../../_component/list/item/ProfilePhotoItem';
import PrPtAnAbGridCreate from '../create/PrPtAnAbGridCreate';
// 
import './PrPtAnAlbumGrid.scss';

//
PrPtAnAlbumGrid.propTypes = {};

//
function PrPtAnAlbumGrid({ pic_arr, pic_count, is_your }) {
    //
    function on_API_VidPic_L() {}

    //
    return (
        <div className="PrPtAnAlbumGrid padding-x-8px padding-y-12px">
            <ProfilePhotoMain
                initial_photo_arr={pic_arr}
                initial_photo_count={pic_count}
                has_create={is_your}
                CreateElm={<PrPtAnAbGridCreate />}
                //
                handle_API_Photo_L={on_API_VidPic_L}
                ProfilePhotoItem={ProfilePhotoItem}
                ProfilePhotoMainSkeleton={<div className="h-360px"></div>}
            />
        </div>
    );
}

export default PrPtAnAlbumGrid;

import React from 'react';
import PropTypes from 'prop-types';
//
import PrLayoutHomePreviewPics from '../../../../../../../component/profile_layout/home_preview_pics/PrLayoutHomePreviewPics';

//
FPHomePhotos.propTypes = {};

//
function FPHomePhotos({ page_id, pic_arr, is_fetching }) {
    //
    function getLinkItem(item) {
        return `/page/${page_id}/photos/${item.id}`;
    }

    //
    return (
        <PrLayoutHomePreviewPics
            title="Photos"
            link_to={`/page/${page_id}/photos`}
            is_fetching={is_fetching}
            // ProfilePrSkeleton={ProfilePrPicSkeleton}
            pic_arr={pic_arr}
            getLinkItem={getLinkItem}
        />
    );
}

export default FPHomePhotos;

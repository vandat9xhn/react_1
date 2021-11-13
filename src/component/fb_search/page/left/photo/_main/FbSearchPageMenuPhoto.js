import React from 'react';
import PropTypes from 'prop-types';
//
import FbSearchPageMenuItem from '../../../_components/menu_item/FbSearchPageMenuItem';
import FbSearchPageMenuPhotoFilter from '../filter/FbSearchPageMenuPhotoFilter';

//
FbSearchPageMenuPhoto.propTypes = {};

//
function FbSearchPageMenuPhoto({ search_value }) {
    //
    return (
        <div className="FbSearchPageMenuPhoto">
            <FbSearchPageMenuItem
                title="Photos"
                pathname="/search/photos"
                search_value={search_value}
                other_pathname_arr={['/search/photos/all']}
            >
                <FbSearchPageMenuPhotoFilter />
            </FbSearchPageMenuItem>
        </div>
    );
}

export default FbSearchPageMenuPhoto;

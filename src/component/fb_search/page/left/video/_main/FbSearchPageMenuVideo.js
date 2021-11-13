import React from 'react';
import PropTypes from 'prop-types';
//
import FbSearchPageMenuItem from '../../../_components/menu_item/FbSearchPageMenuItem';
import FbSearchPageMenuVideoFilter from '../filter/FbSearchPageMenuVideoFilter';

//
FbSearchPageMenuVideo.propTypes = {};

//
function FbSearchPageMenuVideo({ search_value }) {
    //
    return (
        <div className="FbSearchPageMenuVideo">
            <FbSearchPageMenuItem
                title="Video"
                pathname="/search/videos"
                search_value={search_value}
            >
                <FbSearchPageMenuVideoFilter />
            </FbSearchPageMenuItem>
        </div>
    );
}

export default FbSearchPageMenuVideo;

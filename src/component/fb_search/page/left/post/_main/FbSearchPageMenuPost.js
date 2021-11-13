import React from 'react';
import PropTypes from 'prop-types';
//
import FbSearchPageMenuItem from '../../../_components/menu_item/FbSearchPageMenuItem';
import FbSearchPageMenuPostFilter from '../filter/FbSearchPageMenuPostFilter';

//
FbSearchPageMenuPost.propTypes = {};

//
function FbSearchPageMenuPost({ search_value }) {
    //
    return (
        <div className="FbSearchPageMenuPost">
            <FbSearchPageMenuItem
                title="Posts"
                pathname="/search/posts"
                search_value={search_value}
            >
                <FbSearchPageMenuPostFilter />
            </FbSearchPageMenuItem>
        </div>
    );
}

export default FbSearchPageMenuPost;

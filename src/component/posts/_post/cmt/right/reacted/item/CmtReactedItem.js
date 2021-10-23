import React from 'react';
import PropTypes from 'prop-types';
//
import { type_likes } from '../../../../../../like/list_type_like/type_likes/TypeLikes';
//
import './CmtReactedItem.scss';

//
CmtReactedItem.propTypes = {};

//
function CmtReactedItem({ reacted_ix, reacted_item_count }) {
    //
    return (
        <div className="CmtReactedItem display-flex align-items-center text-white">
            {type_likes[reacted_ix].component}

            <div className="margin-left-5px">{reacted_item_count}</div>
        </div>
    );
}

export default CmtReactedItem;

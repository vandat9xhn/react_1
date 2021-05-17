import React from 'react';
import PropTypes from 'prop-types';
//
import PostHistoryItem from '../item/PostHistoryItem';
// 
// import './PostHistory.scss';

//
PostHistory.propTypes = {};

//
function PostHistory(props) {
    const {histories, handle_API_MoreContent} = props;

    // 
    return (
        <div>
            <ul className="PostHistory_list ScreenBlur_list">
                {histories.map((item, ix) => (
                    <li className="PostHistory_item ScreenBlur_item" key={`PostHistory_item_${ix}`}>
                        <PostHistoryItem
                            his_item={item}
                            handle_API_MoreContent={handle_API_MoreContent}
                        />
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default PostHistory;

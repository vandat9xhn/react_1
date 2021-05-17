import React from 'react';
import PropTypes from 'prop-types';
//
import CmtSubHistoryItem from '../item/CmtSubHistoryItem';
//
// import './CmtSubHistory.scss';

//
CmtSubHistory.propTypes = {
    histories: PropTypes.array,
    handle_API_MoreContent: PropTypes.func,
};

//
function CmtSubHistory(props) {
    const { histories, handle_API_MoreContent } = props;

    //
    return (
        <div>
            <div>
                <ul className="CmtSubHistory_list ScreenBlur_list">
                    {histories.map((his, ix) => (
                        <li
                            key={`CmtSubHistory_${ix}`}
                            className="CmtSubHistory_item ScreenBlur_item"
                        >
                            <CmtSubHistoryItem
                                id={his.id}
                                content_obj={his.content_obj}
                                vid_pic={his.vid_pic}
                                created_time={his.created_time}
                                handle_API_MoreContent={handle_API_MoreContent}
                            />
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default CmtSubHistory;

import React from 'react';
import PropTypes from 'prop-types';
//
import ScreenBlurShowMore from '../../../../_screen_blur/_component/foot/ScreenBlurShowMore';
// 
import './ActionsTimeLineList.scss';

//
ActionsTimeLineList.propTypes = {};

//
function ActionsTimeLineList(props) {
    const { time_line, getMoreTimeLineGroup } = props;

    const { data_arr, count, is_fetching } = time_line;

    //
    return (
        <div>
            {data_arr.map((item, item_ix) => (
                <div
                    key={`ActionsChat_time_line_${item_ix}`}
                    className="ActionsTimeLineList_item"
                >
                    <span>
                        {item.user.first_name} {item.user.last_name}
                    </span>

                    <span className="ActionsTimeLineList_status label-field">{item.status}</span>

                    <span>
                        {item.friend.first_name} {item.friend.last_name}
                    </span>
                </div>
            ))}

            <ScreenBlurShowMore
                title="Show more..."
                is_show_more={count > data_arr.length}
                is_fetching={is_fetching}
                handleShowMore={getMoreTimeLineGroup}
            />
        </div>
    );
}

export default ActionsTimeLineList;

import React from 'react';
import PropTypes from 'prop-types';
//
import ScreenBlurShowMore from '../../../../_screen/components/part/foot/ScreenBlurShowMore';
//
import './ActionsTimeLineList.scss';

//
ActionsTimeLineList.propTypes = {};

//
function ActionsTimeLineList({ time_line, getMoreTimeLineGroup }) {
    //
    const { data_arr, count, is_fetching } = time_line;

    //
    return (
        <div>
            <div>
                {data_arr.map((item, item_ix) => (
                    <div
                        key={`ActionsChat_time_line_${item_ix}`}
                        className="ActionsTimeLineList_item"
                    >
                        <div className="padding-8px">
                            <span className="label-field">
                                {item.user.first_name} {item.user.last_name}
                            </span>

                            <span className="ActionsTimeLineList_status font-italic">
                                {item.status}
                            </span>

                            <span className="label-field">
                                {item.friend.first_name} {item.friend.last_name}
                            </span>
                        </div>
                    </div>
                ))}

                <ScreenBlurShowMore
                    title="Show more..."
                    is_show_more={count > data_arr.length}
                    is_fetching={is_fetching}
                    handleShowMore={getMoreTimeLineGroup}
                />
            </div>
        </div>
    );
}

export default ActionsTimeLineList;

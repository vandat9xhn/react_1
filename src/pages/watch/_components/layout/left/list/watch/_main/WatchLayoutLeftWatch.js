import React from 'react';
import PropTypes from 'prop-types';
//
import WatchLayoutLeftListTitle from '../../../_components/list_title/WatchLayoutLeftListTitle';
import WatchLayoutLeftWatchItem from '../item/WatchLayoutLeftWatchItem';

//
WatchLayoutLeftWatch.propTypes = {};

//
function WatchLayoutLeftWatch({ watch_arr, toggleMangeList }) {
    //
    return (
        <div className="WatchLayoutLeftWatch">
            <div>
                <WatchLayoutLeftListTitle
                    title={'Your watchlist'}
                    manage_name={'Manage'}
                    toggleMangeList={toggleMangeList}
                />
            </div>

            <div>
                <ul className="list-none">
                    {watch_arr.map((item, ix) => (
                        <li key={item.id}>
                            <WatchLayoutLeftWatchItem item={item} />
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default WatchLayoutLeftWatch;

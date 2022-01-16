import React from 'react';
import PropTypes from 'prop-types';
//
import WatchLayoutLeftListTitle from '../../../_components/list_title/WatchLayoutLeftListTitle';
import WatchLayoutLeftManageItem from '../item/WatchLayoutLeftManageItem';

//
WatchLayoutLeftManage.propTypes = {};

//
function WatchLayoutLeftManage({
    watch_arr,

    toggleMangeList,
    toggleNotice,
    handleFollowVideos,
    handleUnFollowVideos,
}) {
    //
    return (
        <div className="WatchLayoutLeftManage">
            <div>
                <WatchLayoutLeftListTitle
                    title={'Your watchlist'}
                    manage_name={'Done'}
                    toggleMangeList={toggleMangeList}
                />
            </div>

            <div className="margin-top-8px margin-bottom-20px padding-left-8px font-13px text-secondary">
                You can remove Pages from your watchlist or choose which you get
                updates from.
            </div>

            <div>
                <ul className="list-none">
                    {watch_arr.map((item, ix) => (
                        <li key={item.id}>
                            <WatchLayoutLeftManageItem
                                item={item}
                                ix={ix}
                                //
                                toggleNotice={toggleNotice}
                                handleFollowVideos={handleFollowVideos}
                                handleUnFollowVideos={handleUnFollowVideos}
                            />
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default WatchLayoutLeftManage;

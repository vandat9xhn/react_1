import React from 'react';
import PropTypes from 'prop-types';
//
import ScreenBlurShowMore from '../../../../component/_screen_blur/_component/foot/ScreenBlurShowMore';
import NoItem from '../../../../component/some_div/no_item/NoItem';
//
import AddFriendRequested from '../actions/requested/AddFriendRequested';
import AddFriendNormal from '../actions/normal/AddFriendNormal';
//
import './AddFriendBody.scss';

//
AddFriendBody.propTypes = {};

//
function AddFriendBody(props) {
    const {
        arr,
        c_request,
        count,
        is_fetching,

        getMore_Friend,
        handleRequesting,
        handleRemoving,
    } = props;

    //
    return (
        <div className="AddFriendBody scroll-thin">
            {arr.map(
                (item, index) =>
                    !item.is_del && (
                        <div
                            key={`AddFriendBody_${index}`}
                            className="AddFriendBody_item brs-5px box-shadow-1"
                        >
                            {c_request == 'requested_obj' ? (
                                <AddFriendRequested
                                    id={item.id}
                                    ix={index}
                                    pic={item.picture}
                                    name={
                                        item.first_name + ' ' + item.last_name
                                    }
                                    status_requested={item.status_requested}
                                    //
                                    handleRequesting={handleRequesting}
                                    handleRemoving={handleRemoving}
                                />
                            ) : (
                                <AddFriendNormal
                                    id={item.id}
                                    ix={index}
                                    pic={item.picture}
                                    name={
                                        item.first_name + ' ' + item.last_name
                                    }
                                    status_requested={item.status_requested}
                                    //
                                    handleRequesting={handleRequesting}
                                    handleRemoving={handleRemoving}
                                />
                            )}
                        </div>
                    )
            )}

            <div>
                <ScreenBlurShowMore
                    is_show_more={
                        count > arr.filter((item) => !item.is_del).length
                    }
                    is_fetching={is_fetching}
                    handleShowMore={getMore_Friend}
                />
            </div>

            <div className="text-align-center text-secondary opacity-05 label-field">
                <NoItem
                    no_item={!is_fetching && count == 0}
                    title="No Friend"
                />
            </div>
        </div>
    );
}

export default AddFriendBody;

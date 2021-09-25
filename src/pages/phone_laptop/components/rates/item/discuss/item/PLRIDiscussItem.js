import React from 'react';
import PropTypes from 'prop-types';
//
import { useForceUpdate } from '../../../../../../../_hooks/UseForceUpdate';
//
import PLUseful from '../../../../useful/PLUseful';

//
PLRIDiscussItem.propTypes = {};

//
function PLRIDiscussItem({ discuss_obj }) {
    //
    const { user_name, content, count_like, user_liked } = discuss_obj;

    //
    const forceUpdate = useForceUpdate();

    //
    function handleLike() {
        if (!discuss_obj.user_liked) {
            discuss_obj.user_liked = true;
            forceUpdate();
        }
    }

    //
    return (
        <div className="PLRIDiscussItem">
            <div className="margin-bottom-10px font-700">{user_name}</div>

            <div className="margin-bottom-10px">{content}</div>

            <div>
                <PLUseful
                    user_liked={user_liked}
                    count_like={count_like}
                    handleLike={handleLike}
                />
            </div>
        </div>
    );
}

export default PLRIDiscussItem;

import React, { useState } from 'react';
import PropTypes from 'prop-types';
//
import PLRatesItemHead from '../head/PLRatesItemHead';
import PLRatesItemBody from '../body/PLRatesItemBody';
import PLRatesItemFoot from '../foot/_main/PLRatesItemFoot';
import PLRIDiscuss from '../discuss/_main/PLRIDiscuss';

//
PLRatesItem.propTypes = {};

//
function PLRatesItem({ rate_obj, handleSendDiscuss }) {
    //
    const {
        user_name,
        buying_where,
        num_rate,
        will_share,

        content,
        img,
        service_replied_time,

        count_like,
        user_liked,

        buying_time,
        rating_time,
        used_time_str,

        discuss_arr,
        count_discuss,
    } = rate_obj;

    //
    const [show_discuss, setShowDiscuss] = useState(false);
    const [new_user_liked, setNewUserLiked] = useState(user_liked);

    // ----

    //
    function handleLike() {
        !new_user_liked && setNewUserLiked(true);
    }

    //
    function showDiscuss() {
        !show_discuss && setShowDiscuss(true);
    }

    //
    return (
        <div className="PLRatesItem padding-y-10px">
            <div className="margin-bottom-10px">
                <PLRatesItemHead
                    user_name={user_name}
                    buying_where={buying_where}
                    num_rate={num_rate}
                    will_share={will_share}
                />
            </div>

            <div className="margin-bottom-10px">
                <PLRatesItemBody
                    content={content}
                    img={img}
                    service_replied_time={service_replied_time}
                />
            </div>

            <div>
                <PLRatesItemFoot
                    count_like={count_like}
                    count_discuss={count_discuss}
                    buying_time={buying_time}
                    rating_time={rating_time}
                    used_time_str={used_time_str}
                    //
                    handleLike={handleLike}
                    showDiscuss={showDiscuss}
                />
            </div>

            {show_discuss ? (
                <div className="margin-top-15px">
                    <PLRIDiscuss
                        discuss_arr={discuss_arr}
                        handleSendDiscuss={handleSendDiscuss}
                    />
                </div>
            ) : null}
        </div>
    );
}

export default PLRatesItem;

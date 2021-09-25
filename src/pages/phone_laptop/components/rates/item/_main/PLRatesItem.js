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
function PLRatesItem({ rate_obj }) {
    //
    const {
        user_name,
        buying_where,
        rating_avg,
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
        <div className="PLRatesItem padding-y-15px">
            <div>
                <PLRatesItemHead
                    user_name={user_name}
                    buying_where={buying_where}
                    rating_avg={rating_avg}
                    will_share={will_share}
                />
            </div>

            <div>
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
                <div>
                    <PLRIDiscuss discuss_arr={discuss_arr} />
                </div>
            ) : null}
        </div>
    );
}

export default PLRatesItem;

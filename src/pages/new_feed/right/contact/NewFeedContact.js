import React, { useContext, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
//
import { context_api } from '../../../../_context/ContextAPI';
//
import { useScrollDown } from '../../../../_hooks/useScrollDown';
//
import observeToDo from '../../../../_some_function/observerToDo';
//
import CircleLoading from '../../../../component/waiting/circle_loading/CircleLoading';
import PicNameContent from '../../../../component/picture_name/pic_name_content/PicNameContent';
//
import { handle_API_NewFeedContact_L } from '../../__handle_api/NewFeedHandleAPI';
//
import './NewFeedContact.scss';

//
NewFeedContact.propTypes = {};

//
function NewFeedContact() {
    //
    const { openMessage } = useContext(context_api);

    //
    const ref_contact = useRef(null);

    //
    const {
        data_state: contact_state,
        getData_API_at_first,
        handleScroll,
    } = useScrollDown({
        handle_API_L: (c_count) =>
            handle_API_NewFeedContact_L({ c_count: c_count }),
        thresh_hold: 0.8,
        elm: ref_contact.current,
    });

    const { data_arr: friend_arr, has_fetched, is_fetching } = contact_state;

    //
    useEffect(() => {
        observeToDo(ref_contact.current, getData_API_at_first, 0);
    }, []);

    //
    return (
        <div
            ref={ref_contact}
            className="NewFeedContact scroll-thin"
            onScroll={handleScroll}
        >
            <div>
                <h3 className="text-secondary">Contacts</h3>
            </div>

            <div className={`${has_fetched ? '' : 'pointer-events-none'}`}>
                <div>
                    {(has_fetched ? friend_arr : [{ friend: {} }]).map(
                        (item, index) => (
                            <div
                                key={`NewFeedContact_item_${item.id || index}`}
                                className="NewFeedContact_item NewFeed_side_item"
                            >
                                <PicNameContent
                                    user={item.friend}
                                    handleClick={() =>
                                        openMessage(item.friend.id)
                                    }
                                />
                            </div>
                        )
                    )}
                </div>
            </div>

            <div className="display-flex-center">
                <CircleLoading is_fetching={is_fetching} />
            </div>
        </div>
    );
}

export default NewFeedContact;

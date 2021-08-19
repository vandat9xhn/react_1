import React, { useContext, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
//
import { context_api } from '../../../../_context/ContextAPI';
//
import { initial_user } from '../../../../_initial/user/initialUser';
//
import observeToDo from '../../../../_some_function/observerToDo';
//
import { handle_API_NewFeedContact_L } from '../../../../_handle_api/new_feed/NewFeedHandleAPI';
//
import { useObserverShowMore } from '../../../../_hooks/useObserverShowMore';
//
import CircleLoading from '../../../../component/waiting/circle_loading/CircleLoading';
import PicNameContent from '../../../../component/picture_name/pic_name_content/PicNameContent';
//
//
import './NewFeedContact.scss';

//
NewFeedContact.propTypes = {};

//
function NewFeedContact() {
    //
    const { openRoomChat } = useContext(context_api);

    //
    const ref_contact = useRef(null);
    const ref_fake_elm_end = useRef(null);

    //
    const {
        data_state: contact_state,
        getData_API,
        observerShowMore,
    } = useObserverShowMore({
        initial_arr: [] || [initial_user()],
        handle_API_L: (c_count) =>
            handle_API_NewFeedContact_L({ c_count: c_count }),
    });

    const { data_arr: friend_arr, has_fetched, is_fetching } = contact_state;

    //
    useEffect(() => {
        observeToDo({
            elm: ref_contact.current,
            callback: () => {
                getData_API();
                observerShowMore({
                    fake_elm_end: ref_fake_elm_end.current,
                    root: ref_contact.current,
                    rootMargin: '300px 0px 0px 0px',
                    way_scroll: 'to_bottom',
                    margin: 300,
                });
            },
        });
    }, []);

    //
    return (
        <div ref={ref_contact} className="NewFeedContact scroll-thin">
            <h3 className="padding-8px text-secondary">Contacts</h3>

            <div className={`${has_fetched ? '' : 'pointer-events-none'}`}>
                {friend_arr.map((friend) => (
                    <div
                        key={`${friend.id}`}
                        className="NewFeedContact_item NewFeed_side_item"
                    >
                        <PicNameContent
                            user={friend}
                            handleClick={() => openRoomChat(friend.id)}
                        />
                    </div>
                ))}
            </div>

            <div className="display-flex-center">
                <CircleLoading is_fetching={is_fetching} />
            </div>

            <div ref={ref_fake_elm_end} className="padding-1px"></div>

            {has_fetched ? null : (
                <div className="NewFeedContact_not_fetched"></div>
            )}
        </div>
    );
}

export default NewFeedContact;

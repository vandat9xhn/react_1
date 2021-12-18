import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
//
import {
    initial_page,
    initial_user,
} from '../../../../../_initial/user/initialUser';
//
import observeToDo from '../../../../../_some_function/observerToDo';
//
import { handle_API_NewFeedContact_L } from '../../../../../_handle_api/new_feed/NewFeedHandleAPI';
//
import { useObserverShowMore } from '../../../../../_hooks/useObserverShowMore';
//
import ComponentSkeleton from '../../../../../component/skeleton/component_skeleton/ComponentSkeleton';
import SkeletonPicContent from '../../../../../component/skeleton/some_skeleton/pic_content/SkeletonPicContent';
//
import NewFeedContactItem from '../item/NewFeedContactItem';
//
import './NewFeedContact.scss';

//
NewFeedContact.propTypes = {};

//
function NewFeedContact() {
    //
    const ref_contact = useRef(null);

    //
    const { data_state, getData_API } = useObserverShowMore({
        initial_arr: [] || [initial_user()] || [initial_page()],
        handle_API_L: (c_count) =>
            handle_API_NewFeedContact_L({ c_count: c_count }),
    });

    const { data_arr, has_fetched } = data_state;

    //
    useEffect(() => {
        observeToDo({
            elm: ref_contact.current,
            callback: () => {
                getData_API();
            },
        });
    }, []);

    //
    return (
        <div ref={ref_contact} className="NewFeedContact">
            <h3 className="padding-8px text-secondary">Contacts</h3>

            <div className={`${has_fetched ? '' : 'pointer-events-none'}`}>
                {data_arr.map((item) => (
                    <div key={item.id} className="NewFeedContact_item">
                        <NewFeedContactItem item={item} />
                    </div>
                ))}
            </div>

            <ComponentSkeleton
                component={<SkeletonPicContent />}
                has_fetched={has_fetched}
                num={4}
            />
        </div>
    );
}

export default NewFeedContact;

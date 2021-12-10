import React, { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
//
import { useMounted } from '../../../../../../../_hooks/useMounted';

import observeToDo from '../../../../../../../_some_function/observerToDo';
//
import { handle_API_ProfileUser_R } from '../../../../../../../_handle_api/profile/ProfileHandleAPI';
//
import ProfilePrAboutSkeleton from '../skeleton/ProfilePrAboutSkeleton';
import ProfileLayoutHomePreview from '../../../../../../../component/profile_layout/home_preview/ProfileLayoutHomePreview';
//
import './ProfilePrAbout.scss';

//
ProfilePrAbout.propTypes = {};

//
function ProfilePrAbout({ id, handleReady }) {
    //
    const [about_state, setAboutState] = useState({
        about_arr: [
            { title: 'Hobby', content: '' },
            { title: 'University', content: '' },
            { title: 'From', content: '' },
            { title: 'Live now', content: '' },
        ],
        is_fetching: true,
    });

    const { about_arr, is_fetching } = about_state;

    //
    const ref_component = useRef(null);

    //
    const mounted = useMounted();

    //
    useEffect(() => {
        observeToDo({
            elm: ref_component.current,
            callback: getData_API_About,
            when_over: true,
        });
    }, []);

    //
    async function getData_API_About() {
        setAboutState((about_state) => ({
            ...about_state,
            is_fetching: true,
        }));

        const data = await handle_API_ProfileUser_R(id);

        if (mounted) {
            setAboutState({
                about_arr: [
                    {
                        title: 'From',
                        content: data.town_arr.length
                            ? data.town_arr[0].title
                            : '',
                    },
                    {
                        title: 'Live now',
                        content: data.address_arr.length
                            ? data.address_arr[0].address
                            : '',
                    },
                    { title: 'Hobby', content: data.hobby_obj.hobby },
                    {
                        title: 'University',
                        content: data.university_arr.length
                            ? data.university_arr[0].title
                            : '',
                    },
                ],
                is_fetching: false,
            });

            handleReady();
        }
    }

    //
    return (
        <div ref={ref_component}>
            <ProfileLayoutHomePreview
                title="About"
                link_to={location.pathname + '?sk=about_overview'}
                is_fetching={is_fetching}
                ProfilePrSkeleton={ProfilePrAboutSkeleton}
            >
                <div className="ProfilePrAbout">
                    {about_arr.map((item, ix) =>
                        !item.content ? null : (
                            <div key={ix} className="font-500">
                                <span className="text-secondary">
                                    {item.title}:
                                </span>{' '}
                                <span>{item.content}</span>
                            </div>
                        )
                    )}
                </div>
            </ProfileLayoutHomePreview>
        </div>
    );
}

export default ProfilePrAbout;

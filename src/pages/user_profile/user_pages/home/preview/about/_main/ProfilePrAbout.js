import React, { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
//
import { useMounted } from '../../../../../../../_hooks/useMounted';

import observeToDo from '../../../../../../../_some_function/observerToDo';
//
import { handle_API_ProfileUser_R } from '../../../../../__handle_api/ProfileHandleAPI';

import ProfilePrCommon from '../../_common/preview_common/ProfilePrCommon';

import ProfilePrAboutSkeleton from '../skeleton/ProfilePrAboutSkeleton';
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
        observeToDo(ref_component.current, getData_API_About, 0, true);
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
            <ProfilePrCommon
                title="Intro"
                sk="about_overview"
                is_fetching={is_fetching}
                ProfilePrSkeleton={ProfilePrAboutSkeleton}
            >
                <div className="ProfilePrAbout">
                    {about_arr.map((item, ix) => (
                        <div
                            key={`${ix}`}
                            className={`${item.content ? '' : 'display-none'}`}
                        >
                            <span className="label-field text-secondary">
                                {item.title}:{' '}
                            </span>

                            <span className="label-field">{item.content}</span>
                        </div>
                    ))}
                </div>
            </ProfilePrCommon>
        </div>
    );
}

export default ProfilePrAbout;

import React, { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
//
import { useMounted } from '../../../../../../../_custom_hooks/useMounted';

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
function ProfilePrAbout({ id }) {
    //
    const [about_state, setAboutState] = useState({
        about_obj: {
            hobby: '',
            university: '',
            from: '',
            live_now: '',
        },
        is_fetching: true,
    });

    const { about_obj, is_fetching } = about_state;
    const { hobby, university, from, live_now } = about_obj;

    //
    ;
    const ref_component = useRef(null);

    //
    const mounted = useMounted();

    //
    useEffect(() => {
        observeToDo(ref_component.current, getData_API_About, 0);
    }, [id]);

    //
    async function getData_API_About() {
        setAboutState((about_state) => ({
            ...about_state,
            is_fetching: true,
        }));

        const data = await handle_API_ProfileUser_R(id);

        if (mounted) {
            setAboutState({
                about_obj: data,
                is_fetching: false,
            });
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
                    <div>
                        <span>From: </span>
                        <span className="label-field">{from}</span>
                    </div>

                    <div>
                        <span>Live at: </span>
                        <span className="label-field">{live_now}</span>
                    </div>

                    <div>
                        <span>Hobby: </span>
                        <span className="label-field">{hobby}</span>
                    </div>

                    <div>
                        <span>University: </span>
                        <span className="label-field">{university}</span>
                    </div>
                </div>
            </ProfilePrCommon>
        </div>
    );
}

export default ProfilePrAbout;

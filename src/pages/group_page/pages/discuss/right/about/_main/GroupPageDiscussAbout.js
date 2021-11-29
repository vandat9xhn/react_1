import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
//
import { handle_API_GroupAboutPreview_R } from '../../../../../../../_handle_api/fb_group/about_preview';
//
import GroupPageAboutPart from '../../../../../_components/about_part/GroupPageAboutPart';
import GPDAboutDescription from '../description/GPDAboutDescription';
import GPDAboutPrivacy from '../privacy/GPDAboutPrivacy';
import GPDAboutVisibility from '../visibility/GPDAboutVisibility';
//
import './GroupPageDiscussAbout.scss';

//
GroupPageDiscussAbout.propTypes = {};

//
function GroupPageDiscussAbout({ handleReady }) {
    //
    const [state_obj, setStateObj] = useState({
        about_obj: {
            description: '',
            privacy: '',
            visibility: '',
            type_obj: { name: '', title: '', Icon: null },
        },
        has_fetched: false,
    });

    const { about_obj, has_fetched } = state_obj;

    const { description, privacy, visibility, type_obj } = about_obj;

    //
    useEffect(() => {
        getData_API();
    }, []);

    // ------

    //
    async function getData_API() {
        const data = await handle_API_GroupAboutPreview_R({
            group_id: location.pathname.split('/').slice(-2)[0],
        });

        setStateObj((state_obj) => {
            return {
                ...state_obj,
                about_obj: data,
                has_fetched: true,
            };
        });

        setTimeout(() => {
            handleReady();
        }, 0);
    }

    //
    return (
        <div className="GroupPageDiscussAbout GroupPageDiscussRight_part_contain">
            <h2 className="font-17px font-600">About</h2>

            <div className={`${has_fetched ? '' : 'h-360px'}`}>
                <div className="GroupPageDiscussAbout_part">
                    <GPDAboutDescription
                        description={description}
                        handleReady={handleReady}
                    />
                </div>

                <div className="GroupPageDiscussAbout_part">
                    <GPDAboutPrivacy privacy={privacy} />
                </div>

                <div className="GroupPageDiscussAbout_part">
                    <GPDAboutVisibility visibility={visibility} />
                </div>

                <div className="GroupPageDiscussAbout_part">
                    <GroupPageAboutPart
                        Icon={type_obj.Icon}
                        title={type_obj.title}
                    />
                </div>
            </div>
        </div>
    );
}

export default GroupPageDiscussAbout;

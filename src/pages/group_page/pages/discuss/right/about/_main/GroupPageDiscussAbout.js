import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
//
import { handle_API_GroupAboutPreview_R } from '../../../../../../../_handle_api/fb_group/about_preview';
//
import GPDAboutContain from '../contain/GPDAboutContain';

//
GroupPageDiscussAbout.propTypes = {};

//
function GroupPageDiscussAbout({ group_id, handleReady }) {
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
            group_id: group_id,
        });

        setStateObj((state_obj) => {
            return {
                ...state_obj,
                about_obj: data,
                has_fetched: true,
            };
        });

        handleReady();
    }

    //
    return (
        <div className="GroupPageDiscussAbout GroupPageDiscussRight_part_contain">
            <h2 className="GroupPageDiscussRight_part_title margin-bottom-8px">
                About
            </h2>

            <GPDAboutContain
                description={description}
                privacy={privacy}
                visibility={visibility}
                type_obj={type_obj}
                has_fetched={has_fetched}
                //
                handleReady={handleReady}
            />
        </div>
    );
}

export default GroupPageDiscussAbout;

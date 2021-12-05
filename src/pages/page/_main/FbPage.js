import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import PropTypes from 'prop-types';
//
import { initial_fb_page } from '../../../_initial/page/page';
// 
import { handle_API_FbPage_R } from '../../../_handle_api/fb_page/page';
// 
import FbPageInfo from '../_components/info/_main/FbPageInfo';
import FbPageNav from '../_components/nav/_main/FbPageNav';

//
FbPage.propTypes = {};

//
function FbPage(props) {
    //
    const { id } = useParams();

    console.log(id);

    //
    const [state_obj, setStateObj] = useState({
        page_obj: initial_fb_page(),
        has_fetch: false,
    });

    const { page_obj, has_fetch } = state_obj;

    const {
        // id,
        name,
        picture,
        cover,

        has_new_story,

        action_arr,
        has_liked,
        has_followed,
    } = page_obj;

    //
    useEffect(() => {
        getData_API();
    }, [id]);

    // -------

    //
    async function getData_API() {
        const data = await handle_API_FbPage_R({ page_id: id });

        setStateObj((state_obj) => {
            return {
                ...state_obj,
                page_obj: data,
                has_fetch: true,
            };
        });
    }

    // ------

    //
    function openCoverPicture() {}

    //
    function openPicture() {}

    //
    function handleAction() {}

    // -----

    if (!has_fetch) {
        return null;
    }

    //
    return (
        <div key={id} className="FbPage">
            <div>
                <FbPageInfo
                    id={id}
                    name={name}
                    picture={picture}
                    cover={cover}
                    has_new_story={has_new_story}
                    //
                    openCoverPicture={openCoverPicture}
                    openPicture={openPicture}
                />
            </div>

            <div className="fb-profile-nav">
                <div className="fb-profile-width-contain">
                    <FbPageNav
                        page_id={id}
                        name={name}
                        picture={picture}
                        //
                        action_arr={action_arr}
                        has_liked={has_liked}
                        has_followed={has_followed}
                        //
                        handleAction={handleAction}
                    />
                </div>
            </div>
        </div>
    );
}

export default FbPage;

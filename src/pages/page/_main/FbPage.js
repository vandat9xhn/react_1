import React, { Suspense, useEffect, useState } from 'react';
import { useParams, Switch, Route, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
//
import { initial_fb_page } from '../../../_initial/page/page';
//
import { handle_API_FbPage_R } from '../../../_handle_api/fb_page/page';
//
import FbPageInfo from '../_components/info/_main/FbPageInfo';
import FbPageNav from '../_components/nav/_main/FbPageNav';
import FbPageRoutes from '../_route/_main';

//
FbPage.propTypes = {};

//
function FbPage(props) {
    //
    const { id } = useParams();

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
        has_seen_story,

        info_extra_1,
        info_extra_2,

        action_main_arr,
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
    function handleActionPicture() {}

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
                    page_id={id}
                    name={name}
                    picture={picture}
                    cover={cover}
                    has_new_story={has_new_story}
                    has_seen_story={has_seen_story}
                    // 
                    info_extra_1={info_extra_1}
                    info_extra_2={info_extra_2}
                    //
                    action_main_arr={action_main_arr}
                    action_arr={action_arr}
                    has_liked={has_liked}
                    has_followed={has_followed}
                    //
                    openCoverPicture={openCoverPicture}
                    handleActionPicture={handleActionPicture}
                    handleAction={handleAction}
                />
            </div>

            <div className="fb-profile-nav">
                <div className="fb-profile-width-contain">
                    <FbPageNav
                        page_id={id}
                        name={name}
                        picture={picture}
                        //
                        action_main_arr={action_main_arr}
                        action_arr={action_arr}
                        // 
                        has_liked={has_liked}
                        has_followed={has_followed}
                        //
                        handleAction={handleAction}
                    />
                </div>
            </div>

            <div className="padding-y-16px">
                {id > 0 ? (
                    <Suspense fallback={null}>
                        <Switch>
                            {FbPageRoutes.map((item, ix) => (
                                <Route
                                    key={ix}
                                    // component={item.component}
                                    path={item.path}
                                    render={(props) => (
                                        <item.component
                                            {...props}
                                            page_id={id}
                                        />
                                    )}
                                />
                            ))}

                            <Redirect to={`/page/${id}/home`} />
                        </Switch>
                    </Suspense>
                ) : null}
            </div>
        </div>
    );
}

export default FbPage;

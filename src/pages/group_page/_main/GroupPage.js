import React, { Suspense, useEffect, useState } from 'react';
import { Redirect, Route, Switch, useParams } from 'react-router-dom';
import PropTypes from 'prop-types';
//
import { initial_group_page } from '../../../_initial/group/page';
//
import { handle_API_GroupPage_R } from '../../../_handle_api/fb_group/page';
//
import { GroupPageRoutes } from '../_routes/_main';
//
import './GroupPageCommon.scss';
//
import GroupPageInfo from '../_components/info/_main/GroupPageInfo';
import GroupPageNav from '../_components/nav/_main/GroupPageNav';
// 
import './GroupPage.scss';

//
GroupPage.propTypes = {};

//
function GroupPage(props) {
    //
    const { id } = useParams();

    //
    const [state_obj, setStateObj] = useState({
        group_obj: initial_group_page(),
        has_fetch: false,
    });

    const { group_obj, has_fetch } = state_obj;

    const {
        // id,
        name,
        picture,

        color_obj,
        affiliation_obj,

        is_admin,
        is_moderate,
        privacy,
        action_name,

        member_arr,
        member_count,
    } = group_obj;

    //
    useEffect(() => {
        getData_API();
    }, []);

    // -------

    //
    async function getData_API() {
        const data = await handle_API_GroupPage_R({ group_id: id });

        setStateObj((state_obj) => {
            return {
                ...state_obj,
                group_obj: data,
                has_fetch: true,
            };
        });
    }

    // ------

    //
    function openCoverPicture() {}

    //
    function toggleRelatedGroup() {}

    //
    function handleAction() {}

    // -----

    const route_props = {
        group_id: id,
        is_admin: is_admin,
        is_moderate: is_moderate,
        member_count: member_count,
    };

    if (location.pathname.search(/\/group\/\d+\/discuss/) == 0) {
        route_props['bg_btn'] = color_obj.bg_btn;
    }

    // -----

    if (!has_fetch) {
        return null;
    }

    //
    return (
        <div className="GroupPage">
            <div className="bg-primary box-shadow-1">
                <div>
                    <GroupPageInfo
                        group_id={id}
                        name={name}
                        picture={picture}
                        //
                        color_obj={color_obj}
                        affiliation_obj={affiliation_obj}
                        //
                        privacy={privacy}
                        action_name={action_name}
                        member_arr={member_arr}
                        member_count={member_count}
                        //
                        openCoverPicture={openCoverPicture}
                        toggleRelatedGroup={toggleRelatedGroup}
                        handleAction={handleAction}
                    />
                </div>

                <div className="GroupPage_nav fb-profile-width-contain">
                    <GroupPageNav
                        group_id={id}
                        color={color_obj.color}
                        bg_btn={color_obj.bg_btn}
                    />
                </div>
            </div>

            <div style={{ backgroundColor: color_obj.bg }}>
                {id > 0 ? (
                    <Suspense fallback={null}>
                        <Switch>
                            {GroupPageRoutes.map((item, ix) => (
                                <Route
                                    key={ix}
                                    // component={item.component}
                                    path={item.path}
                                    render={(props) => (
                                        <item.component
                                            {...props}
                                            {...route_props}
                                        />
                                    )}
                                />
                            ))}

                            <Redirect to={`/group/${id}/discuss`} />
                        </Switch>
                    </Suspense>
                ) : null}
            </div>
        </div>
    );
}

export default GroupPage;

import React, { Suspense, useEffect, useState } from 'react';
import { Route, Switch, useParams, useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
//
import { initial_group_page } from '../../../_initial/group/page';
//
import { handle_API_GroupPage_R } from '../../../_handle_api/fb_group/page';
//
import { GroupPageRoutes } from '../_routes/_main';
//
import GroupPageInfo from '../_components/info/_main/GroupPageInfo';
import GroupPageNav from '../_components/nav/_main/GroupPageNav';

//
GroupPage.propTypes = {};

//
function GroupPage(props) {
    //
    const { id } = useParams();
    const use_history = useHistory();

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

        privacy,
        action_name,

        member_arr,
        count_member,
    } = group_obj;

    //
    useEffect(() => {
        getData_API();

        const path = location.pathname;
        if (path.search(/^\/group\/\d+$/) == 0) {
            use_history.replace(`${path}/discuss`);
        }
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

    if (!has_fetch) {
        return null;
    }

    //
    return (
        <Suspense fallback={null}>
            <div className="GroupPage">
                <div className="bg-primary box-shadow-1">
                    <div>
                        <GroupPageInfo
                            group_id={id}
                            name={name}
                            picture={picture}
                            //
                            privacy={privacy}
                            action_name={action_name}
                            member_arr={member_arr}
                            count_member={count_member}
                            //
                            openCoverPicture={openCoverPicture}
                            toggleRelatedGroup={toggleRelatedGroup}
                            handleAction={handleAction}
                        />
                    </div>

                    <div className="fb-profile-width-contain">
                        <GroupPageNav
                            group_id={id}
                            color={color_obj.color}
                            bg_btn={color_obj.bg_btn}
                        />
                    </div>
                </div>

                <div style={{ backgroundColor: color_obj.bg }}>
                    <Switch>
                        {GroupPageRoutes.map((item, ix) => (
                            <Route
                                key={ix}
                                component={item.component}
                                path={item.path}
                            />
                        ))}
                    </Switch>
                </div>
            </div>
        </Suspense>
    );
}

export default GroupPage;

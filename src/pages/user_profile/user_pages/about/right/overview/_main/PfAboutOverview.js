import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
//
import { GetIdSlug } from '../../../../../../../_some_function/GetIdSlug';
//
import { initial_overview_obj } from '../../../../../../../_initial/profile/about';
//
import { data_about_overview_icon_arr } from '../../../../../../../_data/profile/overview';
//
import { handle_API_UserOverview_r } from '../../../../../../../_handle_api/profile/ProfileHandleAPI';
//
import ComponentSkeleton from '../../../../../../../component/skeleton/component_skeleton/ComponentSkeleton';
//
import PfAboutOverviewItem from '../item/PfAboutOverviewItem';
import PfAbOvSkeleton from '../skeleton/PfAbOvSkeleton';
//
import './PfAboutOverview.scss';

//
PfAboutOverview.propTypes = {};

//
function PfAboutOverview(props) {
    const user_id = GetIdSlug();

    //
    const [overview_state, setOverviewState] = useState({
        overview_obj: initial_overview_obj(),
        has_fetched: false,
    });

    const { overview_obj, has_fetched } = overview_state;

    //
    useEffect(() => {
        getData_API_Overview();
    }, []);

    //
    async function getData_API_Overview() {
        const data = await handle_API_UserOverview_r({ user_id: user_id });

        setOverviewState({
            overview_obj: data,
            has_fetched: true,
        });
    }

    //
    return (
        <div>
            <div className={has_fetched ? '' : 'display-none'}>
                {data_about_overview_icon_arr.map((item, ix) =>
                    overview_obj[item.key_data + '_arr'] &&
                    overview_obj[item.key_data + '_arr'].length ? (
                        <div
                            key={`PfAboutOverview_item${ix}`}
                            className="PfAboutOverview_item"
                        >
                            <PfAboutOverviewItem
                                link_to={`?sk=about_${item.search}`}
                                Icon={item.Icon}
                                title={
                                    overview_obj[item.key_data + '_arr'][0]
                                        .title
                                }
                                permission={
                                    overview_obj[item.key_data + '_arr'][0]
                                        .permission
                                }
                            />
                        </div>
                    ) : (
                        <div key={`${ix}`}></div>
                    )
                )}
            </div>

            <div>
                <ComponentSkeleton
                    has_fetched={has_fetched}
                    component={<PfAbOvSkeleton />}
                />
            </div>
        </div>
    );
}

export default PfAboutOverview;

import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
//
import { GetIdSlug } from '../../../../../../../_some_function/GetIdSlug';
//
import ComponentSkeleton from '../../../../../../../component/skeleton/component_skeleton/ComponentSkeleton';
//
import { common_overview_icon } from '../../../__common/data/ProfileIntroData';
import { initial_overview_obj } from '../../../__common/initial/initial';
import { handle_API_UserOverview_r } from '../../../../../__handle_api/ProfileHandleAPI';

import PfAboutOverviewItem from '../item/PfAboutOverviewItem';
import PfAbOvSkeleton from '../skeleton/PfAbOvSkeleton';
// 
import './PfAboutOverview.scss';

//
PfAboutOverview.propTypes = {};

//
function PfAboutOverview(props) {
    const id = GetIdSlug();

    //
    const [overview_state, setOverviewState] = useState({
        overview_obj: initial_overview_obj,
        has_fetched: false,
    });

    const { overview_obj, has_fetched } = overview_state;

    //
    useEffect(() => {
        getData_API_Overview();
    }, []);

    //
    async function getData_API_Overview() {
        const data = await handle_API_UserOverview_r(id);

        setOverviewState({
            overview_obj: data,
            has_fetched: true,
        });
    }

    //
    return (
        <div>
            <div className={has_fetched ? '' : 'display-none'}>
                {common_overview_icon.map(
                    (item, ix) =>
                        overview_obj[item.key_data + '_arr'] && (
                            <div
                                key={`PfAboutOverview_item${ix}`}
                                className="PfAboutOverview_item"
                            >
                                <PfAboutOverviewItem
                                    link_to={`?sk=about_${item.search}`}
                                    Icon={item.Icon}
                                    title={
                                        overview_obj[item.key_data + '_arr'][0]
                                            .name
                                    }
                                    permission={
                                        overview_obj[item.key_data + '_arr'][0]
                                            .permission
                                    }
                                />
                            </div>
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

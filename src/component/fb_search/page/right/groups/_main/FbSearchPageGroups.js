import React from 'react';
import PropTypes from 'prop-types';
//
import { ParseLocationSearch } from '../../../../../../_some_function/ParseLocationSearch';
//
import { handle_API_FbSearchGroup_L } from '../../../../../../_handle_api/fb_search/groups';
//
import { useObserverMoreSearch } from '../../../../../../_hooks/search/useObserverMoreSearch';
//
import FbSearchPageLayout from '../../../_components/_layout/FbSearchPageLayout';
import FbSearchPageGroupItem from '../item/FbSearchPageGroupItem';
//
import './FbSearchPageGroups.scss';

//
FbSearchPageGroups.propTypes = {};

//
function FbSearchPageGroups(props) {
    const { ref_fake_elm, data_state, data_count } = useObserverMoreSearch({
        handle_API_L: (c_count) =>
            handle_API_FbSearchGroup_L({
                c_count: c_count,
                params: { ...ParseLocationSearch() },
            }),
    });

    const { data_arr, has_fetched } = data_state;

    //
    return (
        <div className="FbSearchPageGroups">
            <FbSearchPageLayout
                right_elm={
                    <div className="FbSearchPageGroups_contain display-flex-center">
                        <div className="w-680px">
                            <div>
                                {data_arr.map((group_obj, ix) => (
                                    <div
                                        key={group_obj.id}
                                        className="margin-bottom-20px"
                                    >
                                        <FbSearchPageGroupItem
                                            group_obj={group_obj}
                                        />
                                    </div>
                                ))}
                            </div>

                            <div
                                ref={ref_fake_elm}
                                className="padding-1px"
                            ></div>
                        </div>
                    </div>
                }
                no_result={has_fetched && data_count.current == 0}
            />
        </div>
    );
}

export default FbSearchPageGroups;

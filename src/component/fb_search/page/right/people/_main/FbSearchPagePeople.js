import React from 'react';
import PropTypes from 'prop-types';
//
import { ParseLocationSearch } from '../../../../../../_some_function/ParseLocationSearch';
//
import { handle_API_FbSearchUser_L } from '../../../../../../_handle_api/fb_search/user';
//
import { useObserverMoreSearch } from '../../../../../../_hooks/search/useObserverMoreSearch';
//
import FbSearchPagePeopleItem from '../item/FbSearchPagePeopleItem';
import FbSearchPageLayout from '../../../_components/_layout/FbSearchPageLayout';
//
import './FbSearchPagePeople.scss';

//
FbSearchPagePeople.propTypes = {};

//
function FbSearchPagePeople({}) {
    //
    const { ref_fake_elm, data_state, data_count } = useObserverMoreSearch({
        handle_API_L: (c_count) =>
            handle_API_FbSearchUser_L({
                c_count: c_count,
                params: ParseLocationSearch(),
            }),
    });

    const { data_arr, has_fetched } = data_state;

    //
    return (
        <div className="FbSearchPagePeople">
            <FbSearchPageLayout
                right_elm={
                    <div className="fb-search-page-right-contain display-flex-center">
                        <div className="FbSearchPagePeople_list w-680px">
                            {data_arr.map((item, ix) => (
                                <div
                                    key={ix}
                                    className="fb-search-page-right-item"
                                >
                                    <FbSearchPagePeopleItem profile={item} />
                                </div>
                            ))}
                        </div>

                        <div ref={ref_fake_elm} className="padding-1px"></div>
                    </div>
                }
                no_result={has_fetched && data_count.current == 0}
                title="People"
            />
        </div>
    );
}

export default FbSearchPagePeople;

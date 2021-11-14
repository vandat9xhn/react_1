import React from 'react';
import PropTypes from 'prop-types';
//
import { ParseLocationSearch } from '../../../../../../_some_function/ParseLocationSearch';
//
import { handle_API_FbSearchPage_L } from '../../../../../../_handle_api/fb_search/pages';
//
import { useObserverMoreSearch } from '../../../../../../_hooks/search/useObserverMoreSearch';
//
import FbSearchPageLayout from '../../../_components/_layout/FbSearchPageLayout';
import FbSearchPagePagesItem from '../item/FbSearchPagePagesItem';
//
import './FbSearchPagePages.scss';

//
FbSearchPagePages.propTypes = {};

//
function FbSearchPagePages(props) {
    const { ref_fake_elm, data_state, data_count } = useObserverMoreSearch({
        handle_API_L: (c_count) =>
            handle_API_FbSearchPage_L({
                c_count: c_count,
                params: { ...ParseLocationSearch() },
            }),
    });

    const { data_arr, has_fetched } = data_state;

    //
    return (
        <div className="FbSearchPagePages">
            <FbSearchPageLayout
                right_elm={
                    <div className="fb-search-page-right-contain display-flex-center">
                        <div className="w-680px">
                            <div>
                                {data_arr.map((page_obj, ix) => (
                                    <div
                                        key={page_obj.id}
                                        className="fb-search-page-right-item"
                                    >
                                        <FbSearchPagePagesItem page_obj={page_obj} />
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
                title="Pages"
            />
        </div>
    );
}

export default FbSearchPagePages;

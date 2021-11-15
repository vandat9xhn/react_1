import React from 'react';
import PropTypes from 'prop-types';
//
import { ParseLocationSearch } from '../../../../../../_some_function/ParseLocationSearch';
//
import { handle_API_FbSearchPage_L } from '../../../../../../_handle_api/fb_search/pages';
//
import { useFbSearchPageAllList } from '../../../../../../_hooks/search/useFbSearchPageAllList';
//
import FbSearchPagePagesItem from '../../pages/item/FbSearchPagePagesItem';

//
FsSearchPageAllPages.propTypes = {};

//
function FsSearchPageAllPages(props) {
    //
    const { ref_main_elm, data_state } = useFbSearchPageAllList({
        handle_API_L: (c_count) =>
            handle_API_FbSearchPage_L({
                c_count: c_count,
                params: ParseLocationSearch(),
            }),
    });

    //
    return (
        <div
            ref={ref_main_elm}
            className={`${
                data_state.has_fetched ? '' : 'FbSearchPageAll_not_fetched'
            }`}
        >
            {data_state.data_arr.map((page_obj, ix) => (
                <div key={page_obj.id} className="fb-search-page-right-item">
                    <FbSearchPagePagesItem page_obj={page_obj} />
                </div>
            ))}
        </div>
    );
}

export default FsSearchPageAllPages;

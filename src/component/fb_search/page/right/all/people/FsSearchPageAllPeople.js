import React from 'react';
import PropTypes from 'prop-types';
//
import { ParseLocationSearch } from '../../../../../../_some_function/ParseLocationSearch';
//
import { handle_API_FbSearchUser_L } from '../../../../../../_handle_api/fb_search/user';
//
import { useFbSearchPageAllList } from '../../../../../../_hooks/search/useFbSearchPageAllList';
//
import FbSearchPagePeopleItem from '../../people/item/FbSearchPagePeopleItem';

//
FsSearchPageAllPeople.propTypes = {};

//
function FsSearchPageAllPeople(props) {
    //
    const { ref_main_elm, data_state } = useFbSearchPageAllList({
        handle_API_L: (c_count) =>
            handle_API_FbSearchUser_L({
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
            {data_state.data_arr.map((item, ix) => (
                <div key={ix} className="fb-search-page-right-item">
                    <FbSearchPagePeopleItem profile={item} />
                </div>
            ))}
        </div>
    );
}

export default FsSearchPageAllPeople;

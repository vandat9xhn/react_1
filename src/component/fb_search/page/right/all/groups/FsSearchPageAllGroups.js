import React from 'react';
import PropTypes from 'prop-types';
//
import { ParseLocationSearch } from '../../../../../../_some_function/ParseLocationSearch';
//
import { handle_API_FbSearchGroup_L } from '../../../../../../_handle_api/fb_search/groups';
//
import { useFbSearchPageAllList } from '../../../../../../_hooks/search/useFbSearchPageAllList';
//
import FbSearchPageGroupItem from '../../groups/item/FbSearchPageGroupItem';

//
FsSearchPageAllGroups.propTypes = {};

//
function FsSearchPageAllGroups(props) {
    //
    const { ref_main_elm, data_state } = useFbSearchPageAllList({
        handle_API_L: (c_count) =>
            handle_API_FbSearchGroup_L({
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
            {data_state.data_arr.map((group_obj, ix) => (
                <div key={group_obj.id} className="fb-search-page-right-item">
                    <FbSearchPageGroupItem group_obj={group_obj} />
                </div>
            ))}
        </div>
    );
}

export default FsSearchPageAllGroups;

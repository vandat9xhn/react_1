import React from 'react';
import PropTypes from 'prop-types';
//
import { ParseLocationSearch } from '../../../../../../_some_function/ParseLocationSearch';
//
import { API_Post_L } from '../../../../../../api/api_django/user/user_post/UserPost';
//
import { useFbSearchPageAllList } from '../../../../../../_hooks/search/useFbSearchPageAllList';
//
import FbScPagePostItem from '../../post/item/_main/FbScPagePostItem';

//
FsSearchPageAllPosts.propTypes = {};

//
function FsSearchPageAllPosts(props) {
    //
    const { ref_main_elm, data_state } = useFbSearchPageAllList({
        handle_API_L: handle_API_PostSearch_L,
    });

    // -----

    //
    async function handle_API_PostSearch_L(c_count) {
        const res = await API_Post_L({
            page: 1,
            size: 10,
            c_count: c_count,
            ...ParseLocationSearch(),
        });

        return res.data;
    }

    //
    return (
        <div
            ref={ref_main_elm}
            className={`${
                data_state.has_fetched ? '' : 'FbSearchPageAll_not_fetched'
            }`}
        >
            {data_state.data_arr.map((post, ix) => (
                <div key={post.id} className="fb-search-page-right-item">
                    <FbScPagePostItem post={post} />
                </div>
            ))}
        </div>
    );
}

export default FsSearchPageAllPosts;

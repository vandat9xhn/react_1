import React from 'react';
import PropTypes from 'prop-types';
//
import { ParseLocationSearch } from '../../../../../../_some_function/ParseLocationSearch';
//
import { API_Post_L } from '../../../../../../api/api_django/user/user_post/UserPost';
//
import { useObserverMoreSearch } from '../../../../../../_hooks/search/useObserverMoreSearch';
//
import FbScPagePostItem from '../item/_main/FbScPagePostItem';
import FbSearchPageLayout from '../../../_components/_layout/FbSearchPageLayout';
// 
import './FbSearchPagePost.scss';

//
FbSearchPagePost.propTypes = {};

//
function FbSearchPagePost(props) {
    //
    const { ref_fake_elm, data_state, data_count } = useObserverMoreSearch({
        handle_API_L: handle_API_PostSearch_L,
    });

    const { data_arr, has_fetched } = data_state;

    // ------

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
        <div className="FbSearchPagePost">
            <FbSearchPageLayout
                right_elm={
                    <div className="FbSearchPagePost_contain display-flex-center">
                        <div className="w-680px">
                            <div>
                                {data_arr.map((post, ix) => (
                                    <div key={post.id} className="margin-bottom-20px">
                                        <FbScPagePostItem post={post} />
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

export default FbSearchPagePost;

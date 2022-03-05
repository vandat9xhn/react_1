import React, { useState } from 'react';
import PropTypes from 'prop-types';
//
import IconCaret from '../../../../../../../_icons_svg/_icon_caret/IconCaret';
//
import ActionsMultiList from '../../../../../../actions_multi_list/_main/ActionsMultiList';
//
import './PostCommentsFilter.scss';

//
const FILTER_ARR = [
    {
        name: 'relevant',
        title: 'Most relevant',
        info: "Show friends' comments and the most engaging comments first.",
    },
    {
        name: 'newest',
        title: 'Newest',
        info: 'Show all comments, with the newest comments first.',
    },
    {
        name: 'all',
        title: 'All comments',
        info: 'Show all comments, including potential spam. The most relevant comments will appear first.',
    },
];

//
PostCommentsFilter.propTypes = {};

//
function PostCommentsFilter({ handleChangeFilter }) {
    //
    const [filter_ix, setFilterIx] = useState(0);

    // -----

    //
    function handle_API_L() {
        return new Promise((res) => {
            setTimeout(() => {
                res([FILTER_ARR]);
            }, 1);
        });
    }

    //
    function handleAction(action_name) {
        const new_filter_ix = FILTER_ARR.findIndex(
            (item) => item.name == action_name
        );

        if (new_filter_ix != filter_ix) {
            setFilterIx(new_filter_ix);
            handleChangeFilter(action_name);
        }
    }

    //
    return (
        <div className="PostCommentsFilter">
            <ActionsMultiList
                title_action={
                    <div className="PostCommentsFilter_contain display-flex align-items-center cursor-pointer font-600 text-secondary">
                        <span className="margin-right-5px">
                            {FILTER_ARR[filter_ix].title}
                        </span>

                        <IconCaret size_icon="15px" fill="currentColor" />
                    </div>
                }
                x_always={'right'}
                //
                handle_API_L={handle_API_L}
                handleAction={handleAction}
            />
        </div>
    );
}

export default PostCommentsFilter;

import React, { useRef } from 'react';
import PropTypes from 'prop-types';
//
import IconCaret from '../../../../../../_icons_svg/_icon_caret/IconCaret';
import IconSent from '../../../../../../_icons_svg/icons_status_message/icon_sent/IconSent';
//
import ActionsMultiList from '../../../../../../component/actions_multi_list/_main/ActionsMultiList';
import ActionsMultiListItem from '../../../../../../component/actions_multi_list/item/ActionsMultiListItem';

//
const ComponentItem = (props) => {
    //
    return (
        <div className="flex-between-center">
            <div className="flex-grow-1 margin-right-5px">
                <ActionsMultiListItem {...props} />
            </div>

            <IconSent
                stroke={`${props.is_active ? 'var(--blue)' : 'transparent'}`}
            />
        </div>
    );
};

//
GroupPageDiscussSort.propTypes = {};

//
function GroupPageDiscussSort({ sort_obj, bg_btn, handleChangeSort }) {
    //
    const ref_list = useRef([[]]);

    // -----

    //
    function handle_API_L() {
        const action_arr = [
            [
                {
                    name: 'new',
                    title: 'New activity',
                    info: 'See posts with recent comments first',
                    is_active: sort_obj.name == 'new',
                },
                {
                    name: 'recent',
                    title: 'Recent posts',
                    info: 'See most recent posts first',
                    is_active: sort_obj.name == 'recent',
                },
            ],
        ];

        ref_list.current = action_arr;

        return action_arr;
    }

    //
    function onAction(action_name = '') {
        const new_sort_obj = ref_list.current[0].find(
            (item) => item.name == action_name
        );

        handleChangeSort({
            name: new_sort_obj.name,
            title: new_sort_obj.title,
        });
    }

    //
    return (
        <div className="GroupPageDiscussSort display-flex">
            <ActionsMultiList
                title_action={
                    <div
                        className="display-flex font-600 font-17px"
                        style={{ color: bg_btn }}
                    >
                        <div className="padding-8px cursor-pointer">
                            <div className="inline-block margin-right-8px">
                                {sort_obj.title}
                            </div>

                            <IconCaret fill="currentColor" size_icon="12px" />
                        </div>
                    </div>
                }
                //
                deps_reset_api={[sort_obj.name]}
                ComponentItem={ComponentItem}
                //
                handle_API_L={handle_API_L}
                handleAction={onAction}
            />
        </div>
    );
}

export default GroupPageDiscussSort;

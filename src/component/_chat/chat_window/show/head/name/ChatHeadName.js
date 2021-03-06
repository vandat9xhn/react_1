import React from 'react';
import PropTypes from 'prop-types';
//
import ActionsMultiList from '../../../../../actions_multi_list/_main/ActionsMultiList';

//
function getData(is_group) {
    if (is_group) {
        return [
            [{ name: 'messenger', title: 'Open in Messenger' }],
            [
                { name: 'colour', title: 'Colour' },
                { name: 'emoji', title: 'Emoji' },
                { name: 'nicknames', title: 'Nicknames' },
                { name: 'group_name', title: 'Conversation name' },
            ],
            [
                { name: 'member', title: 'Member' },
                { name: 'add_member', title: 'Add members' },
                { name: 'leave', title: 'Leave group' },
            ],
            [
                { name: 'mute', title: 'Mute conversation' },
                { name: 'ignore', title: 'Ignore messages' },
                { name: 'block', title: 'Block a member' },
            ],
            [
                { name: 'delete', title: 'Delete chat' },
                {
                    name: 'report',
                    title: "Something's wrong",
                    info: 'Give feedback and report the conversation',
                },
            ],
        ];
    }

    return [
        [
            { name: '', title: 'Open in Messenger' },
            { name: 'view_profile', title: 'View profile' },
        ],
        [
            { name: 'colour', title: 'Colour' },
            { name: 'emoji', title: 'Emoji' },
            { name: 'nicknames', title: 'Nicknames' },
        ],
        [{ name: '', title: 'Create group' }],
        [
            { name: '', title: 'Mute conversation' },
            { name: '', title: 'Ignore messages' },
            { name: '', title: 'Block a member' },
        ],
        [
            { name: '', title: 'Delete chat' },
            {
                name: '',
                title: "Something's wrong",
                info: 'Give feedback and report the conversation',
            },
        ],
    ];
}

//
ChatHeadName.propTypes = {};

//
function ChatHeadName({ is_group, title_action, handleAction }) {
    //
    function handle_API_L() {
        return new Promise((res) => {
            setTimeout(() => {
                res(getData(is_group));
            }, 0);
        });
    }

    //
    return (
        <div>
            <ActionsMultiList
                title_action={title_action}
                // class_action_contain={}
                // use_title={}
                pos_orientation="x"
                // is_at_body={false}
                //
                x_always="right"
                y_always="top"
                transform_x_more={-50}
                // class_separate={}

                // ComponentItem={}
                handle_API_L={handle_API_L}
                handleAction={handleAction}
            />
        </div>
    );
}

export default ChatHeadName;

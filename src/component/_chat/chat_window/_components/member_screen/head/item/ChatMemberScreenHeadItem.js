import React from 'react';
import PropTypes from 'prop-types';
//
import './ChatMemberScreenHeadItem.scss';

//
ChatMemberScreenHeadItem.propTypes = {};

//
function ChatMemberScreenHeadItem({ ix, is_active, title, changeMemberType }) {
    //
    function handleClick() {
        !is_active && changeMemberType(ix);
    }

    //
    return (
        <div
            className={`ChatMemberScreenHeadItem display-flex-center h-100per padding-x-16px font-600 ${
                is_active
                    ? 'ChatMemberScreenHeadItem-active text-blue'
                    : 'text-third cursor-pointer hv-bg-hv'
            }`}
            onClick={handleClick}
        >
            {title}
        </div>
    );
}

export default ChatMemberScreenHeadItem;

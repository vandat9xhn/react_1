import React from 'react';
import PropTypes from 'prop-types';
//
import IconsArrow from '../../../../../../../_icons_svg/icons_arrow/IconsArrow';
//
import ScreenBlurHead from '../../../../../../_screen/components/part/head/ScreenBlurHead';
// 
import ChatMemberScreenHeadItem from '../item/ChatMemberScreenHeadItem';
//
import './ChatMemberScreenHead.scss';

//
const member_type_arr = [
    {
        title: 'All',
    },
    {
        title: 'Admins',
    },
];

//
ChatMemberScreenHead.propTypes = {};

//
function ChatMemberScreenHead({
    member_type_ix,
    changeMemberType,
    handleClose,
}) {
    //
    return (
        <div className="ChatMemberScreenHead">
            <ScreenBlurHead
                use_own_title={true}
                title={
                    <div className="display-flex h-100per">
                        {member_type_arr.map((item, ix) => (
                            <div key={ix} className="h-100per">
                                <ChatMemberScreenHeadItem
                                    ix={ix}
                                    is_active={ix == member_type_ix}
                                    title={item.title}
                                    changeMemberType={changeMemberType}
                                />
                            </div>
                        ))}
                    </div>
                }
                closeScreenBlur={handleClose}
            />
        </div>
    );
}

export default ChatMemberScreenHead;

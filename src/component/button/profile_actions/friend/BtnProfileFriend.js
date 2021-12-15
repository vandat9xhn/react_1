import React from 'react';
import PropTypes from 'prop-types';
//
import IconFriend from '../../../../_icons_svg/icon_friend/IconFriend';
//
import BtnProfileActions from '../_common/BtnProfileActions';
import ActionsMultiList from '../../../actions_multi_list/_main/ActionsMultiList';
//
import './BtnProfileFriend.scss';

//
BtnProfileFriend.propTypes = {};

//
function BtnProfileFriend({
    is_at_body,
    use_title,
    
    handle_API_L,
    handleAction,
}) {
    //
    return (
        <div className="BtnProfileFriend">
            <ActionsMultiList
                title_action={
                    <BtnProfileActions
                        className={'BtnProfileFriend_btn bg-ccc'}
                        Icon={<IconFriend />}
                        use_title={use_title}
                        title="Friend"
                    />
                }
                use_title={true}
                is_at_body={is_at_body}
                class_separate=""
                // ComponentItem
                handle_API_L={handle_API_L}
                handleAction={handleAction}
            />
        </div>
    );
}

export default BtnProfileFriend;

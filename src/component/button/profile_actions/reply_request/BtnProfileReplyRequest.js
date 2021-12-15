import React from 'react';
import PropTypes from 'prop-types';
//
import IconFriend from '../../../../_icons_svg/icon_friend/IconFriend';
//
import ActionsMultiList from '../../../actions_multi_list/_main/ActionsMultiList';
import BtnProfileActions from '../_common/BtnProfileActions';
//
import './BtnProfileReplyRequest.scss';

//
BtnProfileReplyRequest.propTypes = {};

//
function BtnProfileReplyRequest({
    is_at_body,
    use_title,

    handle_API_L,
    handleAction,
}) {
    //
    return (
        <div className="BtnProfileReplyRequest">
            <ActionsMultiList
                title_action={
                    <BtnProfileActions
                        className={
                            'BtnProfileReplyRequest_btn bg-blue text-white'
                        }
                        Icon={<IconFriend fill="currentColor" stroke="none" />}
                        use_title={use_title}
                        title="Respond"
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

export default BtnProfileReplyRequest;

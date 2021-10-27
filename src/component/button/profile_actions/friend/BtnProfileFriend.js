import React from 'react';
import PropTypes from 'prop-types';
//
import IconsAction from '../../../../_icons_svg/icons_action/IconsAction';
//
import BtnProfileActions from '../_common/BtnProfileActions';
import ActionsMultiList from '../../../actions_multi_list/_main/ActionsMultiList';
// 
import './BtnProfileFriend.scss';

//
BtnProfileFriend.propTypes = {};

//
function BtnProfileFriend({ handle_API_L, handleAction }) {
    //
    return (
        <div className="BtnProfileFriend">
            <ActionsMultiList
                title_action={
                    <BtnProfileActions
                        className={'BtnProfileFriend_btn bg-ccc'}
                        Icon={<IconsAction y={200} />}
                        title="Friend"
                    />
                }
                use_title={true}
                is_at_body={false}
                class_separate=""
                // ComponentItem
                handle_API_L={handle_API_L}
                handleAction={handleAction}
            />
        </div>
    );
}

export default BtnProfileFriend;

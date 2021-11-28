import React from 'react';
import PropTypes from 'prop-types';
//
import { handle_API_GroupActions_L } from '../../../_handle_api/fb_group/action';
//
import ActionsMultiList from '../../actions_multi_list/_main/ActionsMultiList';
import BtnGroupJoined from '../../button/group_actions/joined/BtnGroupJoined';

//
ActionsGroupJoined.propTypes = {};

//
function ActionsGroupJoined({
    group_id,

    // btn_class,
    // btn_title,
    // BtnIcon,

    handleAction,
}) {
    //
    function handle_API_L() {
        return handle_API_GroupActions_L({
            group_id: group_id,
            type: 'joined',
        });
    }

    //
    return (
        <div className="ActionsGroupJoined">
            <ActionsMultiList
                title_action={
                    <BtnGroupJoined
                        // className={''}
                        // title={btn_title}
                        // Icon={BtnIcon}
                        // handleAction={handleAction}
                    />
                }
                handle_API_L={handle_API_L}
                handleAction={handleAction}
            />
        </div>
    );
}

export default ActionsGroupJoined;

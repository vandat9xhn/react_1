import React from 'react';
import PropTypes from 'prop-types';
//
import { IS_MOBILE } from '../../../../../_constant/Constant';
//
import ActionsProfileCase from '../../../../../component/actions_profile/case/_main/ActionsProfileCase';
import ActionsProfileOther from '../../../../../component/actions_profile/other/ActionsProfileOther';
//
import './ProfileInfoActions.scss';

//
ProfileInfoActions.propTypes = {};

//
function ProfileInfoActions({ action_case_arr, user_id, handleAction }) {
    //
    return (
        <div className="ProfileInfoActions">
            <div className="flex-end align-items-center flex-wrap">
                {action_case_arr.slice(0, IS_MOBILE ? 1 : 2).map((item, ix) => (
                    <div
                        key={ix}
                        className="ProfileInfoActions_item margin-x-4px margin-top-8px"
                    >
                        <ActionsProfileCase
                            action_case={item.name}
                            user_id={user_id}
                            handleAction={handleAction}
                        />
                    </div>
                ))}

                {IS_MOBILE ? (
                    <div
                        className={`margin-x-4px margin-top-8px ${
                            action_case_arr.length == 2
                                ? 'flex-grow-1 display-flex align-items-center'
                                : ''
                        }`}
                    >
                        {action_case_arr.length == 2 ? (
                            <div className="ProfileInfoActions_item">
                                <ActionsProfileCase
                                    action_case={action_case_arr[1].name}
                                    user_id={user_id}
                                    handleAction={handleAction}
                                />
                            </div>
                        ) : null}

                        <div
                            className={`${
                                action_case_arr.length == 2
                                    ? 'margin-left-8px'
                                    : ''
                            }`}
                        >
                            <ActionsProfileOther
                                user_id={user_id}
                                handleAction={handleAction}
                            />
                        </div>
                    </div>
                ) : null}
            </div>
        </div>
    );
}

export default ProfileInfoActions;

import React from 'react';
import PropTypes from 'prop-types';
//
import { IS_MOBILE } from '../../../../../_constant/Constant';
//
import PrIActionsCase from '../case/_main/PrIActionsCase';
import ProfileActionsOther from '../other/ProfileActionsOther';
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
                        <PrIActionsCase
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
                                <PrIActionsCase
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
                            <ProfileActionsOther
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

import React from 'react';
import PropTypes from 'prop-types';
//
import { IS_MOBILE } from '../../../../../_constant/Constant';
// 
import GroupPageDiscussLeft from '../left/_main/GroupPageDiscussLeft';
import GroupPageDiscussRight from '../right/_main/GroupPageDiscussRight';
import GroupPageDiscussPrivate from '../private/GroupPageDiscussPrivate';
//
import './GroupPageDiscuss.scss';

//
GroupPageDiscuss.propTypes = {};

//
function GroupPageDiscuss({ group_id, is_admin, bg_btn, no_permission }) {
    //
    return (
        <div className="GroupPageDiscuss padding-16px">
            <div className="GroupPageDiscuss_row display-flex justify-content-center">
                <div className="GroupPageDiscuss_left w-500px margin-right-15px">
                    {no_permission ? (
                        <GroupPageDiscussPrivate />
                    ) : (
                        <GroupPageDiscussLeft
                            group_id={group_id}
                            bg_btn={bg_btn}
                        />
                    )}
                </div>

                {IS_MOBILE ? null : (
                    <div className="GroupPageDiscuss_right w-360px">
                        <GroupPageDiscussRight
                            group_id={group_id}
                            is_admin={is_admin}
                            no_permission={no_permission}
                        />
                    </div>
                )}
            </div>
        </div>
    );
}

export default GroupPageDiscuss;

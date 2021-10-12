import React from 'react';
import PropTypes from 'prop-types';
//
import { joinArrayWithAnd } from '../../../../../../_some_function/joinArrayWithAnd';
//
import BtnPermission from '../../../../../button/permission/BtnPermission';

//
CUPostHomeUser.propTypes = {};

//
function CUPostHomeUser({
    user,
    emoji_obj,
    user_tag_arr,
    permission,

    openPermission,
    openTagUsers,
    openEmoji,
}) {
    //
    const user_tag_str =
        user_tag_arr.length == 0
            ? ''
            : joinArrayWithAnd([
                  ...user_tag_arr
                      .slice(0, 4)
                      .map((item) => item.first_name + ' ' + item.last_name),
                  ...(user_tag_arr.length >= 5
                      ? [`${user_tag_arr.length - 4} others`]
                      : []),
              ]);

    //
    return (
        <div className="CUPostHomeUser">
            <div className="display-flex align-items-center">
                <img
                    className="flex-shrink-0 brs-50 object-fit-cover"
                    src={user.picture}
                    alt=""
                    width="40"
                    height="40"
                />

                <div className="padding-left-10px font-500">
                    <div className="margin-bottom-5px">
                        <span>
                            {user.first_name} {user.last_name}
                        </span>

                        {emoji_obj.id || user_tag_str ? (
                            <span className="font-400 text-secondary">
                                {' is '}
                            </span>
                        ) : (
                            ''
                        )}

                        {emoji_obj.id ? (
                            <React.Fragment>
                                <span className="font-400 text-secondary">
                                    {emoji_obj.icon} {emoji_obj.type}{' '}
                                </span>

                                <span
                                    className="hv-underline cursor-pointer"
                                    onClick={openEmoji}
                                >
                                    {emoji_obj.name}
                                </span>
                            </React.Fragment>
                        ) : null}

                        {user_tag_str ? (
                            <React.Fragment>
                                <span className="font-400 text-secondary">
                                    {' with '}
                                </span>

                                <span
                                    className="hv-underline cursor-pointer"
                                    onClick={openTagUsers}
                                >
                                    {user_tag_str}
                                </span>
                            </React.Fragment>
                        ) : null}
                    </div>

                    <div>
                        <BtnPermission
                            permission={permission}
                            show_title={true}
                            openPermission={openPermission}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CUPostHomeUser;

import React from 'react';
import PropTypes from 'prop-types';
//
import { UnitNumber } from '../../../../../../_some_function/UnitNumber';
//
import IconFriends from '../../../../../../_icons_svg/icon_friends/IconFriends';
//
import FsSearchPageUserLayout from '../../../_components/user_layout/FsSearchPageUserLayout';
//
// import './FbSearchPagePagesItem.scss';

//
FbSearchPagePagesItem.propTypes = {};

//
function FbSearchPagePagesItem({ page_obj }) {
    //
    const {
        id,
        name,
        picture,

        description,
        count_like,
        action_case,

        friend_arr,
        friend_count,
    } = page_obj;

    //
    const friend_like_str = friend_count <= 0
        ? ''
        : `${friend_arr[0].first_name} ${friend_arr[0].last_name}${
              friend_count >= 2
                  ? ` and ${friend_count - 1} other friend${
                        friend_count == 2 ? '' : 's'
                    }`
                  : ''
          } like this`;

    // -----

    //
    function handleAction(...params) {
        console.log(params);
    }

    //
    return (
        <div className="FbSearchPagePagesItem">
            <FsSearchPageUserLayout
                id={id}
                picture={picture}
                name={name}
                info_1={`${UnitNumber(count_like)} like this`}
                info_2={
                    <div>
                        {friend_count ? (
                            <div>
                                <IconFriends /> <span>{friend_like_str}</span>
                            </div>
                        ) : null}

                        <div>{description}</div>
                    </div>
                }
                Icon={null}
            />
        </div>
    );
}

export default FbSearchPagePagesItem;

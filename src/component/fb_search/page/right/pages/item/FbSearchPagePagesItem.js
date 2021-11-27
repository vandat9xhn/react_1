import React from 'react';
import PropTypes from 'prop-types';
//
import { UnitNumber } from '../../../../../../_some_function/UnitNumber';
//
import IconFriends from '../../../../../../_icons_svg/icon_friends/IconFriends';
//
import PageTick from '../../../../../page_name_tick/tick/PageTick';
import ActionPreviewPage from '../../../../../action_preview_page/_main/ActionPreviewPage';
import FsSearchPageUserPageGroup from '../../../_components/user_page_group/FsSearchPageUserPageGroup';
import { Link } from 'react-router-dom';
//
// import './FbSearchPagePagesItem.scss';

//
function ActionPreviewPageNameTick({ page_id, name, link_to }) {
    //
    return (
        <ActionPreviewPage
            title_action={
                <span className="display-inline">
                    <Link
                        className="break-word vertical-align-middle color-inherit font-600"
                        to={link_to}
                    >
                        {name}
                    </Link>

                    <span className="inline-block vertical-align-middle margin-left-5px wh-16px">
                        <PageTick />
                    </span>
                </span>
            }
            page_id={page_id}
        />
    );
}

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
        has_tick,

        friend_arr,
        friend_count,
    } = page_obj;

    //
    const friend_like_str =
        friend_count <= 0
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
            <FsSearchPageUserPageGroup
                id={id}
                picture={picture}
                name={name}
                //
                NameComponent={
                    has_tick ? ActionPreviewPageNameTick : ActionPreviewPage
                }
                PicComponent={ActionPreviewPage}
                link_to={`/page/${id}`}
                action_img_props={{ page_id: id }}
                action_name_props={{
                    page_id: id,
                    link_to: `/page/${id}`,
                    name: name,
                }}
                //
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

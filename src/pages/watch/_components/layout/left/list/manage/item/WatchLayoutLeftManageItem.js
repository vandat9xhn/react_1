import React from 'react';
import PropTypes from 'prop-types';
//
import IconBell from '../../../../../../../../_icons_svg/icon_bell/IconBell';
import IconPlusSubtract from '../../../../../../../../_icons_svg/_icon_plus_subtract/IconPlusSubtract';
//
import './WatchLayoutLeftManageItem.scss';

//
WatchLayoutLeftManageItem.propTypes = {};

//
function WatchLayoutLeftManageItem({
    item,
    ix,

    toggleNotice,
    handleFollowVideos,
    handleUnFollowVideos,
}) {
    //
    const { name, picture, has_notice, has_follow } = item;

    // ----

    //
    function onToggleNotice() {
        toggleNotice(ix);
    }

    //
    function onFollowVideos() {
        handleFollowVideos(ix);
    }

    //
    function onUnFollowVideos() {
        handleUnFollowVideos(ix);
    }

    //
    return (
        <div className="WatchLayoutLeftManageItem flex-between-center padding-8px">
            <div className="WatchLayoutLeftManageItem_left display-flex align-items-center">
                <img
                    className="margin-right-12px brs-50 object-fit-cover"
                    src={picture}
                    alt=""
                    width={36}
                    height={36}
                />

                <div className="font-600">{name}</div>
            </div>

            <div className="WatchLayoutLeftManageItem_right">
                {has_follow ? (
                    <div className="display-flex align-items-center">
                        <div
                            className={`WatchLayoutLeftManageItem_icon ${
                                has_notice
                                    ? 'WatchLayoutLeftManageItem_bell-active'
                                    : 'WatchLayoutLeftManageItem_bell-inactive'
                            }`}
                            onClick={onToggleNotice}
                        >
                            <IconBell />
                        </div>

                        <div
                            className="WatchLayoutLeftManageItem_icon"
                            onClick={onUnFollowVideos}
                        >
                            <IconPlusSubtract class_icon="rotate-45" />
                        </div>
                    </div>
                ) : (
                    <div
                        className="WatchLayoutLeftManageItem_icon"
                        onClick={onFollowVideos}
                    >
                        <IconPlusSubtract />
                    </div>
                )}
            </div>
        </div>
    );
}

export default WatchLayoutLeftManageItem;

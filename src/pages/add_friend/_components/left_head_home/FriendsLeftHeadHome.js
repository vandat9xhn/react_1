import React from 'react';
import PropTypes from 'prop-types';
//
import IconSetting from '../../../../_icons_svg/icon_setting/IconSetting';

//
FriendsLeftHeadHome.propTypes = {};

//
function FriendsLeftHeadHome(props) {
    // 
    return (
        <div className="FriendsLeftHeadHome flex-between-center padding-x-16px padding-y-12px line-25px">
            <h1 className="font-24px">Friends</h1>

            <div className="btn-icon-36px bg-ccc cursor-pointer hv-bg-hv">
                <IconSetting size_icon="20px" />
            </div>
        </div>
    );
}

export default FriendsLeftHeadHome;

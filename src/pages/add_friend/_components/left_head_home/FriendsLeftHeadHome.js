import React from 'react';
import PropTypes from 'prop-types';
//
import LeftBarTitleSettings from '../../../../component/side_bar/left/title_settings/LeftBarTitleSettings';
import FriendsSettings from '../settings/_main/FriendsSettings';
//
import './FriendsLeftHeadHome.scss';

//
FriendsLeftHeadHome.propTypes = {};

//
function FriendsLeftHeadHome(props) {
    //
    return (
        <div className="FriendsLeftHeadHome">
            <LeftBarTitleSettings
                title={'Friends'}
                setting_elm={<FriendsSettings />}
            />
        </div>
    );
}

export default FriendsLeftHeadHome;

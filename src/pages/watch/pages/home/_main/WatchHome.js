import React from 'react';
import PropTypes from 'prop-types';
//
import WatchHomeNew from '../new/_main/WatchHomeNew';
import WatchHomePosts from '../posts/_main/WatchHomePosts';
//
import './WatchHome.scss';
import './WatchHomeCommon.scss';

//
WatchHome.propTypes = {};

//
function WatchHome(props) {
    //
    return (
        <div className="WatchHome">
            <div>
                <WatchHomeNew />
            </div>

            <div>
                <WatchHomePosts />
            </div>
        </div>
    );
}

export default WatchHome;

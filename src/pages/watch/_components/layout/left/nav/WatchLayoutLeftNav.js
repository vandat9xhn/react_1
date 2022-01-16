import React from 'react';
import PropTypes from 'prop-types';
//
import IconWatch from '../../../../../../_icons_svg/watch/IconWatch';
//
import LeftBarNav from '../../../../../../component/side_bar/left/nav/_main/LeftBarNav';

//
const watch_nav_arr = [
    {
        Icon: <IconWatch />,
        title: 'Home',
        link_to: '/watch',
    },
    {
        Icon: null,
        title: 'Live',
        link_to: '/watch/live',
    },
    {
        Icon: null,
        title: 'Show',
        link_to: '/watch/show',
    },
    {
        Icon: null,
        title: 'Explore',
        link_to: '/watch/explore',
    },
    {
        Icon: null,
        title: 'Saved videos',
        link_to: '/watch/saved',
    },
];

//
WatchLayoutLeftNav.propTypes = {};

//
function WatchLayoutLeftNav({}) {
    //
    return (
        <div className="WatchLayoutLeftNav padding-x-8px">
            <LeftBarNav nav_arr={watch_nav_arr} />
        </div>
    );
}

export default WatchLayoutLeftNav;

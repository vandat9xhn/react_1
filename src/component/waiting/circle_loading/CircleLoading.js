import React from 'react';
import PropTypes from 'prop-types';

import IconsLoader from '../../../_icons_svg/icons_loader/IconsLoader';
// 
// import './CircleLoading.scss';

// 
CircleLoading.propTypes = {
    is_fetching: PropTypes.bool,
    size_icon: PropTypes.string,
};

CircleLoading.defaultProps = {
    is_fetching: false,
}

//
function CircleLoading({is_fetching, size_icon}) {
    // 
    return (
        <div className={`width-fit-content ${is_fetching ? 'nav-active' : 'display-none'}`}>
            <div className="CircleLoading_circle">
                <IconsLoader size_icon={size_icon}/>
            </div>
        </div>
    );
}

export default CircleLoading;

import React from 'react';
import PropTypes from 'prop-types';

import IconsLoader from '../../../_icons_svg/icons_loader/IconsLoader';
// 
// import './CircleLoading.scss';

//
function CircleLoading(props) {
    const {open_fetching, size_icon} = props;

    return (
        <div className={`width-fit-content ${open_fetching ? 'nav-active' : 'display-none'}`}>
            <div className="CircleLoading_circle">
                <IconsLoader size_icon={size_icon}/>
            </div>
        </div>
    );
}

CircleLoading.propTypes = {
    open_fetching: PropTypes.bool,
    size_icon: PropTypes.string,
};

CircleLoading.defaultProps = {
    open_fetching: false,
}

export default CircleLoading;

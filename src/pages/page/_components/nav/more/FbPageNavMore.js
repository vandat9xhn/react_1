import React from 'react';
import PropTypes from 'prop-types';
// 
import ProfileLayoutNavMore from '../../../../../component/profile_layout/nav/more/_main/ProfileLayoutNavMore';

// 
FbPageNavMore.propTypes = {};

// 
function FbPageNavMore({color, bg_btn, more_link_arr}) {
    // 
    return (
        <ProfileLayoutNavMore
            color={color}
            bg_btn={bg_btn}
            more_link_arr={more_link_arr}
        />
    );
}

export default FbPageNavMore;

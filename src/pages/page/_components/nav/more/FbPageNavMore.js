import React from 'react';
import PropTypes from 'prop-types';
//
import ProfileLayoutNavMore from '../../../../../component/profile_layout/nav/more/_main/ProfileLayoutNavMore';

//
FbPageNavMore.propTypes = {};

//
function FbPageNavMore({ color, bg_btn, more_link_arr }) {
    // 
    const is_active = more_link_arr.some((item) =>
        location.pathname.startsWith(item.link_to)
    );

    //
    return (
        <ProfileLayoutNavMore
            color={color}
            bg_btn={bg_btn}
            more_link_arr={more_link_arr}
            is_active={is_active}
        />
    );
}

export default FbPageNavMore;

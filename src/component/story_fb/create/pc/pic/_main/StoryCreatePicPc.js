import React from 'react';
import PropTypes from 'prop-types';
//
import StoryCommonPcC from '../../../../_components/create/pc/_common/StoryCommonPcC';

//
StoryCreatePicPc.propTypes = {};

//
function StoryCreatePicPc({ show_fav, handleClose }) {
    return (
        <StoryCommonPcC
            show_fav={show_fav}
            children_left={''}
            children_right={''}
            handleClose={handleClose}
        />
    );
}

export default StoryCreatePicPc;

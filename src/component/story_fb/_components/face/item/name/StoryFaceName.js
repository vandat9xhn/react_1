import React from 'react';
import PropTypes from 'prop-types';
// 
import './StoryFaceName.scss';

//
StoryFaceName.propTypes = {};

//
function StoryFaceName({ name }) {
    //
    return (
        <div className="StoryFaceName_contain">
            <span className="StoryFaceName_item font-500 text-white">
                {name}
            </span>
        </div>
    );
}

export default StoryFaceName;

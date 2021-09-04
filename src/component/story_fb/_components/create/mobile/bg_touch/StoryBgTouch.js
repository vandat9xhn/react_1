import React from 'react';
import PropTypes from 'prop-types';

//
StoryBgTouch.propTypes = {};

//
function StoryBgTouch({ ref_fake_elm, scale }) {
    //
    return (
        <div
            ref={ref_fake_elm}
            className="pos-abs left-50per top-50per wh-200v display-none"
            style={{
                transform: `translate(-50%, -50%) scale(${2 / scale})`,
                zIndex: -1,
            }}
        ></div>
    );
}

export default StoryBgTouch;

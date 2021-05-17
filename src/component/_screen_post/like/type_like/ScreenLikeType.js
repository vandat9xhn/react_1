import React from 'react';
import PropTypes from 'prop-types';

// 
ScreenLikeType.propTypes = {
    ix: PropTypes.number,
    changeListTypeLike: PropTypes.func,
    component: PropTypes.object,
};

// 
function ScreenLikeType(props) {
    const {ix, changeListTypeLike, component} = props;

    // 
    function onChangeListTypeLike() {
        changeListTypeLike(ix)
    }

    // 
    return (
        <div>
            <div
                onClick={onChangeListTypeLike}
            >
                {component}
            </div>
        </div>
    );
}

export default ScreenLikeType;

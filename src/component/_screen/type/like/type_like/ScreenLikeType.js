import React from 'react';
import PropTypes from 'prop-types';

//
ScreenLikeType.propTypes = {
    ix: PropTypes.number,
    changeListTypeLike: PropTypes.func,
    component: PropTypes.object,
};

//
function ScreenLikeType({ ix, changeListTypeLike, component }) {
    //
    function onChangeListTypeLike() {
        changeListTypeLike(ix);
    }

    //
    return <div onClick={onChangeListTypeLike}>{component}</div>;
}

export default ScreenLikeType;

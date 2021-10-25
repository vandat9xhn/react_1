import React from 'react';
import PropTypes from 'prop-types';
//
import { UnitNumber } from '../../../../../_some_function/UnitNumber';

//
ScreenLikeType.propTypes = {
    ix: PropTypes.number,
    count: PropTypes.number,
    changeListTypeLike: PropTypes.func,
    component: PropTypes.object,
};

//
function ScreenLikeType({ ix, count, changeListTypeLike, component }) {
    //
    function onChangeListTypeLike() {
        changeListTypeLike(ix);
    }

    //
    return (
        <div
            className="ScreenLikeType display-flex-center h-100per padding-x-16px"
            onClick={onChangeListTypeLike}
        >
            {component}

            <span className="margin-left-5px">{UnitNumber(count)}</span>
        </div>
    );
}

export default ScreenLikeType;

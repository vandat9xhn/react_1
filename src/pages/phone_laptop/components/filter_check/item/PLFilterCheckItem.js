import React from 'react';
import PropTypes from 'prop-types';
//
import CheckBox from '../../../../../component/input/checkbox/CheckBox';

//
PLFilterCheckItem.propTypes = {};

//
function PLFilterCheckItem({ title, ix, checked, checkFilter }) {
    //
    function onCheckFilter() {
        checkFilter(ix);
    }

    //
    return (
        <div
            className="PLFilterCheckItem display-flex align-items-center cursor-pointer"
            onClick={onCheckFilter}
        >
            <div className={`${checked ? 'text-blue' : 'text-white'}`}>
                <CheckBox />
            </div>

            <div className="padding-left-10px">{title}</div>
        </div>
    );
}

export default PLFilterCheckItem;

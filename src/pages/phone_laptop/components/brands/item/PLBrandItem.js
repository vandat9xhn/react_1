import React from 'react';
import PropTypes from 'prop-types';
//
import './PLBrandItem.scss';

//
PLBrandItem.propTypes = {};

//
function PLBrandItem({ ix, title, checked, handleChooseBrand }) {
    //
    function onChooseBrand() {
        handleChooseBrand(ix);
    }

    //
    return (
        <div
            className={`PLBrandItem padding-y-5px text-align-center font-500 cursor-pointer ${
                checked ? 'border-blue text-blue' : 'border-blur'
            }`}
            onClick={onChooseBrand}
        >
            {title}
        </div>
    );
}

export default PLBrandItem;

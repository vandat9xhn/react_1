import React from 'react';
import PropTypes from 'prop-types';

//
PLBrandItem.propTypes = {};

//
function PLBrandItem({ ix, name, is_active, handleChooseBrand }) {
    //
    function onChooseBrand() {
        handleChooseBrand(ix);
    }

    //
    return (
        <div
            className={`PLBrandItem padding-4px border-blur font-500 ${
                is_active ? 'text-blue' : ''
            }`}
            onClick={onChooseBrand}
        >
            {name}
        </div>
    );
}

export default PLBrandItem;

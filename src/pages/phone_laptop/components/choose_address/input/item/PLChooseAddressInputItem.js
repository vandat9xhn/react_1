import React from 'react';
import PropTypes from 'prop-types';

//
PLChooseAddressInputItem.propTypes = {};

//
function PLChooseAddressInputItem({
    address_name,
    id,
    is_active,

    handleClick,
}) {
    //
    function onClick() {
        handleClick(id);
    }

    //
    return (
        <div
            className={`PLChooseAddressInputItem padding-5px text-blue cursor-pointer ${
                is_active ? 'PLChooseAddressInputItem-active font-700' : ''
            }`}
            onClick={onClick}
        >
            {address_name}
        </div>
    );
}

export default PLChooseAddressInputItem;

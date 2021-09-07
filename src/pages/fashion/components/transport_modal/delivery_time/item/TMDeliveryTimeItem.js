import React from 'react';
import PropTypes from 'prop-types';
//
import RadioCustom from '../../../../../../component/input/radio_custom/RadioCustom';

//
TMDeliveryTimeItem.propTypes = {};

//
function TMDeliveryTimeItem({
    name,
    description,

    ix,
    is_active,

    handleChoose,
}) {
    //
    function onChoose() {
        handleChoose(ix);
    }

    //
    return (
        <div
            className="TMDeliveryTimeItem padding-y-12px cursor-pointer"
            onClick={onChoose}
        >
            <div className="display-flex">
                <div>
                    <RadioCustom is_active={is_active} />
                </div>

                <div className="margin-left-10px">
                    <div className="TMDeliveryTimeItem_name font-16px">{name}</div>

                    <div className="font-12px text-third">{description}</div>
                </div>
            </div>
        </div>
    );
}

export default TMDeliveryTimeItem;

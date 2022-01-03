import React from 'react';
import PropTypes from 'prop-types';
//
import RadioCustom from '../../../../../../../input/radio_custom/RadioCustom';
//
import './ChatMessRemoveItem.scss';

//
ChatMessRemoveItem.propTypes = {};

//
function ChatMessRemoveItem({
    title,
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
        <div className="ChatMessRemoveItem">
            <div
                className="ChatMessRemoveItem_title cursor-pointer"
                onClick={onChoose}
            >
                <div className="display-flex align-items-center">
                    <RadioCustom is_active={is_active} />

                    <div className="margin-left-8px font-500">{title}</div>
                </div>
            </div>

            <div className="margin-top-10px padding-left-24px text-third">
                {description}
            </div>
        </div>
    );
}

export default ChatMessRemoveItem;

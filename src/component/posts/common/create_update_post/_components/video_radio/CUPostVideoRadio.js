import React from 'react';
import PropTypes from 'prop-types';
//
import RadioFbItem from '../../../../../input/radio_fb/item/RadioFbItem';
//
import './CUPostVideoRadio.scss';

//
CUPostVideoRadio.propTypes = {};

//
function CUPostVideoRadio({ ix, is_active, children, handleChoose }) {
    //
    function onChoose() {
        !is_active && handleChoose(ix);
    }

    //
    return (
        <div
            className="CUPostVideoRadio padding-x-10px padding-y-8px brs-4px hv-bg-s-through cursor-pointer"
            onClick={onChoose}
        >
            <div className="flex-between-center">
                <div className="flex-grow-1 margin-right-10px">{children}</div>

                <div
                    className={`CUPostVideoRadio_radio flex-shrink-0 ${
                        is_active ? 'text-blue' : ''
                    }`}
                >
                    <RadioFbItem is_active={is_active} />
                </div>
            </div>
        </div>
    );
}

export default CUPostVideoRadio;

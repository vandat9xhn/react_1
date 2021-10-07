import React from 'react';
import PropTypes from 'prop-types';
//
import RadioFbItem from '../../../../../input/radio_fb/item/RadioFbItem';
//
import './CUPostRadio.scss';

//
CUPostRadio.propTypes = {};

//
function CUPostRadio({ ix, is_active, children, handleChoose }) {
    //
    function onChoose() {
        !is_active && handleChoose(ix);
    }

    //
    return (
        <div className="CUPostRadio">
            <div className="flex-between-center">
                <div className="flex-grow-1 margin-right-10px">{children}</div>

                <div
                    className="CUPostRadio_right flex-shrink-0 padding-8px brs-50 hv-bg-s-through cursor-pointer"
                    onClick={onChoose}
                >
                    <div
                        className={`CUPostRadio_radio brs-50 bg-primary ${
                            is_active ? 'text-blue' : ''
                        }`}
                    >
                        <RadioFbItem is_active={is_active} />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CUPostRadio;

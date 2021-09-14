import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
//
import './FsScPriceMinMax.scss';
import { formatNum } from '../../../../../../_some_function/FormatNum';

//
FsScPriceMinMax.propTypes = {};

//
function FsScPriceMinMax({
    default_min_price,
    default_max_price,

    handleApplyPriceMinMax,
}) {
    //
    const [state_obj, setStateObj] = useState({
        min_price: default_min_price || '',
        max_price: default_max_price || '',
    });

    const { min_price, max_price } = state_obj;

    //
    useEffect(() => {
        setStateObj({
            ...state_obj,
            min_price: default_min_price || '',
            max_price: default_max_price || '',
        });
    }, [default_min_price, default_max_price]);

    // --------

    //
    function handleKeyDownPrice(e) {
        const keyCode = e.keyCode;
        if ((keyCode < 48 || keyCode > 57) && keyCode != 8) {
            e.preventDefault();
        }
    }

    //
    function handleChangePrice(
        value = '',
        key_state = 'min_price' || 'max_price'
    ) {
        setStateObj({
            ...state_obj,
            [key_state]: value,
        });
    }

    // -------

    //
    function handleChangeMinPrice(e) {
        handleChangePrice(e.target.value, 'min_price');
    }

    //
    function handleChangeMaxPrice(e) {
        handleChangePrice(e.target.value, 'max_price');
    }

    //
    function onApplyPriceMinMax() {
        handleApplyPriceMinMax({
            new_min_price: min_price,
            new_max_price: max_price,
        });
    }

    //
    return (
        <div className="FsScPriceMinMax">
            <div className="margin-bottom-10px font-14px font-500 text-cap">
                Khoảng giá
            </div>

            <div className="margin-bottom-10px">
                <div className="FsScPriceMinMax_row flex-between-center">
                    <div className="FsScPriceMinMax_input flex-grow-1">
                        <input
                            className="FsScPriceMinMax_input_item w-100per padding-5px border-blur brs-2px text-align-center"
                            type="text"
                            value={min_price}
                            placeholder="từ"
                            onKeyDown={handleKeyDownPrice}
                            onChange={handleChangeMinPrice}
                        />
                    </div>

                    <div className="padding-4px">
                        <div className="FsScPriceMinMax_separate_contain"></div>
                    </div>

                    <div className="FsScPriceMinMax_input pos-rel flex-grow-1">
                        <input
                            className="FsScPriceMinMax_input_item w-100per padding-5px border-blur brs-2px text-align-center"
                            type="text"
                            value={max_price}
                            placeholder="đến"
                            onKeyDown={handleKeyDownPrice}
                            onChange={handleChangeMaxPrice}
                        />

                        {/* <div className="pos-abs-100">
                            <div className="wh-100 padding-5px border-blur brs-2px text-align-center">
                                {max_price}
                            </div>
                        </div> */}
                    </div>
                </div>
            </div>

            <div className="padding-bottom-10px">
                <button
                    className="FsScPriceMinMax_btn margin-left-auto btn btn-hv-btn-active padding-y-5px brs-3px bg-fashion-red text-white text-upper cursor-pointer"
                    type="button"
                    onClick={onApplyPriceMinMax}
                >
                    Áp dụng
                </button>
            </div>
        </div>
    );
}

export default FsScPriceMinMax;

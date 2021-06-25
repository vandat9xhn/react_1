import React, { useState } from 'react';
import PropTypes from 'prop-types';
//
import CloseDiv from '../../../../some_div/close_div/CloseDiv';
//
import SelectColorBgItem from '../item/SelectColorBgItem';
//
import './SelectColorBg.scss';

//
SelectColorBg.propTypes = {
    active_ix: PropTypes.number,
    color_bg_arr: PropTypes.array,
    handleChangeColorBg: PropTypes.func,
};

SelectColorBg.defaultProps = {};

//
function SelectColorBg({ active_ix, color_bg_arr, handleChangeColorBg }) {
    //
    const [is_open, setIsOpen] = useState(false);

    //
    function toggleSelectColorBg() {
        setIsOpen(!is_open);
    }

    //
    function closeSelectColorBg() {
        is_open && setIsOpen(false);
    }

    //
    return (
        <div className="SelectColorBg position-rel">
            <CloseDiv makeDivHidden={closeSelectColorBg}>
                <div>
                    <div>
                        <div
                            className={`SelectColorBg_btn-item padding-4px text-align-center label-field cursor-pointer ${color_bg_arr[active_ix].bg} ${color_bg_arr[active_ix].color}`}
                            onClick={toggleSelectColorBg}
                            type="text"
                        >
                            Color
                        </div>
                    </div>

                    <div
                        className={`SelectColorBg_list ${
                            is_open ? '' : 'display-none'
                        }`}
                    >
                        <div onClick={closeSelectColorBg}>
                            {color_bg_arr.map((item, ix) => (
                                <div
                                    className="SelectColorBg_item"
                                    key={`${ix}`}
                                >
                                    <SelectColorBgItem
                                        ix={ix}
                                        bg={item.bg}
                                        color={item.color}
                                        handleChangeColorBg={
                                            handleChangeColorBg
                                        }
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </CloseDiv>
        </div>
    );
}

export default SelectColorBg;

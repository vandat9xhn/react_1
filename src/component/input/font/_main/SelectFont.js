import React, { useState } from 'react';
import PropTypes from 'prop-types';
//
import CloseDiv from '../../../some_div/close_div/CloseDiv';
// 
import SelectFontItem from '../item/SelectFontItem';
// 
import './SelectFont.scss'

//
SelectFont.propTypes = {};

//
function SelectFont({ active_ix, font_arr, handleChangeFont }) {
    //
    const [is_show, setIsShow] = useState(false);

    //
    function handelToggle() {
        setIsShow(!is_show);
    }

    //
    function handleClose() {
        is_show && setIsShow(false);
    }

    //
    function onChangeFont(new_ix) {
        handleClose();
        active_ix != new_ix && handleChangeFont(new_ix);
    }

    //
    return (
        <CloseDiv makeDivHidden={handleClose}>
            <div className="position-rel">
                <div className="SelectFont_current brs-8px">
                    <SelectFontItem
                        font_family={font_arr[active_ix]}
                        handleChangeFont={handelToggle}
                    />
                </div>

                <div
                    className={`SelectFont_list w-100per ${
                        is_show ? '' : 'display-none'
                    }`}
                >
                    <div className="SelectFont_list_contain bg-primary box-shadow-fb">
                        {font_arr.map((font_family, ix) => (
                            <div
                                key={`${ix}`}
                                className={`${
                                    ix == active_ix ? 'display-none' : ''
                                }`}
                            >
                                <SelectFontItem
                                    ix={ix}
                                    font_family={font_family}
                                    handleChangeFont={onChangeFont}
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </CloseDiv>
    );
}

export default SelectFont;

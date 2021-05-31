import React, { useRef } from 'react';
import PropTypes from 'prop-types';
//
import { useFocusBlur } from '../../../../_custom_hooks/useFocusBlur';
//
import InputSelectOption from '../option_item/InputSelectOption';
import InputSelected from '../selected_item/InputSelected';
//
import './InputSelect.scss';

//
InputSelect.propTypes = {};

//
function InputSelect(props) {
    //
    const {
        selected_item_arr,
        option_item_arr,
        value,
        placeholder,

        handleChangeInput,
        handleSelectOption,
        handleRemoveSelectedItem,
    } = props;

    //
    const ref_input = useRef(null);
    const ref_input_length = useRef(null);
    const width_input = useRef(80);
    
        //
        const { is_focus, setIsFocus, handleFocus, handleBlur } = useFocusBlur();

    //
    function focusInput() {
        ref_input.current.focus();
        setIsFocus(true);
    }

    //
    function onChange(e) {
        width_input.current = ref_input_length.current.offsetWidth;
        handleChangeInput(e);
    }

    //
    return (
        <div
            className={`position-rel ${
                is_focus || value || selected_item_arr.length
                    ? 'input-active'
                    : ''
            }`}
            onClick={focusInput}
        >
            <div
                className={`InputSelect_head padding-8px brs-5px ${
                    is_focus ? 'InputSelect_head-active' : ''
                }`}
            >
                <div>
                    {selected_item_arr.map((item, ix) => (
                        <div
                            key={`InputSelect_selected_${ix}`}
                            className="InputSelect_head-item inline-block"
                        >
                            <InputSelected
                                ix={ix}
                                item={item}
                                handleRemoveSelectedItem={
                                    handleRemoveSelectedItem
                                }
                            />
                        </div>
                    ))}

                    <div className="InputSelect_head-item inline-block">
                        <input
                            className="InputSelect_head-input"
                            style={{ width: width_input.current + 'px' }}
                            ref={ref_input}
                            type="text"
                            //
                            value={value}
                            onChange={onChange}
                            //
                            onFocus={handleFocus}
                            onBlur={handleBlur}
                        />
                    </div>
                </div>
            </div>

            <div
                className={`input-placeholder bg-primary ${
                    is_focus ? 'InputSelect_placeholder-active' : ''
                }`}
            >
                {placeholder}
            </div>

            <div className={`InputSelect_foot ${value ? '' : 'display-none'}`}>
                <div className="InputSelect_foot-contain box-shadow-1">
                    <ul className="list-none">
                        {option_item_arr.map((item, ix) => (
                            <li key={`InputSelect_option_${ix}`}>
                                <InputSelectOption
                                    ix={ix}
                                    item={item}
                                    handleSelectOption={handleSelectOption}
                                />
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

            {/* for width of input */}
            <div
                ref={ref_input_length}
                className="InputSelect_input_length width-fit-content"
            >
                <span className="padding-8px">{value}</span>
            </div>
        </div>
    );
}

export default InputSelect;

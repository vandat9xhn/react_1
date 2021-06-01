import React, { useRef } from 'react';
import PropTypes from 'prop-types';
//
import { useFocusBlur } from '../../../../_custom_hooks/useFocusBlur';
//
import CloseDiv from '../../../some_div/close_div/CloseDiv';
//
import InputSelectOptionList from '../option/_main/InputSelectOptionList';
import InputSelectedList from '../selected/_main/InputSelectedList';
//
import './InputSelect.scss';

//
InputSelect.propTypes = {
    selected_item_arr: PropTypes.array,
    option_item_arr: PropTypes.array,
    value: PropTypes.any,
    multiple: PropTypes.bool,
    placeholder: PropTypes.string,

    handleFocusInput: PropTypes.func,
    handleBlurInput: PropTypes.func,

    handleKeyDown: PropTypes.func,
    handleKeyUp: PropTypes.func,
    
    handleChangeInput: PropTypes.func,
    handleSelectOption: PropTypes.func,
    handleRemoveSelectedItem: PropTypes.func,

    ComponentSelectedList: PropTypes.func,
    ComponentOptionList: PropTypes.func,

    selected_props: PropTypes.object,
    option_props: PropTypes.object,
};

InputSelect.defaultProps = {
    multiple: true,
    placeholder: 'Write something',

    handleFocusInput: () => {},
    handleBlurInput: () => {},

    ComponentSelectedList: InputSelectedList,
    ComponentOptionList: InputSelectOptionList,

    selected_props: {},
    option_props: {},
};

//
function InputSelect(props) {
    //
    const {
        selected_item_arr,
        option_item_arr,
        value,
        multiple,
        placeholder,

        handleFocusInput,
        handleBlurInput,

        handleKeyDown,
        handleKeyUp,
        handleChangeInput,
        handleSelectOption,
        handleRemoveSelectedItem,

        ComponentSelectedList,
        ComponentOptionList,

        selected_props,
        option_props,
    } = props;

    //
    const ref_input = useRef(null);
    const ref_input_select = useRef(null);
    const ref_input_length = useRef(null);
    const width_input = useRef(80);

    //
    const { is_focus, setIsFocus, handleFocus, handleBlur } = useFocusBlur();

    //
    function onBlurInput() {
        if (is_focus) {
            handleBlur();
            handleBlurInput();
        }
    }

    //
    function focusInput(e) {
        ref_input.current.focus();
        if (!is_focus) {
            handleFocus();
            handleFocusInput();
        }
    }

    //
    function onChange(e) {
        width_input.current = ref_input_length.current.offsetWidth;
        handleChangeInput(e);
    }

    //
    return (
        <CloseDiv makeDivHidden={onBlurInput}>
            <div
                ref={ref_input_select}
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
                        <ComponentSelectedList
                            selected_item_arr={selected_item_arr}
                            handleRemoveSelectedItem={handleRemoveSelectedItem}
                            {...selected_props}
                        />

                        <div
                            className={`InputSelect_head-item ${
                                !multiple && selected_item_arr.length
                                    ? 'display-none'
                                    : 'inline-block'
                            }`}
                        >
                            <input
                                className="InputSelect_head-input"
                                style={{ width: width_input.current + 'px' }}
                                ref={ref_input}
                                type="text"
                                //
                                value={value}
                                onChange={onChange}
                                //
                                onKeyDown={handleKeyDown}
                                onKeyUp={handleKeyUp}
                                //
                                // onFocus={onFocusInput}
                                // onBlur={onBlurInput}
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

                <div className="InputSelect_foot">
                    <ComponentOptionList
                        option_item_arr={option_item_arr}
                        value={value}
                        handleSelectOption={handleSelectOption}
                        {...option_props}
                    />
                </div>

                {/* for width of input */}
                <div
                    ref={ref_input_length}
                    className="InputSelect_input_length width-fit-content"
                >
                    <span className="padding-8px">{value}</span>
                </div>
            </div>
        </CloseDiv>
    );
}

export default InputSelect;

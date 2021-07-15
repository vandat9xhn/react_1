import React from 'react';
import PropTypes from 'prop-types';
//
import { makeAutoHeight } from '../../../_some_function/makeAutoHeight';
//
import IconDiv from '../../some_div/icon_div/IconDiv';
import IconsAction from '../../../_icons_svg/icons_action/IconsAction';
//
import './InputText.scss';

//
InputText.propTypes = {
    // formik
    field: PropTypes.object,
    form: PropTypes.object,
    //
    is_textarea: PropTypes.bool,
    type: PropTypes.string,
    label: PropTypes.string,
    placeholder: PropTypes.string,
    dataList: PropTypes.array,
    help: PropTypes.string,
    max_length: PropTypes.number,
};

InputText.defaultProps = {
    is_textarea: false,
    dataList: [],
    type: 'text',
};

//
function InputText({
    field,
    form,

    is_textarea,
    type,
    label,
    placeholder,
    dataList,
    help,
    max_length,
}) {
    //
    const { name, onChange } = field;
    const { touched, errors } = form;
    const showError = touched[name] && errors[name];
    const dataListId = `list_${name}_${label}`;

    //
    function handleChange(e) {
        onChange(e);
        makeAutoHeight(e);
    }

    //
    return (
        <div className="InputText">
            <div>
                <label className="label-field">{label}</label>
            </div>

            <div>
                {is_textarea ? (
                    <textarea
                        className={`InputText_input InputText_textarea scroll-thin brs-5px ${
                            touched[name] && !errors[name]
                                ? 'InputText_valid'
                                : ''
                        } ${
                            touched[name] && !!errors[name]
                                ? 'InputText_invalid'
                                : ''
                        }`}
                        {...field}
                        onChange={handleChange}
                        placeholder={placeholder}
                        type={type}
                        maxLength={max_length}
                    />
                ) : (
                    <input
                        className={`InputText_input brs-5px ${
                            touched[name] && !errors[name]
                                ? 'InputText_valid'
                                : ''
                        } ${
                            touched[name] && !!errors[name]
                                ? 'InputText_invalid'
                                : ''
                        }`}
                        {...field}
                        placeholder={placeholder}
                        type={type}
                        list={dataListId}
                        maxLength={max_length}
                    />
                )}
            </div>

            <datalist id={dataListId}>
                {dataList.map((item, index) => (
                    <option key={`InputText_${index}`}>{item}</option>
                ))}
            </datalist>

            {help && (
                <div className="InputText_help help-text">
                    <IconDiv Icon={IconsAction} x={600}>
                        *{help}
                    </IconDiv>
                </div>
            )}

            {showError && (
                <div className="InputText_help_error error-field">
                    <IconDiv Icon={IconsAction} x={400} y={400}>
                        {errors[name]}
                    </IconDiv>
                </div>
            )}
        </div>
    );
}

export default InputText;

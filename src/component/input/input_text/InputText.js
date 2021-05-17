import React from 'react';
import PropTypes from 'prop-types';
// 
import IconDiv from '../../some_div/icon_div/IconDiv';
import IconsAction from '../../../_icons_svg/icons_action/IconsAction';
// 
import './InputText.scss';

InputText.propTypes = {
    // field form of formik
    field: PropTypes.object,
    form: PropTypes.object,
    // properties
    type: PropTypes.string,
    label: PropTypes.string,
    placeholder: PropTypes.string,
    dataList: PropTypes.array,
    help: PropTypes.string,
    max_length: PropTypes.number,
};

InputText.defaultProps = {
    dataList: [],
    type: 'text',
};

// 
function InputText(props) {
    const {
        field,
        form,

        type,
        label,
        placeholder,
        dataList,
        help,
        max_length,
    } = props;

    const { name } = field;
    const { touched, errors } = form;
    const showError = touched[name] && errors[name];
    const dataListId = `list_${name}_${label}`;

    //
    return (
        <div className="InputText">
            <div>
                <label className="label-field" htmlFor={name}>
                    {label}
                </label>
            </div>

            <div>
                <input
                    className={`InputText_input brs-5px ${
                        touched[name] && !errors[name] ? 'InputText_valid' : ''
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
            </div>

            {/* data list */}
            <datalist id={dataListId}>
                {dataList.map((item, index) => (
                    <option key={`InputText_${index}`}>{item}</option>
                ))}
            </datalist>

            {/* help */}
            {help && (
                <div className="help-text">
                    <IconDiv Icon={IconsAction} x={600}>
                        * {help}
                    </IconDiv>
                </div>
            )}

            {/* error */}
            {showError && (
                <div className="error-field">
                    <IconDiv Icon={IconsAction} x={400} y={400}>
                        {errors[name]}
                    </IconDiv>
                </div>
            )}
        </div>
    );
}

export default InputText;

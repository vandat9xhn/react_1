import React, { useState } from 'react';
import PropTypes from 'prop-types';
//
import IconsInput from '../../../../../_icons_svg/Icons_input/IconsInput';
// 
import InputFile from '../../../../../component/input/input_file/InputFile';
import ImgVidPreview from '../../../../../component/input_img_vid_preview/img_vid_preview/ImgVidPreview';
//
import './InputImage.scss';

//
InputImage.propTypes = {
    form: PropTypes.object,
    field: PropTypes.object,

    type: PropTypes.string,
    label: PropTypes.string,

    onImageChange: PropTypes.func,
};

InputImage.defaultProps = {
    type: 'file',
};

//
function InputImage({ form, field, type, label, handleImageChange }) {
    //
    const { name, value } = field;
    const { touched, errors } = form;
    const showError = touched[name] && errors[name];

    //
    const [urls, setUrls] = useState(value ? [{ url: value, type: name }] : []);

    /* -------------- IMAGE -------------*/

    //
    function onImageChange(event) {
        const files = event.target.files;
        //
        if (files.length) {
            const reader = new FileReader();
            reader.onload = () => {
                setUrls([{ url: reader.result, type: files[0].type }]);
                form.setFieldValue('image', reader.result);
            };
            reader.readAsDataURL(files[0]);
            handleImageChange(files[0]);
        }
    }

    //
    function handleDeleteAnItem() {
        setUrls([]);
        handleImageChange('');
        form.setFieldValue('image', '');
    }

    //
    return (
        <div className="InputImage">
            <div>
                <label className="label-field" htmlFor={name}>
                    {label}
                </label>
            </div>

            <div className="InputImage_file">
                <InputFile
                    width="2rem"
                    type={type}
                    {...field}
                    onChange={onImageChange}
                    accept="image/*"
                >
                    <IconsInput />
                </InputFile>
            </div>

            {showError && <div className="error-field">{showError}</div>}

            <div className="InputImage_preview">
                <ImgVidPreview
                    deleteAnItem={handleDeleteAnItem}
                    delete_in_pic={true}
                    urls={urls}
                />
            </div>
        </div>
    );
}

export default InputImage;

import React, { useState } from 'react';
import PropTypes from 'prop-types';
// 
import ImgVidPreview from '../../../../../component/input_img_vid_preview/img_vid_preview/ImgVidPreview';
import InputFile from '../../../../../component/input/input_file/InputFile';
import IconsInput from '../../../../../_icons_svg/Icons_input/IconsInput';
// 
import './InputImage.scss';

// 
InputImage.propTypes = {
    // from formik
    form: PropTypes.object,
    field: PropTypes.object,
    // type label
    type: PropTypes.string,
    label: PropTypes.string,
    // func image change
    onImageChange: PropTypes.func,
};

InputImage.defaultProps = {
    type: 'file',
};

//
function InputImage(props) {
    const { form, field, type, label, handleImageChange } = props;

    const { name, value } = field;
    const { touched, errors } = form;
    const showError = touched[name] && errors[name];
    
    //
    const [urls, setUrls] = useState(value ? [{ url: value, type: name}] : []);

/* ------------------- IMAGE ----------------------*/

    // on image change
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

    // delete image
    function handleDeleteAnItem(){
        setUrls([]);
        handleImageChange('');
        form.setFieldValue('image', '');
    };

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

            {/* error */}
            {showError && <div className="error-field">{showError}</div>}

            {/* image preview */}
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

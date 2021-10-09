import React, { useRef } from 'react';
import PropTypes from 'prop-types';
//
import { loadFile } from '../../../_some_function/loadFile';
//
import './InputFile.scss';

//
InputFile.propTypes = {
    name: PropTypes.string,
    type: PropTypes.string,
    onChange: PropTypes.func,
    onBlur: PropTypes.func,

    file_multiple: PropTypes.bool,
    accept: PropTypes.string,
    title: PropTypes.string,

    should_reset: PropTypes.bool,
    face_circle: PropTypes.bool,
    children: PropTypes.oneOfType([PropTypes.element, PropTypes.string]),
};

InputFile.defaultProps = {
    type: 'file',
    file_multiple: false,
    title: 'Choose files',
    children: 'Choose File',

    face_circle: true,
    should_reset: true,
};

//
function InputFile({
    name,
    type,
    file_multiple,
    accept,
    title,

    children,

    face_circle,
    should_reset,
    vid_pic_key,

    handleNoFiles = () => {},
    handleStartLoadFile = () => {},
    handleChange = () => {},
    onBlur,
}) {
    //
    const refInput = useRef(null);

    //
    function onClick() {
        refInput.current.click();
    }

    //
    async function onChange(event) {
        const new_files = event.target.files;

        if (new_files.length) {
            handleStartLoadFile();

            const data_files = await loadFile(new_files, vid_pic_key);

            handleChange(data_files);
            should_reset && (event.target.value = '');
        } else {
            handleNoFiles();
        }
    }

    //

    return (
        <div
            className={`InputFile pos-rel ${
                face_circle ? 'InputFile-circle' : 'InputFile-auto'
            }`}
        >
            <input
                ref={refInput}
                className="display-none"
                name={name}
                type={type}
                onChange={onChange}
                onBlur={onBlur}
                multiple={file_multiple}
                accept={accept}
                title={title}
                hidden
            />

            {face_circle ? (
                <div className="InputFile_face pos-abs-100">
                    <div
                        className="InputFile_face_contain wh-100 brs-50"
                        onClick={onClick}
                    >
                        <div className="wh-100 display-flex justify-content-center align-items-center">
                            {children}
                        </div>
                    </div>
                </div>
            ) : (
                <div onClick={onClick}>{children}</div>
            )}
        </div>
    );
}

export default InputFile;

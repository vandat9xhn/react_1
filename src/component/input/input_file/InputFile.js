import React, { useRef } from 'react';
import PropTypes from 'prop-types';
//
import './InputFile.scss';
import { loadFile } from '../../../_some_function/loadFile';

//
InputFile.propTypes = {
    //
    name: PropTypes.string,
    type: PropTypes.string,
    onChange: PropTypes.func,
    onBlur: PropTypes.func,
    //
    file_multiple: PropTypes.bool,
    accept: PropTypes.string,
    title: PropTypes.string,
    // children
    children: PropTypes.oneOfType([PropTypes.element, PropTypes.string]),
    should_reset: PropTypes.bool,
};

InputFile.defaultProps = {
    type: 'file',
    file_multiple: false,
    title: 'Choose files',
    children: 'Choose File',
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
        <div className="InputFile position-rel">
            <div className="InputFile_input display-none">
                <input
                    ref={refInput}
                    name={name}
                    type={type}
                    onChange={onChange}
                    onBlur={onBlur}
                    multiple={file_multiple}
                    accept={accept}
                    title={title}
                    hidden
                />
            </div>

            <div className="InputFile_face wh-100">
                <div
                    className="InputFile_face-contain wh-100 brs-50"
                    onClick={onClick}
                >
                    <div className="wh-100 display-flex justify-content-center align-items-center">
                        {children}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default InputFile;

import React, { useRef } from 'react';
import PropTypes from 'prop-types';
// 
import './InputFile.scss';

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
function InputFile(props) {
    const {
        name,
        type,
        file_multiple,
        accept,
        title,
        should_reset,
        // 
        children,
        onBlur,
    } = props;
    
    //
    const refInput = useRef(null);

    //
    function onClick(){
        refInput.current.click();
    };
    
    //
    function onChange(event) {
        props.onChange(event);
        should_reset && setTimeout(() => {
            event.target.value = '';
        }, 500);
    }

    //

    return (
        <div className="InputFile">
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
                />
            </div>

            <div className="InputFile_face brs-5px" onClick={onClick}>
                {children}
            </div>
        </div>
    );
}

export default InputFile;

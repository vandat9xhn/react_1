import React from 'react';
import PropTypes from 'prop-types';

import './SuccessDiv.css';
//
function SuccessDiv(props){
    return (
        <div className={props.is_show ? 'SuccessDiv' : 'display-none'}>
            <div>
                {props.children}
            </div>
        </div>
    );
}


SuccessDiv.propTypes = {
    is_show: PropTypes.bool,
    children: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.element,
    ]),
};

export default SuccessDiv;
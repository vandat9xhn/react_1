import React from 'react';
import PropTypes from 'prop-types';
//
import './LogoBank.scss';

//
LogoBank.propTypes = {
    logo: PropTypes.string,
    height: PropTypes.string,
    width_side: PropTypes.string,
};

//
function LogoBank({ logo, height, width_side }) {
    //
    return (
        <div
            className="LogoBank bg-primary"
            style={{
                backgroundImage: `url(${logo})`,
                height: `${height}`,
            }}
        >
            <div
                className="LogoBank_side pos-abs right-100per top-0 h-100per border-solid"
                style={{
                    borderWidth: `${height} 0 0 ${width_side}`,
                }}
            ></div>
        </div>
    );
}

export default LogoBank;

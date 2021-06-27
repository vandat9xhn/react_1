import React from 'react';
import PropTypes from 'prop-types';
//
import { useCloseScreen } from '../../../_hooks/useCloseScreen';
//
import './ScreenBlurBodyNotHidden.scss';

//
ScreenBlurBodyNotHidden.propTypes = {
    closeScreen: PropTypes.func,
    children: PropTypes.element,
};

ScreenBlurBodyNotHidden.defaultProps = {
    children: <div></div>,
};

//
function ScreenBlurBodyNotHidden({ closeScreen, children }) {
    //
    useCloseScreen(closeScreen);

    //
    return (
        <div className="ScreenBlurBodyNotHidden screen-blur">
            <div className="form-fixed">
                <div className="ScreenBlurBodyNotHidden_contain brs-5px-md">
                    {children}
                </div>
            </div>
        </div>
    );
}

export default ScreenBlurBodyNotHidden;

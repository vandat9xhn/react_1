import React from 'react';
import PropTypes from 'prop-types';
//
import { useMakeBodyHidden } from '../../../_hooks/useMakeBodyHidden';
// 
import ScreenBlurBodyNotHidden from './ScreenBlurBodyNotHidden';
// 
import './ScreenBlur.scss';

//
ScreenBlur.propTypes = {
    // open_screen: PropTypes.bool,
    closeScreen: PropTypes.func,
    children: PropTypes.element,
};

ScreenBlur.defaultProps = {
    // open_screen: false,
    children: <div></div>,
};

//
function ScreenBlur({ closeScreen, children }) {
    //
    useMakeBodyHidden();

    //
    return (
        <ScreenBlurBodyNotHidden
            closeScreen={closeScreen}
            children={children}
        />
    );
}

export default ScreenBlur;

import React from 'react';
import PropTypes from 'prop-types';
//
import { useCloseScreen } from '../../../_custom_hooks/useCloseScreen';
import { useMakeBodyHidden } from '../../../_custom_hooks/useMakeBodyHidden';
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
function ScreenBlur(props) {
    const { closeScreen } = props;

    //
    useCloseScreen(closeScreen);
    useMakeBodyHidden()

    //
    return (
        <div className="ScreenBlur screen-blur">
            <div className="form-fixed">
                <div className="ScreenBlur_contain brs-5px">
                    {props.children}
                </div>
            </div>
        </div>
    );
}

export default ScreenBlur;

import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
//
import './ScreenBlur.scss';

//
ScreenBlur.propTypes = {
    open_screen: PropTypes.bool,
    closeScreen: PropTypes.func,
    children: PropTypes.element,
};

ScreenBlur.defaultProps = {
    open_screen: false,
    children: <div></div>,
};

//
function ScreenBlur(props) {
    const { open_screen, closeScreen } = props;
    //
    const is_body_hidden = useRef(false);

    //
    useEffect(() => {
        const body = document.getElementsByTagName('BODY')[0];

        if (open_screen) {
            if (body.style.overflow != 'hidden') {
                body.style.overflow = 'hidden'
                is_body_hidden.current = true
            }
        } else {
            if (is_body_hidden.current) {
                body.style.overflow = 'auto';
                is_body_hidden.current = false;
            }
        }
    }, [open_screen]);

    useEffect(() => {
        window.addEventListener('popstate', closeScreen)

        return () => {
            window.removeEventListener('popstate', closeScreen)
        }
    }, [])

    //
    return (
        <div
            className={open_screen ? 'ScreenBlur screen-blur' : 'display-none'}
        >
            <div className="form-fixed">
                <div className="ScreenBlur_contain brs-5px">
                    {open_screen && props.children}
                </div>
            </div>
        </div>
    );
}

export default ScreenBlur;

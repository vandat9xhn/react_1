import React from 'react';
import PropTypes from 'prop-types';
//
import { useMakeBodyHidden } from '../../../../../_hooks/useMakeBodyHidden';
//
import ScreenBlurFetching from '../../../../_screen_once/fetching/ScreenBlurFetching';
//
import './ScreenBlur.scss';

//
ScreenBlur.propTypes = {
    closeScreen: PropTypes.func,
    children: PropTypes.element,

    use_body_hidden: PropTypes.bool,
    screen_center: PropTypes.bool,
    waiting: PropTypes.bool,
    use_scale: PropTypes.bool,
    FetchingComponent: PropTypes.func,
};

ScreenBlur.defaultProps = {
    use_body_hidden: true,
    screen_center: false,
    waiting: false,
    use_scale: false,
};

//
function ScreenBlur({
    closeScreen,
    children,

    use_body_hidden,
    screen_center,
    waiting,
    use_scale,
    FetchingComponent,
}) {
    //
    useMakeBodyHidden({ use_body_hidden: use_body_hidden });

    //
    return (
        <div
            className={`ScreenBlur ${
                screen_center ? 'ScreenBlur_center display-flex-center' : ''
            }`}
        >
            <div className={`${waiting ? 'width-0 height-0' : 'App_Form'}`}>
                <div
                    className={`ScreenBlur_contain brs-5px-md box-shadow-fb ${
                        waiting ? 'ScreenBlur_contain-waiting' : ''
                    } ${use_scale ? 'ScreenBlur_contain-scale' : ''}`}
                >
                    {children}
                </div>
            </div>

            <div
                className={`ScreenBlur_waiting pos-fixed-100 ${
                    waiting ? '' : 'display-none'
                }`}
            >
                <ScreenBlurFetching FetchingComponent={FetchingComponent} />
            </div>
        </div>
    );
}

export default ScreenBlur;
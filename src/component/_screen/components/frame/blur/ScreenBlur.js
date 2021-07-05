import React from 'react';
import PropTypes from 'prop-types';
//
import { useMakeBodyHidden } from '../../../../../_hooks/useMakeBodyHidden';
import { useCloseScreen } from '../../../../../_hooks/useCloseScreen';
//
import CircleLoading from '../../../../waiting/circle_loading/CircleLoading';
// 
import './ScreenBlur.scss';

//
ScreenBlur.propTypes = {
    closeScreen: PropTypes.func,
    children: PropTypes.element,

    screen_center: PropTypes.bool,
    waiting: PropTypes.bool,
    use_scale: PropTypes.bool,
    FetchingComponent: PropTypes.func,
};

ScreenBlur.defaultProps = {
    screen_center: false,
    waiting: false,
    use_scale: false,
    FetchingComponent: CircleLoading,
};

//
function ScreenBlur({
    closeScreen,
    children,

    screen_center,
    waiting,
    use_scale,
    FetchingComponent,
}) {
    //
    useMakeBodyHidden();
    useCloseScreen(closeScreen);

    //
    return (
        <div
            className={`ScreenBlur bg-through ${
                screen_center || waiting
                    ? 'ScreenBlur_center display-flex-center'
                    : ''
            }`}
        >
            <div className="App_Form">
                <div
                    className={`ScreenBlur_contain brs-5px-md ${
                        waiting ? 'ScreenBlur_contain-waiting' : ''
                    } ${use_scale ? 'ScreenBlur_contain-scale' : ''}`}
                >
                    {children}
                </div>

                <div className="display-flex-center">
                    <FetchingComponent is_fetching={waiting} />
                </div>
            </div>
        </div>
    );
}

export default ScreenBlur;

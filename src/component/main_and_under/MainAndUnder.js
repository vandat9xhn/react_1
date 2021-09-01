import React from 'react';
import PropTypes from 'prop-types';
// 
import './MainAndUnder.scss';

//
MainAndUnder.propTypes = {
    main_elm: PropTypes.element,
    under_elm: PropTypes.element,
    class_main: PropTypes.string,
    class_under: PropTypes.string,

    use_touch: PropTypes.bool,
    use_mouse: PropTypes.bool,

    trans_x: PropTypes.number,
    no_transition: PropTypes.bool,

    handleStart: PropTypes.func,
};

//
function MainAndUnder({
    main_elm,
    under_elm,
    class_main,
    class_under,

    use_touch,
    use_mouse,

    trans_x,
    no_transition,

    handleStart,
}) {
    //
    return (
        <div
            className="MainAndUnder pos-rel"
            onTouchStart={use_touch ? handleStart : undefined}
            onMouseMove={use_mouse ? handleStart : undefined}
        >
            <div className="MainAndUnder_row">
                <div
                    className={`MainAndUnder_main ${class_main} pos-rel z-index-lv1 ${
                        no_transition ? '' : 'MainAndUnder_main-trans'
                    }`}
                    style={{ transform: `translateX(${trans_x}px)` }}
                >
                    {main_elm}
                </div>

                <div className={`MainAndUnder_under pos-abs h-100per ${class_under}`}>
                    {under_elm}
                </div>
            </div>
        </div>
    );
}

export default MainAndUnder;

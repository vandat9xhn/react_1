import React from 'react';
import PropTypes from 'prop-types';
//
import './FlexDiv.scss';

//
FlexDiv.propTypes = {
    is_reverse: PropTypes.bool,
    space_between: PropTypes.bool,
    align_center: PropTypes.bool,

    ComponentLeft: PropTypes.element,
    ComponentRight: PropTypes.oneOfType([PropTypes.element, PropTypes.string]),
};

FlexDiv.defaultProps = {
    is_reverse: false,
    space_between: false,
    align_center: true,
};

//
function FlexDiv({
    ComponentLeft,
    ComponentRight,
    
    is_reverse,
    space_between,
    align_center,
}) {
    //
    return (
        <div className="FlexDiv">
            <div
                className={`FlexDiv_row display-flex ${
                    is_reverse ? 'row-reverse' : ''
                } ${space_between ? 'space-between' : ''} ${
                    align_center ? 'align-items-center' : ''
                }`}
            >
                <div
                    className={`FlexDiv_left ${
                        is_reverse ? 'FlexDiv_reverse' : ''
                    }`}
                >
                    {ComponentLeft}
                </div>

                <div className="FlexDiv_right">{ComponentRight}</div>
            </div>
        </div>
    );
}

export default FlexDiv;

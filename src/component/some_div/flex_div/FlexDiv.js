import React from 'react';
import PropTypes from 'prop-types';
//
import './FlexDiv.scss';

//
FlexDiv.propTypes = {
    is_reverse: PropTypes.bool,
    space_between: PropTypes.bool,
    ComponentLeft: PropTypes.element,
    ComponentRight: PropTypes.oneOfType([
        PropTypes.element, PropTypes.string,
    ]),
};

FlexDiv.defaultProps = {
    is_reverse: false,
    space_between: false,
};

//
function FlexDiv(props) {
    const { is_reverse, space_between, ComponentLeft, ComponentRight } = props;

    //
    return (
        <div className="FlexDiv">
            <div
                className={`FlexDiv_row display-flex align-items-center ${
                    is_reverse ? 'row-reverse' : ''
                } ${space_between ? 'space-between' : ''}`}
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

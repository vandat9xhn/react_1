import React, { Component } from 'react';
import PropTypes from 'prop-types';
//
import DivFix from '../_main/DivFix';
//
import './DivFixPeople.scss';

//
const initial_div_fix_state = {
    top: '100px',
    left: '50px',
    transform_x: 0,
    transform_y: 0,
    width: 0,

    open_div_fix: false,
    FixElement: <div></div>,
};

//
class DivFixPeople extends Component {
    state = {
        ...initial_div_fix_state,
    };

    //
    openDivFixPeople = ({
        top,
        left,
        transform_x,
        transform_y,
        width,

        FixElement,
    }) => {
        this.setState({
            top: top,
            left: left,
            transform_x: transform_x,
            transform_y: transform_y,
            width: width,

            open_div_fix: true,
            FixElement: FixElement,
        });
    };

    //
    closeDivFixPeople = () => {
        this.setState({
            ...initial_div_fix_state,
        });
    };

    //
    render() {
        //
        const {
            top,
            left,
            transform_x,
            transform_y,
            width,

            open_div_fix,
            FixElement,
        } = this.state;

        //
        const is_mobile = localStorage.is_mobile == 1;

        //
        if (is_mobile || !open_div_fix) {
            return <div></div>;
        }

        //
        return (
            <div className="DivFixPeople">
                <DivFix
                    top={top}
                    left={left}
                    transform_x={transform_x}
                    transform_y={transform_y}
                    position_class="position-abs"
                    closeDivFix={this.closeDivFixPeople}
                >
                    <div
                        className="DivFixPeople_contain"
                        style={{ width: `${width}px` }}
                    >
                        {FixElement}
                    </div>
                </DivFix>
            </div>
        );
    }
}

DivFixPeople.propTypes = {};

export default DivFixPeople;

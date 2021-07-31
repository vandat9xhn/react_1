import React, { Component } from 'react';
import PropTypes from 'prop-types';
//
import { IS_MOBILE } from '../../../_constant/Constant';
//
import {
    funcHandleBeforeOpen,
    funcHandleScrollDiff,
} from '../__func/scroll_elm';
//
import DivFix from '../_main/DivFix';
//
import './DivFixPeople.scss';

//
const initial_div_fix_state = {
    scroll_elm: null,
    position_class: 'position-abs',

    top: '0',
    left: '0',
    right: 'auto',
    bottom: 'auto',

    transform_x: 0,
    transform_y: 0,
    scroll_x_diff: 0,
    scroll_y_diff: 0,

    width: 0,

    open_div_fix: false,
    FixElement: <div></div>,

    closing: false,
};

//
class DivFixPeople extends Component {
    state = {
        ...initial_div_fix_state,
    };

    // 
    componentDidMount() {
        this.closing_time_out = null
    }
    

    //
    handleScrollDiff = (e) => {
        funcHandleScrollDiff(this, e);
    };

    //
    handleBeforeOpen = (scroll_elm) => {
        funcHandleBeforeOpen(this, scroll_elm);
    };

    //
    openDivFixPeople = ({
        scroll_elm,
        position_class = 'absolute',

        top,
        left,
        right,
        bottom,

        transform_x,
        transform_y,

        width,

        FixElement,
    }) => {
        clearTimeout(this.closing_time_out)
        this.handleBeforeOpen(scroll_elm);

        this.setState({
            scroll_elm: scroll_elm,
            position_class: position_class,

            top: top,
            left: left,
            right: right,
            bottom: bottom,

            transform_x: transform_x,
            transform_y: transform_y,
            scroll_x_diff: 0,
            scroll_y_diff: 0,

            width: width,
            
            open_div_fix: true,
            FixElement: FixElement,
            
            closing: false,
        });
    };

    //
    closeDivFixPeople = () => {
        if (!this.state.open_div_fix) {
            return;
        }

        this.setState({
            closing: true,
        });

        this.closing_time_out = setTimeout(() => {
            this.setState({
                ...initial_div_fix_state,
            });
        }, 250);
    };

    //
    closeDivFix = () => {
        this.closeDivFixPeople();
    };

    //
    render() {
        //
        const {
            top,
            left,
            right,
            bottom,

            transform_x,
            transform_y,
            scroll_x_diff,
            scroll_y_diff,

            width,

            scroll_elm,
            position_class,

            open_div_fix,
            FixElement,

            closing,
        } = this.state;

        //
        if (IS_MOBILE || !open_div_fix) {
            return null;
        }

        //
        return (
            <div className="DivFixPeople">
                <DivFix
                    left={left}
                    top={top}
                    right={right}
                    bottom={bottom}
                    //
                    transform_x={transform_x}
                    transform_y={transform_y}
                    scroll_x_diff={scroll_x_diff}
                    scroll_y_diff={scroll_y_diff}
                    //
                    scroll_elm={scroll_elm}
                    position_class={`${position_class} position-abs`}
                    //
                    handleScrollDiff={this.handleScrollDiff}
                    closeDivFix={this.closeDivFix}
                >
                    <div
                        className={`DivFixPeople_contain ${
                            closing ? 'opacity-0' : 'opacity-1'
                        }`}
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

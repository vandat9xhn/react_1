import React, { Component } from 'react';
import PropTypes, { node } from 'prop-types';
//
import { IS_MOBILE } from '../../../_constant/Constant';
//
import ListTypeLike from '../../like/list_type_like/_main/ListTypeLike';
//
import {
    funcHandleBeforeOpen,
    funcHandleScrollDiff,
} from '../__func/scroll_elm';
//
import DivFix from '../_main/DivFix';
//
import './DivFixLike.scss';

//
const initial_div_fix_state = {
    top: '0%',
    left: '0%',
    transform_x: 0,
    transform_y: 0,

    scroll_elm: null,
    scroll_x_diff: 0,
    scroll_y_diff: 0,

    icon_small: false,

    open_div_fix: false,
    onMouseLeave: () => {},
    onMouseEnter: () => {},
    chooseListTypeLike: () => {},
};

//
class DivFixLike extends Component {
    state = {
        ...initial_div_fix_state,
    };

    //
    handleScrollDiff = (e) => {
        funcHandleScrollDiff(this, e);
    };

    //
    handleBeforeOpen = (scroll_elm) => {
        funcHandleBeforeOpen(this, scroll_elm);
    };

    //
    openDivFixLike = ({
        top,
        left,
        transform_x,
        transform_y,

        scroll_elm,
        icon_small,

        onMouseLeave,
        onMouseEnter,
        chooseListTypeLike,
    }) => {
        this.handleBeforeOpen(scroll_elm);

        this.setState({
            top: top,
            left: left,
            transform_x: transform_x,
            transform_y: transform_y,

            icon_small: icon_small,

            scroll_elm: scroll_elm,
            scroll_x_diff: 0,
            scroll_y_diff: 0,

            open_div_fix: true,
            onMouseLeave: onMouseLeave,
            onMouseEnter: onMouseEnter,
            chooseListTypeLike: chooseListTypeLike,
        });
    };

    //
    closeDivFixLike = () => {
        this.state.open_div_fix &&
            this.setState({
                ...initial_div_fix_state,
            });
    };

    //
    closeDivFix = () => {
        this.closeDivFixLike();
    };

    //
    render() {
        //
        const {
            top,
            left,
            transform_x,
            transform_y,

            scroll_elm,
            scroll_x_diff,
            scroll_y_diff,
            icon_small,

            open_div_fix,
            onMouseLeave,
            onMouseEnter,
            chooseListTypeLike,
        } = this.state;

        //
        if (!open_div_fix) {
            return null;
        }

        //
        return (
            <div
                className={`DivFixLike ${
                    innerWidth <= 400 ? 'DivFixLike_fixed' : ''
                }`}
            >
                <DivFix
                    top={top}
                    left={left}
                    transform_x={transform_x}
                    transform_y={transform_y}
                    //
                    scroll_elm={scroll_elm}
                    scroll_x_diff={scroll_x_diff}
                    scroll_y_diff={scroll_y_diff}
                    //
                    position_class={`position-abs`}
                    //
                    handleScrollDiff={this.handleScrollDiff}
                    closeDivFix={this.closeDivFix}
                >
                    <div
                        className={`DivFixLike_like ${
                            icon_small ? 'DivFixeLike_small' : ''
                        }`}
                        onMouseEnter={IS_MOBILE ? undefined : onMouseEnter}
                        onMouseLeave={IS_MOBILE ? undefined : onMouseLeave}
                    >
                        <ListTypeLike
                            open_type_like={open_div_fix}
                            chooseListTypeLike={chooseListTypeLike}
                        />
                    </div>
                </DivFix>
            </div>
        );
    }
}

DivFixLike.propTypes = {};

export default DivFixLike;

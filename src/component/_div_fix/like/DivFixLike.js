import React, { Component } from 'react';
import PropTypes from 'prop-types';
//
import ListTypeLike from '../../like/list_type_like/_main/ListTypeLike';
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
    openDivFixLike = ({
        top,
        left,
        transform_x,
        transform_y,

        icon_small,

        onMouseLeave,
        onMouseEnter,
        chooseListTypeLike,
    }) => {
        this.setState({
            top: top,
            left: left,
            transform_x: transform_x,
            transform_y: transform_y,
            icon_small: icon_small,

            open_div_fix: true,
            onMouseLeave: onMouseLeave,
            onMouseEnter: onMouseEnter,
            chooseListTypeLike: chooseListTypeLike,
        });
    };

    //
    closeDivFixLike = () => {
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
            icon_small,

            open_div_fix,
            onMouseLeave,
            onMouseEnter,
            chooseListTypeLike,
        } = this.state;

        //
        const is_mobile = localStorage.is_mobile == 1;

        //
        if (!open_div_fix) {
            return <div></div>;
        }

        //
        return (
            <div
                className={`DivFixLike ${is_mobile ? 'DivFixLike_fixed' : ''}`}
            >
                <DivFix
                    top={top}
                    left={left}
                    transform_x={transform_x}
                    transform_y={transform_y}
                    position_class="position-abs"
                    closeDivFix={this.closeDivFixLike}
                >
                    <div
                        className={`DivFixLike_like ${
                            icon_small ? 'DivFixeLike_small' : ''
                        }`}
                        onMouseEnter={is_mobile ? undefined : onMouseEnter}
                        onMouseLeave={is_mobile ? undefined : onMouseLeave}
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

import React, { Component } from 'react';
import PropTypes from 'prop-types';
//
import DivFix from '../_main/DivFix';
//
import './DivFixAction.scss';

//
const initial_div_fix_state = {
    top: '100%',
    bottom: 'auto',
    left: '0',
    right: 'auto',
    transform_x: 0,
    transform_y: 0,

    open_div_fix: false,
    ref_action_elm: { current: null },
    FixComponent: <div></div>,
};

//
class DivFixAction extends Component {
    state = {
        ...initial_div_fix_state,
    };

    //
    refFixElm = (elm) => {
        if (elm != null) {
            this.ref_fix_elm = elm;
        }
    };

    //
    componentDidMount() {
        window.addEventListener('click', this.handleWindowClick);
    }

    //
    componentWillUnmount() {
        window.removeEventListener('click', this.handleWindowClick);
    }

    //
    handleWindowClick = (e) => {
        if (!this.state.open_div_fix) {
            return;
        }

        if (this.state.ref_action_elm.current.contains(e.target)) {
            return;
        }

        if (this.ref_fix_elm.contains(e.target)) {
            return;
        }

        this.closeDivFixAction();
    };

    //
    openDivFixAction = ({
        top,
        bottom,
        left,
        right,
        transform_x,
        transform_y,

        ref_action_elm,
        FixComponent,
    }) => {
        if (this.state.open_div_fix) {
            if (ref_action_elm == this.state.ref_action_elm) {
                this.closeDivFixAction();
                
                return;
            }
        }

        this.setState({
            top: top,
            bottom: bottom,
            left: left,
            right: right,
            transform_x: transform_x,
            transform_y: transform_y,

            open_div_fix: true,
            ref_action_elm: ref_action_elm,
            FixComponent: FixComponent,
        });
    };

    //
    closeDivFixAction = () => {
        this.setState({
            ...initial_div_fix_state,
        });
    };

    //
    render() {
        //
        const {
            top,
            bottom,
            left,
            right,
            transform_x,
            transform_y,

            open_div_fix,
            FixComponent,
        } = this.state;

        //
        const is_mobile = window.innerWidth <= 400;

        // console.log(this.state);

        //
        return (
            open_div_fix && (
                <div
                    ref={this.refFixElm}
                    className={`DivFixAction ${
                        is_mobile ? 'DivFixAction_fixed' : ''
                    }`}
                >
                    <DivFix
                        top={top}
                        bottom={bottom}
                        left={left}
                        right={right}
                        transform_x={transform_x}
                        transform_y={transform_y}
                        position_class="position-abs"
                        closeDivFix={this.closeDivFixAction}
                        is_mobile={is_mobile}
                    >
                        <div className="DivFixAction_contain bg-primary box-shadow-action brs-5px">
                            {FixComponent}
                        </div>
                    </DivFix>
                </div>
            )
        );
    }
}

DivFixAction.propTypes = {};

export default DivFixAction;

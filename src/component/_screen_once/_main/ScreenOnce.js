import React, { Component } from 'react';
import PropTypes from 'prop-types';

//
class ScreenOnce extends Component {
    state = {
        ScreenOneComponent: <div></div>,
        open_screen: false,
    };

    //
    openScreenOnce = ({ ScreenOneComponent = <div></div> }) => {
        this.setState({
            ScreenOneComponent: ScreenOneComponent,
            open_screen: true,
        });
    };

    //
    closeScreenOnce = () => {
        this.setState({
            ScreenOneComponent: <div></div>,
            open_screen: false,
        });
    };

    //
    render() {
        //
        const { ScreenOneComponent, open_screen } = this.state;

        if (!open_screen) {
            return <div></div>;
        }

        //
        return (
            <div className="ScreenOnce_fixed pos-fixed-100 z-index-lv5">
                {ScreenOneComponent}
            </div>
        );
    }
}

ScreenOnce.propTypes = {};

export default ScreenOnce;

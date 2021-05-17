import React, { Component } from 'react';
import PropTypes from 'prop-types';
//
import ScreenBlur from '../_main/ScreenBlur';
import IconsArrow from '../../../_icons_svg/icons_arrow/IconsArrow';
//
import './ScreenConfirm.scss';
import ScreenBlurHead from '../_component/head/ScreenBlurHead';
import ScreenBlurFootYesNo from '../_component/foot_yes_no/ScreenBlurFootYesNo';

//
class ScreenConfirm extends Component {
    state = {
        open_confirm: false,
        title: '',
        notification: '',
        handleConfirm: () => {},
    };

    //
    openScreenConfirm = (title, notification, handleConfirm) => {
        this.setState({
            open_confirm: true,
            title: title,
            notification: notification,
            handleConfirm: handleConfirm,
        });
    };
    //
    closeScreenConfirm = () => {
        this.setState({
            open_confirm: false,
            title: '',
            notification: '',
            handleConfirm: () => {},
        });
    };

    //
    onConfirm = () => {
        this.state.handleConfirm();
        this.closeScreenConfirm();
    };

    //
    render() {
        //
        const { open_confirm, title, notification } = this.state;

        //
        return (
            <ScreenBlur open_screen={open_confirm}>
                <div className="ScreenConfirm_contain">
                    <div className="ScreenConfirm_head">
                        <ScreenBlurHead
                            title={title}
                            closeScreenBlur={this.closeScreenConfirm}
                        />
                    </div>

                    <div>
                        <div className="ScreenConfirm_body">{notification}</div>
                    </div>

                    <div className="ScreenConfirm_foot">
                        <ScreenBlurFootYesNo
                            handleConfirm={this.onConfirm}
                            closeScreenBlur={this.closeScreenConfirm}
                        />
                    </div>
                </div>
            </ScreenBlur>
        );
    }
}

ScreenConfirm.propTypes = {};

export default ScreenConfirm;

import React, { Component } from 'react';
import PropTypes from 'prop-types';
//
import ScreenBlur from '../_main/ScreenBlur';
import ScreenBlurHead from '../_component/head/ScreenBlurHead';
import ScreenBlurFootYesNo from '../_component/foot_yes_no/ScreenBlurFootYesNo';
//
import './ScreenConfirm.scss';

//
class ScreenConfirm extends Component {
    state = {
        open_confirm: false,
        title: '',
        notification: '' || <div></div>,
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
        const { handleConfirm } = this.state;
        handleConfirm();
        this.closeScreenConfirm();
    };

    //
    render() {
        //
        const { open_confirm, title, notification } = this.state;

        //
        return (
            open_confirm && (
                <ScreenBlur
                    open_screen={open_confirm}
                    closeScreen={this.closeScreenConfirm}
                >
                    <div className="ScreenConfirm_contain">
                        <div className="ScreenConfirm_head">
                            <ScreenBlurHead
                                title={title}
                                closeScreenBlur={this.closeScreenConfirm}
                            />
                        </div>

                        <div>
                            <div className="ScreenConfirm_body">
                                {notification}
                            </div>
                        </div>

                        <div className="ScreenConfirm_foot">
                            <ScreenBlurFootYesNo
                                handleConfirm={this.onConfirm}
                                closeScreenBlur={this.closeScreenConfirm}
                            />
                        </div>
                    </div>
                </ScreenBlur>
            )
        );
    }
}

ScreenConfirm.propTypes = {};

export default ScreenConfirm;

import React, { Component } from 'react';
import PropTypes from 'prop-types';
//
import ScreenBlur from '../../../_screen_blur/_main/ScreenBlur';
import ScreenBlurHead from '../../../_screen_blur/_component/head/ScreenBlurHead';

//
class ScreenUpdate extends Component {
    state = {
        open_update: false,
        title: '',
        UpdateComponent: () => <div></div>,
        data_update: {},
    };

    //
    handleAction = (data_state, callback) => {
        setTimeout(() => {
            console.log(data_state);
            callback();
        }, 1000);
    };

    //
    openScreenUpdate = (title, UpdateComponent, data_update) => {
        this.setState({
            open_update: true,
            title: title,
            UpdateComponent: UpdateComponent,
            data_update: data_update,
        });
    };

    //
    closeScreenUpdate = () => {
        this.setState({
            open_update: false,
            title: '',
            UpdateComponent: () => <div></div>,
            data_update: {},
        });
    };

    //
    render() {
        const { open_update, title, UpdateComponent, data_update } = this.state;

        //
        return (
            <ScreenBlur open_screen={open_update}>
                <div>
                    <ScreenBlurHead
                        title={title}
                        closeScreenBlur={this.closeScreenUpdate}
                    />

                    <div>
                        <UpdateComponent {...data_update} />
                    </div>
                </div>
            </ScreenBlur>
        );
    }
}

ScreenUpdate.propTypes = {};

export default ScreenUpdate;

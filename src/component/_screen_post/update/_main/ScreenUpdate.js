import React, { Component } from 'react';
import PropTypes from 'prop-types';
//
import ScreenBlur from '../../../_screen_blur/_main/ScreenBlur';
import ScreenBlurHead from '../../../_screen_blur/_component/head/ScreenBlurHead';

//
class ScreenUpdate extends Component {
    state = {
        open_screen: false,
        title: '',
        UpdateComponent: () => <div></div>,
        data_update: {},
    };

    //
    componentDidMount() {
        this.has_change = false;
    }

    //
    openScreenUpdate = (title, UpdateComponent, data_update) => {
        this.setState({
            open_screen: true,
            title: title,
            UpdateComponent: UpdateComponent,
            data_update: data_update,
        });
    };

    //
    closeScreenUpdate = (force_close = false) => {
        if (this.has_change && !force_close) {
            if (!confirm('Do you want to close this?\nAny thing changed will be lost!')) {
                return;
            }
        }

        this.setState({
            open_screen: false,
            title: '',
            UpdateComponent: () => <div></div>,
            data_update: {},
        });
    };

    //
    hasChangeScreenUpdate = (new_has_change) => {
        this.has_change != new_has_change && (this.has_change = new_has_change);
    };

    //
    render() {
        const { open_screen, title, UpdateComponent, data_update } = this.state;

        //
        return (
            open_screen && (
                <ScreenBlur
                    // open_screen={open_screen}
                    closeScreen={this.closeScreenUpdate}
                >
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
            )
        );
    }
}

ScreenUpdate.propTypes = {};

export default ScreenUpdate;

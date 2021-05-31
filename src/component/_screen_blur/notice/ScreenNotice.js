import React, { Component } from 'react';
import PropTypes from 'prop-types';
//
import NoticeDiv from '../../some_div/notice_div/NoticeDiv';

//
class ScreenNotice extends Component {
    state = {
        open_screen: false,
        ComponentNotice: <div></div>,
    };

    //
    openScreenNotice = (ComponentNotice) => {
        this.setState({
            open_screen: true,
            ComponentNotice: ComponentNotice,
        });
    };

    //
    closeScreenNotice = () => {
        this.setState({
            open_screen: false,
            ComponentNotice: <div></div>,
        });
    };

    //
    render() {
        const { open_screen, ComponentNotice } = this.state;

        //
        return open_screen && <NoticeDiv>{ComponentNotice}</NoticeDiv>;
    }
}

//
ScreenNotice.propTypes = {};

export default ScreenNotice;

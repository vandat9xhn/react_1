import React, { Component } from 'react';
import PropTypes from 'prop-types';
//
import ScreenFixed from '../../_screen_fixed/_main/ScreenFixed';
import VidPics from '../vid_pics/VidPics';

//
class ZoomVidPics extends Component {
    state = {
        urls: [],
        current: 0,
        open_zoom: false,
    };

    componentDidMount() {
        this.is_body_hidden = false
    }

    //
    openZoomVidPics = (urls = [], current = 0) => {
        this.is_body_hidden = document.getElementsByTagName('BODY')[0].style.overflow == 'hidden'
        !this.is_body_hidden && document
            .getElementsByTagName('BODY')[0]
            .style.setProperty('overflow-y', 'hidden');
        //
        this.setState({
            open_zoom: true,
            urls: urls,
            current: current,
        });
    };

    //
    closeZoomVidPics = () => {
        !this.is_body_hidden && document
            .getElementsByTagName('BODY')[0]
            .style.setProperty('overflow-y', 'auto');
        this.setState({
            open_zoom: false,
            urls: [],
            current: 0,
        });
    };

    //
    changeCurrent = (new_current) => {
        this.setState({
            current: new_current,
        })
    }


    //
    render() {
        const { urls, current, open_zoom } = this.state;
        //
        if (!open_zoom) {
            return <div></div>;
        }
        //
        return (
            <ScreenFixed
                url={urls[current].url}
                open_screen={open_zoom}
                closeScreenFixed={this.closeZoomVidPics}
            >
                <VidPics
                    urls={urls}
                    current={current}
                    changeCurrent={this.changeCurrent}
                />
            </ScreenFixed>
        );
    }
}

ZoomVidPics.propTypes = {};

export default ZoomVidPics;

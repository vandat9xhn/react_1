import React, { Component } from 'react';
import PropTypes from 'prop-types';
//
import './NatureDropMain.scss';
//
import SnowDrop from '../snow/SnowDrop';
import FlowerDrop from '../flower/FlowerDrop';

//
const NatureDropObj = {
    '': '',
    snow: <SnowDrop />,
    flower: <FlowerDrop />,
};

//
class NatureDropMain extends Component {
    state = {
        which_nature: '',
    };

    //
    toggleSnowFlower = (new_which_nature) => {
        this.setState({
            which_nature:
                new_which_nature == this.state.which_nature
                    ? ''
                    : new_which_nature,
        });
    };

    //
    render() {
        //
        return NatureDropObj[this.state.which_nature];
    }
}

NatureDropMain.propTypes = {};

export default NatureDropMain;

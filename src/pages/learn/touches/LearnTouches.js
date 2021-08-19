import React, { useState } from 'react';
import PropTypes from 'prop-types';
//
import { use2FingersResize } from '../../../_hooks/use2FingersResize';
//
import './LearnTouches.scss';

//
LearnTouches.propTypes = {};

//
function LearnTouches(props) {
    //
    const [state_obj, setStateObj] = useState({
        scale: 1,
        client_change: 0,
        client_x_0: 0,
        client_x_1: 0,
        client_y_0: 0,
        client_y_1: 0,
    });

    const {
        scale,
        client_change,
        client_x_0,
        client_x_1,
        client_y_0,
        client_y_1,
    } = state_obj;

    //
    const { handleTouchStart } = use2FingersResize({
        handleResize: handleResize,
    });

    //
    function handleResize({
        client_change,
        client_x_0,
        client_x_1,
        client_y_0,
        client_y_1,
    }) {
        setStateObj((state_obj) => ({
            client_change: client_change,
            client_x_0: client_x_0,
            client_x_1: client_x_1,
            client_y_0: client_y_0,
            client_y_1: client_y_1,
            scale: state_obj.scale + client_change / 100,
        }));
    }

    //
    return (
        <div
            className="LearnTouches pos-rel bg-blue"
            onTouchStart={handleTouchStart}
        >
            <div
                className="pos-abs-center"
                style={{ transform: `scale(${scale})` }}
            >
                <div>Change: {client_change}</div>
                <div>x_0: {client_x_0}</div>
                <div>x_1: {client_x_1}</div>
                <div>y_0: {client_y_0}</div>
                <div>y_1: {client_y_1}</div>
            </div>
        </div>
    );
}

export default LearnTouches;

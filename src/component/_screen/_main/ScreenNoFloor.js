import React, { useLayoutEffect } from 'react';
import PropTypes from 'prop-types';
//
import { window_screen_scroll_arr } from './AppScreen';

//
ScreenNoFloor.propTypes = {};

/**
 * To make scrolling smoother
*/
function ScreenNoFloor(props) {
    //
    useLayoutEffect(() => {
        if (window_screen_scroll_arr.length == 0) {
            return;
        }

        const App = document.getElementsByClassName('App')[0];
        App.style.top = `0px`;
        App.style.left = `$0px`;

        window.scrollTo(
            window_screen_scroll_arr[0].x,
            window_screen_scroll_arr[0].y
        );

        window_screen_scroll_arr.splice(0, window_screen_scroll_arr.length);
    }, []);

    //
    return <div></div>;
}

export default ScreenNoFloor;

import React, { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
//
import { observeVirtualScroll } from '../../../_some_function/observeVirtualScroll';
//
import './LearnObserverScroll.scss';

//
LearnObserverScroll.propTypes = {};

//
function LearnObserverScroll(props) {
    //
    const [observer_state, setObserverState] = useState({
        is_intersecting: false,
        height: 0,
    });

    const { is_intersecting, height } = observer_state;

    //
    const ref_observer_elm = useRef(null);

    //
    useEffect(() => {
        observeVirtualScroll(ref_observer_elm.current, handleIntersecting);
    }, []);

    //
    function handleIntersecting(new_is_intersecting = false) {
        setObserverState({
            is_intersecting: new_is_intersecting,
            height: new_is_intersecting
                ? 0
                : ref_observer_elm.current.offsetHeight,
        });
    }

    //
    return (
        <div ref={ref_observer_elm}>
            <div style={{ height: `${height}px` }}></div>

            <div
                className={`LearnObserverScroll_contain ${
                    is_intersecting ? '' : 'display-none'
                }`}
            >
                <strong>Observer Scroll</strong>
            </div>
        </div>
    );
}

export default LearnObserverScroll;

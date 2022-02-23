import React, { useRef, useState } from 'react';
import PropTypes from 'prop-types';
//
import { useObserverVirtualScroll } from '../../_hooks/useObserverVirtualScroll';

//
VirtualScroll.propTypes = {
    ref_root: PropTypes.object,
    children: PropTypes.element,
    rootMargin_y: PropTypes.number,
    extra_height: PropTypes.string,
};

VirtualScroll.defaultProps = {
    extra_height: '0px',
    rootMargin_y: 500,
};

//
function VirtualScroll({ children, ref_root, rootMargin_y, extra_height }) {
    //
    const [state_obj, setStateObj] = useState({
        display: 'block',
        height: 'auto',
    });

    const { display, height } = state_obj;

    //
    const ref_virtual_elm = useRef(null);
    const ref_contain_elm = useRef(null);

    //
    useObserverVirtualScroll({
        ref_observer_elm: ref_virtual_elm,
        ref_contain_elm: ref_contain_elm,
        ref_root: ref_root,
        rootMargin_y: rootMargin_y,
        has_callback: true,
        callback: handleVirtualScroll,
    });

    //
    function handleVirtualScroll(height, display) {
        setStateObj({
            ...state_obj,
            display: display,
            height: height,
        });
    }

    //
    return (
        <div
            className="VirtualScroll"
            ref={ref_virtual_elm}
            style={{
                height:
                    height == 'auto'
                        ? undefined
                        : `calc(${height} + ${extra_height})`,
            }}
        >
            <div
                className={`VirtualScroll_contain ${
                    display == 'block' ? '' : 'display-none'
                }`}
                ref={ref_contain_elm}
            >
                {children}
            </div>
        </div>
    );
}

export default VirtualScroll;

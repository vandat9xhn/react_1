import React, { useRef } from 'react';
import PropTypes from 'prop-types';
//
import { useObserverVirtualScroll } from '../../_hooks/useObserverVirtualScroll';

//
VirtualScroll.propTypes = {
    children: PropTypes.element,
    rootMargin_y: PropTypes.number,
};

//
function VirtualScroll({ children, rootMargin_y }) {
    //
    const ref_virtual_elm = useRef(null);
    const ref_contain_elm = useRef(null);

    //
    useObserverVirtualScroll(ref_virtual_elm, ref_contain_elm, rootMargin_y);

    //
    return (
        <div ref={ref_virtual_elm}>
            <div ref={ref_contain_elm}>{children}</div>
        </div>
    );
}

export default VirtualScroll;

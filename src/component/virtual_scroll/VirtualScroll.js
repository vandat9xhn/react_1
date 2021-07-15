import React, { useRef } from 'react';
import PropTypes from 'prop-types';
//
import { useObserverVirtualScroll } from '../../_hooks/useObserverVirtualScroll';

//
VirtualScroll.propTypes = {
    children: PropTypes.element,
};

//
function VirtualScroll({ children }) {
    //
    const ref_virtual_elm = useRef(null);
    const ref_contain_elm = useRef(null);

    //
    // const { height, is_intersecting } =
        useObserverVirtualScroll(ref_virtual_elm, ref_contain_elm);

    //
    return (
        <div>
            <div ref={ref_virtual_elm}>
                {/* <div style={{ height: `${height}px` }}></div>

                <div className={`${is_intersecting ? '' : 'display-none'}`}>
                    {children}
                </div> */}

                <div ref={ref_contain_elm}>
                    {children}
                </div>
            </div>
        </div>
    );
}

export default VirtualScroll;

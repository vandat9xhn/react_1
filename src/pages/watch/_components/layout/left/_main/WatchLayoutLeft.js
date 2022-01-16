import React, { useRef } from 'react';
import PropTypes from 'prop-types';
//
import WatchLayoutHead from '../head/WatchLayoutHead';
import WatchLayoutLeftNav from '../nav/WatchLayoutLeftNav';
import SeparateLineScrollToggle from '../../../../../../component/separate_line_scroll_toggle/SeparateLineScrollToggle';

//
WatchLayoutLeft.propTypes = {};

//
function WatchLayoutLeft(props) {
    //
    const ref_scroll_elm = useRef(null);

    //
    return (
        <div className="WatchLayoutLeft display-flex flex-col h-100per">
            <div>
                <WatchLayoutHead />
            </div>

            <div className="padding-x-8px">
                <SeparateLineScrollToggle ref_scroll_elm={ref_scroll_elm} />
            </div>

            <div
                ref={ref_scroll_elm}
                className="flex-grow-1 flex-basis-1rem overflow-y-auto scroll-thin"
            >
                <WatchLayoutLeftNav ref_scroll_elm={ref_scroll_elm} />
            </div>
        </div>
    );
}

export default WatchLayoutLeft;

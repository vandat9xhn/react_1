import React, { useRef, useState } from 'react';
import PropTypes from 'prop-types';
//
import { useSaveScroll } from '../../../_hooks/useSaveScroll';
//
import './LearnSaveScroll.scss';

//
LearnSaveScroll.propTypes = {};

//
function LearnSaveScroll(props) {
    //
    const [state_obj, setStateObj] = useState({
        is_show: true,
    });

    const { is_show } = state_obj;

    //
    const ref_scroll_elm = useRef(null);

    //
    // const { scroll_pos } = useSaveScroll({
    //     ref_elm: ref_scroll_elm,
    // });

    //
    function toggleDivSaveScroll(params) {
        setStateObj({
            ...state_obj,
            is_show: !is_show,
        });
    }

    //
    return (
        <div className="LearnSaveScroll">
            <div
                ref={ref_scroll_elm}
                className={`LearnSaveScroll_contain bg-green overflow-y-auto ${
                    is_show ? '' : 'display-none'
                }`}
            >
                <div className="LearnSaveScroll_child"></div>
            </div>
            <br />

            <div
                className="padding-8px cursor-pointer"
                onClick={toggleDivSaveScroll}
            >
                {is_show ? 'Hide Save Scroll' : 'Show Save Scroll'} :{' '}
                {/* {scroll_pos.current} */}
            </div>
        </div>
    );
}

export default LearnSaveScroll;

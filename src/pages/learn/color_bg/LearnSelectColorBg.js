import React, { useState } from 'react';
import PropTypes from 'prop-types';
import SelectColorBg from '../../../component/input/color/color_bg/_main/SelectColorBg';

//
LearnSelectColorBg.propTypes = {};

//
function LearnSelectColorBg(props) {
    //
    const color_bg_arr = [
        {
            color: 'text-primary',
            bg: 'bg-primary',
        },
        {
            color: 'color-react',
            bg: 'bg-green',
        },
        {
            color: 'text-secondary',
            bg: 'bg-active-fb',
        },
        {
            color: 'text-white',
            bg: 'bg-linear-45-success-tear',
        },
    ];

    //
    const [active_ix, setActiveIx] = useState(0);

    //
    function handleChangeColorBg(ix) {
        ix != active_ix && setActiveIx(ix);
    }

    //
    return (
        <div className="padding-8px">
            <SelectColorBg
                active_ix={active_ix}
                color_bg_arr={color_bg_arr}
                handleChangeColorBg={handleChangeColorBg}
            />
        </div>
    );
}

export default LearnSelectColorBg;

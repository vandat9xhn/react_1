import React, { useRef, useState } from 'react';
import PropTypes from 'prop-types';
//
import { useBool } from '../../../../../../_hooks/useBool';
//
import IconCaret from '../../../../../../_icons_svg/_icon_caret/IconCaret';
//
import CloseDivPcMb from '../../../../../../component/close_div_pc_mb/CloseDivPcMb';
import BtnActions from '../../../../../../component/button/actions/BtnActions';
//
import GPTpFilterContain from '../contain/GPTpFilterContain';

//
const FILTER_ARR = [{ title: 'All' }, { title: 'Pinned' }];

//
GroupPageTopicsFilter.propTypes = {};

//
function GroupPageTopicsFilter({}) {
    //
    const [filter_ix, setFilterIx] = useState(0);

    //
    const ref_btn = useRef(null);

    //
    const { is_true, setIsTrue, toggleBool } = useBool();

    // ------

    //
    function chooseFilter(new_filter_ix = 1) {
        setIsTrue(false);
        setFilterIx(new_filter_ix);
    }

    //
    function makeDivHidden() {
        is_true && setIsTrue(false);
    }

    //
    return (
        <div className="GroupPageTopicsFilter pos-rel">
            <div ref={ref_btn}>
                <BtnActions
                    className="bg-ccc"
                    title={FILTER_ARR[filter_ix].title}
                    Icon={<IconCaret />}
                    icon_on_left={false}
                    handleClick={toggleBool}
                />
            </div>

            {is_true ? (
                <CloseDivPcMb
                    refs_target={[ref_btn]}
                    handleClose={makeDivHidden}
                    makeDivHidden={makeDivHidden}
                >
                    <GPTpFilterContain
                        filter_arr={FILTER_ARR}
                        filter_ix={filter_ix}
                        chooseFilter={chooseFilter}
                    />
                </CloseDivPcMb>
            ) : null}
        </div>
    );
}

export default GroupPageTopicsFilter;

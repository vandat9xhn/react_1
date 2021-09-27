import React from 'react';
import PropTypes from 'prop-types';
//
import RadioCustom from '../../../../../../component/input/radio_custom/RadioCustom';

//
PLCmtSort.propTypes = {};

//
function PLCmtSort({ sort_arr, sort_ix, handleSort }) {
    //
    return (
        <div className="PLCmtSort">
            <div className="PLCmtSort_row display-flex align-items-center">
                <div className="margin-right-20px">Sắp xếp theo</div>

                {sort_arr.map((title, ix) => (
                    <div
                        key={ix}
                        className="inline-flex align-items-center margin-right-15px cursor-pointer"
                        onClick={() => {
                            sort_ix != ix && handleSort(ix);
                        }}
                    >
                        <RadioCustom is_active={sort_ix == ix} />

                        <span className="margin-left-5px">{title}</span>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default PLCmtSort;

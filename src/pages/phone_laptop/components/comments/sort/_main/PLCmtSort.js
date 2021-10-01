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
                <div>Sắp xếp theo</div>

                <div className="flex-grow-1 display-flex align-items-center flex-wrap">
                    {sort_arr.map((title, ix) => (
                        <div
                            key={ix}
                            className="PLCmtSort_item inline-flex align-items-center margin-left-15px cursor-pointer"
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
        </div>
    );
}

export default PLCmtSort;

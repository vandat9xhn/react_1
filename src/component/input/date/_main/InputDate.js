import React from 'react';
import PropTypes from 'prop-types';
//
import { makeRange } from '../../../../_some_function/makeRange';
//
import InputDay from '../day/InputDay';
import Select from '../../select/Select';
//
import './InputDate.scss';

//
InputDate.propTypes = {};

//
function InputDate({
    day,
    month,
    year,

    min_year,
    max_year,

    invalid,
    title_invalid,

    handleChangeDay,
    handleChangeMonth,
    handleChangeYear,
}) {
    //
    return (
        <div className="InputDate">
            <div>
                <div className="InputDate_row display-flex align-items-center">
                    <div className="InputDate_item">
                        <div className="InputDate_item_contain">
                            <InputDay
                                day={day}
                                month={month}
                                year={year}
                                handleChangeDay={handleChangeDay}
                            />
                        </div>
                    </div>

                    <div className="InputDate_item">
                        <div className="InputDate_item_contain">
                            <Select
                                options={makeRange(1, 13)}
                                current_option={month}
                                onSelectOption={handleChangeMonth}
                            />
                        </div>
                    </div>

                    <div className="InputDate_item">
                        <div className="InputDate_item_contain">
                            <Select
                                options={makeRange(min_year, max_year + 1)}
                                current_option={year}
                                onSelectOption={handleChangeYear}
                            />
                        </div>
                    </div>
                </div>
            </div>

            {invalid ? (
                <div className="text-red font-12px font-italic">
                    {title_invalid ? title_invalid : 'Date is invalid!'}
                </div>
            ) : (
                <div></div>
            )}
        </div>
    );
}

export default InputDate;

import { useState } from 'react';
//
import { getLastDayOfMonth } from '../_some_function/getDaysInMonth';

//
export function useInputDate({
    initial_day = 1,
    initial_month = 1,
    initial_year = 2000,
}) {
    //
    const [input_date_state, setInputDateState] = useState({
        day: initial_day,
        month: initial_month,
        year: initial_year,
    });

    const { day, month, year } = input_date_state;

    /* --------- COMMON---------- */

    //
    function handleChangeMonthYear(value, month_year_str = 'month' || 'year') {
        const last_day =
            month_year_str == 'month'
                ? getLastDayOfMonth(+value, +year)
                : getLastDayOfMonth(+month, +value);

        setInputDateState((input_date_state) => ({
            ...input_date_state,
            [month_year_str]: value,
            day:
                input_date_state.day > last_day
                    ? last_day
                    : input_date_state.day,
        }));
    }

    /* ------------------- */

    //
    function handleChangeDay(e) {
        setInputDateState((input_date_state) => ({
            ...input_date_state,
            day: e.target.value,
        }));
    }

    //
    function handleChangeMonth(e) {
        handleChangeMonthYear(e.target.value, 'month');
    }

    //
    function handleChangeYear(e) {
        handleChangeMonthYear(e.target.value, 'year');
    }

    //
    return {
        day,
        month,
        year,

        handleChangeDay,
        handleChangeMonth,
        handleChangeYear,
    };
}

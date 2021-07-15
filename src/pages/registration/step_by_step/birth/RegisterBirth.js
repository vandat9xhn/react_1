import React from 'react';
import PropTypes from 'prop-types';
//
import InputDate from '../../../../component/input/date/_main/InputDate';

//
RegisterBirth.propTypes = {};

//
function RegisterBirth({
    day,
    month,
    year,

    invalid,

    handleChangeDay,
    handleChangeMonth,
    handleChangeYear,
}) {
    //
    return (
        <div>
            <div>
                <h2 className="register-part-title">When were you born?</h2>

                <div>
                    <div>
                        Birth must be from 1960 to now
                    </div>
                </div>

                <div className="register-part-item">
                    <InputDate
                        day={day}
                        month={month}
                        year={year}
                        //
                        min_year={1960}
                        max_year={2021}
                        //
                        invalid={invalid}
                        title_invalid="Birth must be from 1960 to now"
                        //
                        handleChangeDay={handleChangeDay}
                        handleChangeMonth={handleChangeMonth}
                        handleChangeYear={handleChangeYear}
                    />
                </div>
            </div>
        </div>
    );
}

export default RegisterBirth;

import React, { useState } from 'react';
import PropTypes from 'prop-types';
//
import { useInputDate } from '../../../../../../../../../_hooks/useInputDate';
//
import InputDate from '../../../../../../../../../component/input/date/_main/InputDate';
//
import PfAboutConfirm from '../../../../_component/confirm/PfAboutConfirm';

//
PfAboutBirthEdit.propTypes = {
    item_obj: PropTypes.object,
    handleSave: PropTypes.func,
    handleCancel: PropTypes.func,
};

//
function PfAboutBirthEdit({ item_obj, handleSave, handleCancel }) {
    //
    const { permission, birth } = item_obj;

    //
    const [invalid, setInvalid] = useState(false);

    //
    const {
        day,
        month,
        year,

        handleChangeDay,
        handleChangeMonth,
        handleChangeYear,
    } = useInputDate({
        initial_day: new Date(birth).getDate(),
        initial_month: new Date(birth).getMonth() + 1,
        initial_year: new Date(birth).getFullYear(),
    });

    //
    function onSave(new_permission) {
        // const new_birth = new Date(year, month - 1, day);
        const new_birth = new Date(`${year}-${month}-${day}`);

        if (new_birth >= new Date() || new_birth <= new Date(1960)) {
            setInvalid(true);

            return;
        }

        handleSave({ permission: new_permission, birth: new_birth.getTime() });
    }

    //
    return (
        <div>
            <div>
                <div className="PfAbout_input">
                    <InputDate
                        day={day}
                        month={month}
                        year={year}
                        //
                        min_year={1960}
                        max_year={2021}
                        //
                        invalid={invalid}
                        title_invalid="Date must be from 1960 to now"
                        //
                        handleChangeDay={handleChangeDay}
                        handleChangeMonth={handleChangeMonth}
                        handleChangeYear={handleChangeYear}
                    />
                </div>
            </div>

            <div>
                <PfAboutConfirm
                    permission={permission}
                    handleCancel={handleCancel}
                    handleSave={onSave}
                />
            </div>
        </div>
    );
}

export default PfAboutBirthEdit;

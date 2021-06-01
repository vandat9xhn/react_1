import React, { useState } from 'react';
import PropTypes from 'prop-types';
//
import PfAboutConfirm from '../../../../_component/confirm/PfAboutConfirm';
import InputNotValid from '../../../../../../../../../component/input/input_not_valid/InputNotValid';

//
PfAboutCityEdit.propTypes = {
    item_obj: PropTypes.object,
    handleSave: PropTypes.func,
    handleCancel: PropTypes.func,
};

//
function PfAboutCityEdit(props) {
    //
    const { item_obj, handleSave, handleCancel } = props;

    const { permission, city } = item_obj;

    //
    const [cur_city, setCurCity] = useState(city);
    const [city_error, setCityError] = useState(false);

    //
    function handleChangeCity(e) {
        setCurCity(e.target.value);
    }

    function onSave(new_permission) {
        if (
            /[a-zA-Z]{2,}/.test(cur_city) ||
            (city != '' && cur_city == '')
        ) {
            handleSave({
                permission: new_permission,
                city: cur_city.trim(),
            });
        } else {
            setCityError(true);
        }
    }

    //
    return (
        <div>
            <div className={city_error ? 'text-red' : 'display-none'}>
                <div>City must have at least 2 letters!</div>
                <br />
            </div>

            <div>
                <div className="PfAbout_input">
                    <InputNotValid
                        name="city"
                        value={cur_city}
                        type="text"
                        placeholder="City"
                        handleChange={handleChangeCity}
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

export default PfAboutCityEdit;

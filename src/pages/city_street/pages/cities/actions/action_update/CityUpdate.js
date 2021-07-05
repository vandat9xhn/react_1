import React from 'react';
import PropTypes from 'prop-types';
//
import CityForm from '../../../../component/form_yup/_main/CityForm';
//
import './CityUpdate.scss';

//
CityUpdate.propTypes = {
    initialValues: PropTypes.object,
    handleSubmit: PropTypes.func,
    detectHasChange: PropTypes.func,
};

//
function CityUpdate({ initialValues, handleSubmit, detectHasChange }) {
    //
    return (
        <div className="CityUpdate">
            <div>
                <CityForm
                    title_submit="Update"
                    initialValues={initialValues}
                    handleSubmit={handleSubmit}
                    use_has_change={true}
                    detectHasChange={detectHasChange}
                />
            </div>
        </div>
    );
}

export default CityUpdate;

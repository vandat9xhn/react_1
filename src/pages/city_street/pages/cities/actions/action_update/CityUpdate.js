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
};

//
function CityUpdate(props) {
    const { initialValues, handleSubmit } = props;

    //
    return (
        <div className="CityUpdate">
            <div>
                <CityForm
                    initialValues={initialValues}
                    handleSubmit={handleSubmit}
                    title_submit="Update"
                />
            </div>
        </div>
    );
}

export default CityUpdate;

import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
//
import { API_City_C } from '../../../../../api/api_django/api01/API01';
// 
import { useScreenFetching } from '../../../../../_hooks/UseScreenFetching';
// 
import makeFormData from '../../../../../_some_function/makeFormData';
//
import { initialValues } from '../../../../../_initial/city/CityInitial';
// 
import MainForm from '../../../component/form_yup/_main/CityForm';
//
import './AddNewCity.scss';

//
function AddNewCity() {
    // 
    const use_history = useHistory()

    const handleScreenFetching = useScreenFetching()

    //
    useEffect(() => {
        document.title = 'Add new city';
    }, []);

    // 
    async function handleSubmit(data) {
        try {
            const {city, street, file, bg_color} = data;
            
            const formData = makeFormData({
                city: city,
                street: street,
                image: file,
                bg_color: bg_color,
                profile_model: 1,
            });
            
            await handleScreenFetching(() => API_City_C(formData))

            use_history.push('/city-street')
        } catch (e) {
            console.log(e);
        } 
    }

    //
    return (
        <div className="AddNewCity">
            <h3 className="label-field text-align-center">
                Let's create a post about your city now!
            </h3>
            <br />

            <div>
                <MainForm
                    initialValues={initialValues}
                    handleSubmit={handleSubmit}
                />
            </div>
        </div>
    );
}

export default AddNewCity;

import React, { useEffect, useState } from 'react';
import { Redirect } from 'react-router-dom';
//
import { API_City_C } from '../../../../../api/api_django/api01/API01';
import makeFormData from '../../../../../_some_function/makeFormData';
//
import BlurFetchingDiv from '../../../../../component/some_div/fetching/BlurFetchingDiv';
import FetchingDiv from '../../../../../component/some_div/fetching/FetchingDiv';
//
import { initialValues } from '../../../__default/DefaultCity';
import MainForm from '../../../component/form_yup/_main/CityForm';
//
import './AddNewCity.scss';

//
function AddNewCity() {
    // state
    const [is_fetching, setIsFetching] = useState(false);
    const [is_submitted, setIsSubmitted] = useState(false);
    //
    useEffect(() => {
        document.title = 'Add new city';
    }, []);

    // Submit
    async function handleSubmit(data) {
        try {
            const {city, street, file} = data;
            setIsFetching(true);
            //
            const formData = makeFormData({
                city: city,
                street: street,
                image: file,
                profile_user: 1,
            });
            await API_City_C(formData);
            //
            setIsSubmitted(true);
        } catch (e) {
            console.log(e);
            setIsFetching(false)
        }
    }

    //
    if (is_submitted) {
        return <Redirect to="/city-street" />;
    }
    //
    if (localStorage.is_login != 1) {
        return <Redirect to="/login-form" />;
    }
    //
    return (
        <div className="AddNewCity">
            <div className="label-field text-align-center">
                Let's create a post about your city now!
            </div>
            <br />

            <div>
                <MainForm
                    initialValues={initialValues}
                    handleSubmit={handleSubmit}
                />
            </div>

            <BlurFetchingDiv
                FetchingComponent={FetchingDiv}
                open_fetching={is_fetching}
            />
        </div>
    );
}

export default AddNewCity;

import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { FastField, Form, Formik } from 'formik';
//
import { validationSchema } from '../../../__default/DefaultCity';
import InputText from '../../../../../component/input/input_text/InputText';
import ButtonRipple from '../../../../../component/button/button_ripple/ButtonRipple';
import InputImage from '../input_image/InputImage';
// 
import './CityForm.scss';

//
CityForm.propTypes = {
    initialValues: PropTypes.object,
    title_submit: PropTypes.string,
    handleSubmit: PropTypes.func,
};

CityForm.defaultProps = {
    title_submit: 'Upload',
};

//
function CityForm(props) {
    const { initialValues, title_submit, handleSubmit } = props;
    //
    const [file, setFile] = useState('');

    // image change
    function handleImageChange(new_file) {
        setFile(new_file);
    }

    //
    return (
        <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={(values, actions) => {
                handleSubmit({
                    city: values.city,
                    street: values.street,
                    image: values.image,
                    file: file,
                });
            }}
        >
            {(props) => (
                <Form
                    className="CityForm App_Form brs-5px App_box_shadow scroll-thin"
                    autoComplete="off"
                >
                    <FastField
                        name="city"
                        component={InputText}
                        label="City"
                        placeholder="Your city..."
                        dataList={['Ha Noi', 'Ho Chi Minh', 'Da Nang']}
                        help="5-50 letters"
                    />

                    <FastField
                        name="street"
                        component={InputText}
                        label="Street"
                        placeholder="Your Street..."
                        dataList={[
                            'Nguyen Trai',
                            'Nguyen Hue',
                            'Quang Trung',
                            'Tran Phu',
                        ]}
                        help="5-50 letters"
                    />

                    <FastField
                        name="image"
                        component={InputImage}
                        label="Image"
                        handleImageChange={handleImageChange}
                    />
                    <br />

                    <div className="App_submit">
                        <ButtonRipple type="submit" title="Create new city">
                            {title_submit}
                        </ButtonRipple>
                    </div>
                </Form>
            )}
        </Formik>
    );
}

export default CityForm;

import React, { useRef, useState } from 'react';
import { FastField, Form, Formik } from 'formik';
import PropTypes from 'prop-types';
//
import InputText from '../../../../../component/input/input_text/InputText';
import InputColor from '../../../../../component/input/color/InputColor';
import ButtonRipple from '../../../../../component/button/button_ripple/ButtonRipple';
//
import { validationSchema } from '../../../__initial/CityInitial';

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
function CityForm({
    initialValues: { bg_color, ...rest_initialValues },
    title_submit,
    handleSubmit,
}) {
    //
    const [file, setFile] = useState('');
    const [new_bg_color, setNewBgColor] = useState(bg_color);

    //
    const ref_city_elm = useRef(null);

    //
    function handleImageChange(new_file) {
        setFile(new_file);
    }

    //
    function handlePickColor(e) {
        setNewBgColor(e.target.value);
    }

    //
    function handleError(err) {
        if (Object.keys(err).length) {
            const arr_err = Object.keys(err);

            ref_city_elm.current
                .querySelector(`[name=${arr_err[0]}]`)
                .scrollIntoView(false);
        }
    }

    //
    function onSubmit(values, action) {
        handleSubmit({
            ...values,
            bg_color: new_bg_color,
            file: file,
        });
    }

    //
    return (
        <Formik
            initialValues={rest_initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
        >
            {(props) => {
                return (
                    <Form
                        className="CityForm App_Form brs-5px-md box-shadow-1 scroll-thin"
                        style={{ backgroundColor: new_bg_color }}
                        autoComplete="off"
                    >
                        <div ref={ref_city_elm}>
                            <div className="CityForm_field">
                                <FastField
                                    name="city"
                                    component={InputText}
                                    label="City"
                                    placeholder="City..."
                                    dataList={[
                                        'Ha Noi',
                                        'Ho Chi Minh',
                                        'Da Nang',
                                    ]}
                                    help="5-50 letters"
                                />
                            </div>

                            <div className="CityForm_field">
                                <FastField
                                    name="street"
                                    component={InputText}
                                    label="Street"
                                    placeholder="Street..."
                                    dataList={[
                                        'Nguyen Trai',
                                        'Nguyen Hue',
                                        'Quang Trung',
                                        'Tran Phu',
                                    ]}
                                    help="5-50 letters"
                                />
                            </div>

                            <div className="CityForm_field">
                                <FastField
                                    name="quote"
                                    component={InputText}
                                    label="Quote"
                                    placeholder="Quote..."
                                    is_textarea={true}
                                />
                            </div>

                            <div className="CityForm_field">
                                <InputColor
                                    label="Background color"
                                    color={new_bg_color}
                                    handlePickColor={handlePickColor}
                                />
                            </div>

                            <div className="CityForm_field">
                                <FastField
                                    name="image"
                                    component={InputImage}
                                    label="Image"
                                    handleImageChange={handleImageChange}
                                />
                            </div>
                            <br />

                            <div
                                className={`App_submit display-flex-center  ${
                                    props.dirty || new_bg_color != bg_color
                                        ? ''
                                        : 'pointer-events-none opacity-5'
                                }`}
                                onClick={() => handleError(props.errors)}
                            >
                                <ButtonRipple
                                    type="submit"
                                    title="Create new city"
                                >
                                    {title_submit}
                                </ButtonRipple>
                            </div>
                        </div>
                    </Form>
                );
            }}
        </Formik>
    );
}

export default CityForm;

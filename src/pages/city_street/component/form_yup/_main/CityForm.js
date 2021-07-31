import React, { useRef, useState } from 'react';
import { FastField, Form, Formik } from 'formik';
import PropTypes from 'prop-types';
//
import InputText from '../../../../../component/input/input_text/InputText';
import ButtonRipple from '../../../../../component/button/button_ripple/ButtonRipple';
import SelectColorBg from '../../../../../component/input/color/color_bg/_main/SelectColorBg';
//
import { validationSchema } from '../../../../../_initial/city/CityInitial';
import { city_bg_color_arr } from '../../../_data/bg_color';
//
import InputImage from '../input_image/InputImage';
//
import './CityForm.scss';

//
CityForm.propTypes = {
    initialValues: PropTypes.object,
    title_submit: PropTypes.string,
    handleSubmit: PropTypes.func,
    use_has_change: PropTypes.bool,
    detectHasChange: PropTypes.func,
};

CityForm.defaultProps = {
    title_submit: 'Upload',
    use_has_change: false,
};

//
function CityForm({
    initialValues: { bg_color, ...rest_initialValues },
    title_submit,
    handleSubmit,
    use_has_change,
    detectHasChange,
}) {
    //
    const [file, setFile] = useState('');
    const [active_color_ix, setActiveColorIx] = useState(
        city_bg_color_arr[bg_color]
    );

    const color = city_bg_color_arr[active_color_ix].color;
    const bg = city_bg_color_arr[active_color_ix].bg;

    //
    const ref_city_elm = useRef(null);

    //
    function handleHasChange(new_city, new_street, new_quote) {
        if (!use_has_change) {
            return false;
        }

        if (
            new_city != rest_initialValues.city ||
            new_street != rest_initialValues.street ||
            new_quote != rest_initialValues.quote ||
            file ||
            city_bg_color_arr[active_color_ix].bg +
                '.' +
                city_bg_color_arr[active_color_ix].color !=
                bg_color
        ) {
            return true;
        }

        return false;
    }

    //
    function handleImageChange(new_file) {
        setFile(new_file);
    }

    //
    function handleChangeColorBg(new_color_ix) {
        new_color_ix != active_color_ix && setActiveColorIx(new_color_ix);
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
            bg_color: active_color_ix,
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
                //
                use_has_change &&
                    detectHasChange(
                        handleHasChange(
                            props.values.city,
                            props.values.street,
                            props.values.quote
                        )
                    );

                //
                return (
                    <div className={`CityForm`}>
                        <Form
                            className={`CityForm_contain App_Form brs-5px-md box-shadow-1 scroll-thin ${color} ${bg}`}
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
                                    <SelectColorBg
                                        active_ix={active_color_ix}
                                        color_bg_arr={city_bg_color_arr}
                                        handleChangeColorBg={
                                            handleChangeColorBg
                                        }
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
                                        props.dirty ||
                                        `${bg}.${color}` != bg_color
                                            ? ''
                                            : 'pointer-events-none opacity-05'
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
                    </div>
                );
            }}
        </Formik>
    );
}

export default CityForm;

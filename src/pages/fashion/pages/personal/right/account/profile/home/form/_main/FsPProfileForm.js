import React from 'react';
import PropTypes from 'prop-types';
//
import InputDate from '../../../../../../../../../../component/input/date/_main/InputDate';
//
import FsPPrFormInput from '../input/FsPPrFormInput';
import FsPPrFormChange from '../change/FsPPrFormChange';
import FsPProfileSex from '../sex/_main/FsPProfileSex';
import FsPProfileAccount from '../account/FsPProfileAccount';
//
import './FsPProfileForm.scss';

//
FsPProfileForm.propTypes = {};

//
function FsPProfileForm({
    personal_info,
    invalid_birth,
    title_invalid_birth,

    handleChangeName,
    handleChangeEmail,
    handleChangePhone,
    handleChangeShopName,
    handleChangeSex,

    handleChangeDay,
    handleChangeMonth,
    handleChangeYear,

    handleSave,
}) {
    //
    const {
        account,
        name,
        email,
        phone,
        shop_name,
        sex_ix,

        day,
        month,
        year,
    } = personal_info;

    //
    return (
        <form className="FsPProfileForm">
            <div className="FsPProfileForm_part">
                <FsPProfileAccount account={account} />
            </div>

            <div className="FsPProfileForm_part">
                <FsPPrFormInput
                    label="Tên"
                    value={name}
                    handleChange={handleChangeName}
                />
            </div>

            <div className="FsPProfileForm_part">
                <FsPPrFormChange
                    label="Email"
                    value={email}
                    handleChange={handleChangeEmail}
                />
            </div>

            <div className="FsPProfileForm_part">
                <FsPPrFormChange
                    label="Số điện thoại"
                    value={phone}
                    handleChange={handleChangePhone}
                />
            </div>

            <div className="FsPProfileForm_part">
                <FsPPrFormInput
                    label="Tên Shop"
                    value={shop_name}
                    handleChange={handleChangeShopName}
                />
            </div>

            <div className="FsPProfileForm_part">
                <FsPProfileSex
                    sex_ix={sex_ix}
                    handleChangeSex={handleChangeSex}
                />
            </div>

            <div className="FsPProfileForm_part FsPProfileForm_date">
                <div className="fs-personal-profile-row display-flex align-items-center">
                    <div className="fs-personal-profile-label">Ngày sinh</div>

                    <div>
                        <InputDate
                            day={day}
                            month={month}
                            year={year}
                            //
                            min_year={1900}
                            max_year={2021}
                            invalid={invalid_birth}
                            title_invalid={title_invalid_birth}
                            //
                            handleChangeDay={handleChangeDay}
                            handleChangeMonth={handleChangeMonth}
                            handleChangeYear={handleChangeYear}
                        />
                    </div>
                </div>
            </div>

            <div className="FsPProfileForm_btn">
                <button
                    className="btn btn-hv btn-active padding-y-8px padding-x-20px brs-2px bg-fashion-red font-500 text-white cursor-pointer"
                    type="submit"
                    onClick={handleSave}
                >
                    Lưu
                </button>
            </div>
        </form>
    );
}

export default FsPProfileForm;

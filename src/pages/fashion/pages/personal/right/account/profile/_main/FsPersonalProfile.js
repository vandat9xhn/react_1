import React, { useContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
//
import { context_api } from '../../../../../../../../_context/ContextAPI';
//
import { ParseLocationSearch } from '../../../../../../../../_some_function/ParseLocationSearch';
//
import { handle_API_ProfileUser_R } from '../../../../../../../../_handle_api/profile/ProfileHandleAPI';
//
import { usePopstate } from '../../../../../../../../_hooks/usePopstate';
//
import { openScreenNotice } from '../../../../../../../../component/_screen_once/notice/ScreenNotice';
//
import './FsPersonalProfileCommon.scss';
//
import FsPProfileHead from '../head/FsPProfileHead';
import FsPProfileHome from '../home/_main/FsPProfileHome';
import FsPProfileEmail from '../email/_main/FsPProfileEmail';
import FsPProfilePhone from '../phone/_main/FsPProfilePhone';
import FsPPrChangeSuccess from '../notice/change_success/FsPPrChangeSuccess';
//
import './FsPersonalProfile.scss';
import '../_mobile_css/FsPersonalProfileCommonMb.scss';
import '../_mobile_css/FsPersonalProfileMb.scss';
import '../_mobile_css/FsPProfileFormMb.scss';
import '../_mobile_css/FsPProfilePicMb.scss';
import '../_mobile_css/FsPProfileEmailMb.scss';
import '../_mobile_css/FsPProfilePhoneMb.scss';

//
const HEAD_OBJ = {
    home: {
        title: 'Hồ sơ của tôi',
        info: 'Quản lý thông tin hồ sơ để bảo mật tài khoản',
    },
    email: {
        title: 'Đổi hộp thư',
        info: 'Để cập nhật email mới, vui lòng xác nhận bằng cách nhập mật khẩu',
    },
    phone: {
        title: 'Đổi số điện thoại',
        info: 'Để đảm bảo tính bảo mật, vui lòng làm theo các bước sau để đổi số điện thoại',
    },
};

//
FsPersonalProfile.propTypes = {};

//
function FsPersonalProfile(props) {
    //
    const { openScreenOnce, closeScreenOnce } = useContext(context_api);

    //
    const [state_obj, setStateObj] = useState({
        personal_info: {
            account: '',
            name: '',
            picture: '',
            email: '',
            phone: '',
            shop_name: '',
            sex_ix: 0,
            day: 1,
            month: 1,
            year: 2000,
        },

        pic_file: '',
        invalid_birth: false,

        head_name: ParseLocationSearch()['type'] || 'home',
        has_fetched: false,
    });

    const { personal_info, invalid_birth, head_name, has_fetched } = state_obj;

    //
    usePopstate(handlePopstate);

    //
    useEffect(() => {
        document.title = 'Profile';

        getData_Personal();
    }, []);

    // ----- API

    //
    async function getData_Personal() {
        const data = await handle_API_ProfileUser_R({});
        const birth_date = new Date(data.birth_obj.birth);

        setStateObj({
            ...state_obj,
            personal_info: {
                ...personal_info,
                account: 'Account',
                name: data.first_name + ' ' + data.last_name,
                picture: data.picture,
                email: data.email_obj.email,
                phone: '********21',
                shop_name: 'Shop Gia Dụng',
                sex_ix: 0,
                day: birth_date.getDate(),
                month: birth_date.getMonth() + 1,
                year: birth_date.getFullYear(),
            },
            has_fetched: true,
        });
    }

    // ----- COMMON

    //
    function handleChange(key, value) {
        setStateObj({
            ...state_obj,
            personal_info: {
                ...personal_info,
                [key]: value,
            },
        });
    }

    //
    function handlePopstate() {
        setStateObj((state_obj) => {
            return {
                ...state_obj,
                head_name: ParseLocationSearch()['type'] || 'home',
            };
        });
    }

    //
    function noticeUpdateSuccess() {
        openScreenNotice({
            openScreenOnce: openScreenOnce,
            ComponentNotice: <FsPPrChangeSuccess />,
        });
        setTimeout(() => {
            closeScreenOnce();
        }, 1500);
    }

    // ------- EMAIL

    //
    function handleChangeEmail() {
        history.pushState('', '', '?type=email');

        setStateObj({
            ...state_obj,
            head_name: 'email',
        });
    }

    //
    function confirmNewEmail({ confirm_password, new_email }) {
        handleChange('email', new_email);

        noticeUpdateSuccess();
        history.back();
    }

    //
    function rejectNewEmail() {
        history.back();
    }

    // ------- PHONE

    //
    function handleChangePhone() {
        history.pushState('', '', '?type=phone');

        setStateObj({
            ...state_obj,
            head_name: 'phone',
        });
    }

    //
    function confirmNewPhone({ confirm_password, new_phone }) {
        handleChange('phone', new_phone);

        noticeUpdateSuccess();
        history.back();
    }

    // --------

    //
    function handleChangeName(e) {
        handleChange('name', e.target.value);
    }

    //
    function handleChangeShopName(e) {
        handleChange('shop_name', e.target.value);
    }

    //
    function handleChangeSex(new_sex_ix) {
        handleChange('sex_ix', new_sex_ix);
    }

    // Birth
    function handleChangeDay(e) {
        handleChange('day', e.target.value);
    }

    //
    function handleChangeMonth(e) {
        handleChange('month', e.target.value);
    }

    //
    function handleChangeYear(e) {
        handleChange('year', e.target.value);
    }

    //
    function handleChangePic(e) {
        const files = e.target.files;

        if (files.length) {
            const reader = new FileReader();

            reader.onload = () => {
                setStateObj({
                    ...state_obj,
                    personal_info: { ...personal_info, picture: reader.result },
                    pic_file: files,
                });
            };

            reader.readAsDataURL(files[0]);
        }
    }

    // --------

    function handleSave(e) {
        e.preventDefault();
        console.log(state_obj);

        noticeUpdateSuccess();
    }

    //
    return (
        <React.Fragment>
            <div
                className={`FsPersonalProfile bg-primary ${
                    has_fetched ? '' : 'display-none'
                }`}
            >
                <div className="FsPersonalProfile_head margin-bottom-20px">
                    <FsPProfileHead
                        title={HEAD_OBJ[head_name].title}
                        info={HEAD_OBJ[head_name].info}
                    />
                </div>

                <div>
                    {head_name == 'home' ? (
                        <FsPProfileHome
                            personal_info={personal_info}
                            invalid_birth={invalid_birth}
                            title_invalid_birth="Xin hãy chọn ngày sinh chính xác"
                            //
                            handleChangeName={handleChangeName}
                            handleChangeEmail={handleChangeEmail}
                            handleChangePhone={handleChangePhone}
                            handleChangeShopName={handleChangeShopName}
                            handleChangeSex={handleChangeSex}
                            //
                            handleChangeDay={handleChangeDay}
                            handleChangeMonth={handleChangeMonth}
                            handleChangeYear={handleChangeYear}
                            //
                            handleChangePic={handleChangePic}
                            handleSave={handleSave}
                        />
                    ) : head_name == 'email' ? (
                        <FsPProfileEmail
                            email={personal_info.email}
                            confirmNewEmail={confirmNewEmail}
                            rejectNewEmail={rejectNewEmail}
                        />
                    ) : (
                        <FsPProfilePhone
                            phone={personal_info.phone}
                            handleDone={confirmNewPhone}
                        />
                    )}
                </div>
            </div>

            {has_fetched ? null : <div className="h-100vh bg-primary"></div>}
        </React.Fragment>
    );
}

export default FsPersonalProfile;

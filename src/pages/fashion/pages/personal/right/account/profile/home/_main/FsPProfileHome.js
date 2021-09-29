import React from 'react';
import PropTypes from 'prop-types';
//
import FsPProfileForm from '../form/_main/FsPProfileForm';
import FsPProfilePic from '../picture/FsPProfilePic';
// 
import './FsPProfileHome.scss';

//
FsPProfileHome.propTypes = {};

//
function FsPProfileHome({
    personal_info,
    invalid_birth,

    handleChangeName,
    handleChangeEmail,
    handleChangePhone,
    handleChangeShopName,
    handleChangeSex,

    handleChangeDay,
    handleChangeMonth,
    handleChangeYear,

    handleChangePic,
    handleSave,
}) {
    return (
        <div className="FsPProfileHome">
            <div className="FsPProfileHome_row display-flex">
                <div className="FsPProfileHome_form flex-grow-1">
                    <FsPProfileForm
                        personal_info={personal_info}
                        invalid_birth={invalid_birth}
                        title_invalid_birth="Xin hãy chọn ngày sinh chính xác"
                        //
                        handleChangeName={handleChangeName}
                        handleChangeEmail={handleChangeEmail}
                        handleChangePhone={handleChangePhone}
                        handleChangeShopName={handleChangeShopName}
                        handleChangeSex={handleChangeSex}
                        handleChangeDay={handleChangeDay}
                        handleChangeMonth={handleChangeMonth}
                        handleChangeYear={handleChangeYear}
                        handleSave={handleSave}
                    />
                </div>

                <div className="FsPProfileHome_pic">
                    <FsPProfilePic
                        picture={personal_info.picture}
                        handleChangePic={handleChangePic}
                    />
                </div>
            </div>
        </div>
    );
}

export default FsPProfileHome;

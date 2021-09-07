import React, { useContext, useState } from 'react';
import PropTypes from 'prop-types';
//
import { context_api } from '../../../../../../_context/ContextAPI';
//
import { IS_MOBILE } from '../../../../../../_constant/Constant';
//
import { openScreenWithElm } from '../../../../../../component/_screen/type/with_elm/ScreenWithElm';
//
import IconsProfile from '../../../../../../_icons_svg/icons_profile/IconsProfile';
import IconPlusSubtract from '../../../../../../_icons_svg/_icon_plus_subtract/IconPlusSubtract';
//
import FsBtnsConfirm from '../../../../../../component/button/fs_btns_confirm/FsBtnsConfirm';
import FsBuyUserHead from '../head/FsBuyUserHead';
import FsBuyUserInfoChoice from '../info_choice/FsBuyUserInfoChoice';
import FsBuyUserInfoCurrent from '../current/FsBuyUserCurrent';
import FsBUChoiceHeadMb from '../choice_head_mb/FsBUChoiceHeadMb';
import FsAddAddressScreen from '../../../../components/add_address/_screen/FsAddAddressScreen';
//
import './FsBuyUser.scss';

//
FsBuyUser.propTypes = {};

//
function FsBuyUser({
    user_info_arr,
    active_ix,

    handleChangeUserInfo,
    handleAddUserAddress,
    handleFixUserInfo,
}) {
    //
    const { openScreenFloor, closeScreenFloor } = useContext(context_api);

    //
    const [state_obj, setStateObj] = useState({
        temp_active_ix: 0,
        open_fixed: false,
        is_fixing: false,
    });

    const { temp_active_ix, open_fixed, is_fixing } = state_obj;

    // ---------

    //
    async function handleOpenFixed() {
        setStateObj((state_obj) => ({
            ...state_obj,
            open_fixed: true,
        }));
    }

    //
    function handleChecked(ix) {
        setStateObj({
            ...state_obj,
            temp_active_ix: ix,
        });
    }

    //
    function handleComplete() {
        setStateObj({
            ...state_obj,
            open_fixed: false,
        });

        handleChangeUserInfo(temp_active_ix);
    }

    //
    function handleBack() {
        setStateObj({
            ...state_obj,
            temp_active_ix: active_ix,
            open_fixed: false,
        });
    }

    // --------

    //
    function openAddAddress() {
        openScreenWithElm({
            openScreenFloor: openScreenFloor,
            elm: (
                <FsAddAddressScreen
                    title="Địa Chỉ Mới"
                    handleBack={closeScreenFloor}
                    handleComplete={handleAddUserAddress}
                />
            ),
        });
    }

    // ------ MOBILE

    //
    function toggleFixing() {
        setStateObj({
            ...state_obj,
            is_fixing: !is_fixing,
        });
    }

    //
    function handleChoiceBack() {
        setStateObj({
            ...state_obj,
            is_fixing: false,
            open_fixed: is_fixing ? true : false,
        });
    }

    //
    function handleChooseInfo(ix) {
        if (!is_fixing) {
            ix != active_ix && handleChangeUserInfo(ix);

            setStateObj({
                ...state_obj,
                open_fixed: false,
            });
        } else {
            const { name, phone, address, type, is_default } =
                user_info_arr[ix];
            const first_comma_of_address = address.indexOf(',');

            openScreenWithElm({
                openScreenFloor: openScreenFloor,
                elm: (
                    <FsAddAddressScreen
                        title="Chỉnh sửa địa chỉ"
                        old_user_name={name}
                        old_phone={phone}
                        old_current_address={address.slice(
                            first_comma_of_address + 2
                        )}
                        old_specific={address.slice(0, first_comma_of_address)}
                        old_type={type}
                        is_default={is_default}
                        handleBack={closeScreenFloor}
                        handleComplete={(new_user_info) =>
                            handleFixUserInfo({
                                user_info_ix: ix,
                                new_user_info: new_user_info,
                            })
                        }
                    />
                ),
            });
        }
    }

    //
    return (
        <div className="FsBuyUser bg-primary">
            <div className="FsBuyUser_caro_row"></div>

            <div className="FsBuyUser_contain">
                <div className="FsBuyUser_head margin-bottom-16px">
                    <FsBuyUserHead
                        open_fixed={open_fixed}
                        openAddAddress={openAddAddress}
                    />
                </div>

                {open_fixed ? (
                    <div className="FsBuyUser_choices">
                        <div className="FsBuyUser_choices_contain">
                            {IS_MOBILE ? (
                                <div>
                                    <FsBUChoiceHeadMb
                                        is_fixing={is_fixing}
                                        toggleFixing={toggleFixing}
                                        handleChoiceBack={handleChoiceBack}
                                    />
                                </div>
                            ) : null}

                            {user_info_arr.map((user_info, ix) => (
                                <div
                                    key={user_info.id}
                                    className="FsBuyUser_choices_item margin-bottom-16px"
                                >
                                    <FsBuyUserInfoChoice
                                        ix={ix}
                                        name={user_info.name}
                                        phone={user_info.phone}
                                        address={user_info.address}
                                        is_default={user_info.is_default}
                                        checked={temp_active_ix == ix}
                                        handleChecked={handleChecked}
                                        handleChooseInfo={handleChooseInfo}
                                    />

                                    {IS_MOBILE ? (
                                        <div className="margin-left-5px align-self-end">
                                            <IconsProfile size_icon="1rem" />
                                        </div>
                                    ) : null}
                                </div>
                            ))}

                            {IS_MOBILE ? (
                                <div
                                    className="flex-between-center padding-10px"
                                    onClick={openAddAddress}
                                >
                                    <div>Thêm địa chỉ mới</div>

                                    <div>
                                        <IconPlusSubtract size_icon="1rem" />
                                    </div>
                                </div>
                            ) : null}
                        </div>

                        {IS_MOBILE ? null : (
                            <div className="padding-y-15px padding-left-20px">
                                <div className="display-flex font-14px">
                                    <FsBtnsConfirm
                                        back_title="Trở lại"
                                        confirm_title="Hoàn thành"
                                        // back_class={back_class}
                                        // confirm_class={confirm_class}
                                        handleBack={handleBack}
                                        handleConfirm={handleComplete}
                                    />
                                </div>
                            </div>
                        )}
                    </div>
                ) : null}

                {open_fixed && !IS_MOBILE ? null : (
                    <FsBuyUserInfoCurrent
                        name={user_info_arr[active_ix].name}
                        phone={user_info_arr[active_ix].phone}
                        address={user_info_arr[active_ix].address}
                        is_default={user_info_arr[active_ix].is_default}
                        handleOpenFixed={handleOpenFixed}
                    />
                )}
            </div>
        </div>
    );
}

export default FsBuyUser;

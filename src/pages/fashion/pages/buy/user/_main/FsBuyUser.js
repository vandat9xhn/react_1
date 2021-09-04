import React, { useContext, useState } from 'react';
import PropTypes from 'prop-types';
//
import { context_api } from '../../../../../../_context/ContextAPI';
//
import { openScreenWithElm } from '../../../../../../component/_screen/type/with_elm/ScreenWithElm';
//
import FsBuyUserAddNew from '../add_new/FsBuyUserAddNew';
import FsBuyUserHead from '../head/FsBuyUserHead';
import FsBuyUserInfoChoice from '../info_choice/FsBuyUserInfoChoice';
import FsBuyUserInfoCurrent from '../current/FsBuyUserCurrent';
//
import './FsBuyUser.scss';

//
FsBuyUser.propTypes = {};

//
function FsBuyUser({
    user_info_arr,
    active_ix,

    handleChangeUserInfo,
    handleAddComplete,
}) {
    //
    const { openScreenFloor, closeScreenFloor } = useContext(context_api);

    //
    const [state_obj, setStateObj] = useState({
        temp_active_ix: 0,
        open_fixed: false,
    });

    const { temp_active_ix, open_fixed } = state_obj;

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
                <FsBuyUserAddNew
                    handleBack={closeScreenFloor}
                    handleComplete={handleAddComplete}
                />
            ),
        });
    }

    //
    return (
        <div className="FsBuyUser bg-primary">
            <div className="FsBuyUser_caro_row"></div>

            <div className="FsBuyUser_contain">
                <div className="margin-bottom-16px">
                    <FsBuyUserHead
                        open_fixed={open_fixed}
                        openAddAddress={openAddAddress}
                    />
                </div>

                {open_fixed ? (
                    <div>
                        {user_info_arr.map((user_info, ix) => (
                            <div
                                key={user_info.id}
                                className="margin-bottom-16px"
                            >
                                <FsBuyUserInfoChoice
                                    ix={ix}
                                    name={user_info.name}
                                    phone={user_info.phone}
                                    address={user_info.address}
                                    is_default={user_info.is_default}
                                    checked={temp_active_ix == ix}
                                    handleChecked={handleChecked}
                                />
                            </div>
                        ))}

                        <div className="padding-y-15px padding-left-20px">
                            <div className="display-flex font-14px">
                                <button
                                    className="btn btn-hv margin-right-16px padding-x-20px padding-y-10px brs-3px bg-fashion-red text-cap text-white cursor-pointer"
                                    onClick={handleComplete}
                                >
                                    Hoàn thành
                                </button>

                                <button
                                    className="padding-x-20px padding-y-10px border-blur brs-3px text-cap cursor-pointer hv-bg-blur"
                                    onClick={handleBack}
                                >
                                    Trở lại
                                </button>
                            </div>
                        </div>
                    </div>
                ) : (
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

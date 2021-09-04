import React, { useContext, useState } from 'react';
import PropTypes from 'prop-types';
//
import { context_api } from '../../../../../../_context/ContextAPI';
//
import { openScreenWithElm } from '../../../../../../component/_screen/type/with_elm/ScreenWithElm';
// 
import CircleLoading from '../../../../../../component/waiting/circle_loading/CircleLoading';
//
import FsAddAddress from '../../../../components/add_address/_main/FsAddAddress';
import FsBuyUserHead from '../head/FsBuyUserHead';
import FsBuyUserInfoChoice from '../info_choice/FsBuyUserInfoChoice';
import FsBuyUserInfoCurrent from '../current/FsBuyUserCurrent';

//
FsBuyUser.propTypes = {};

//
function FsBuyUser({ c_user_info }) {
    //
    const { openScreenFloor, closeScreenFloor } = useContext(context_api);

    //
    const [state_obj, setStateObj] = useState({
        user_info_arr: [c_user_info],
        active_ix: 0,
        temp_active_ix: 0,

        is_fetching: false,
        open_fixed: false,
    });

    const {
        user_info_arr,
        active_ix,
        temp_active_ix,

        is_fetching,
        open_fixed,
    } = state_obj;

    // ---------

    //
    async function handleOpenFixed() {
        setStateObj((state_obj) => ({
            ...state_obj,
            open_fixed: true,
            is_fetching: true,
        }));

        const { data } = await handle_API_L;

        setStateObj((state_obj) => ({
            ...state_obj,
            user_info_arr: [c_user_info, ...data],
            is_fetching: false,
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
            active_ix: temp_active_ix,
            open_fixed: false,
        });
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
    function handleAddComplete(new_user_info) {
        console.log(new_user_info);
    }

    //
    function openAddAddress() {
        openScreenWithElm({
            openScreenFloor: openScreenFloor,
            elm: (
                <FsAddAddress
                    handleBack={closeScreenFloor}
                    handleComplete={handleAddComplete}
                />
            ),
        });
    }

    //
    return (
        <div className="FsBuyUser">
            <div>
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
                                    type={user_info.type}
                                    checked={temp_active_ix == ix}
                                    handleChecked={handleChecked}
                                />
                            </div>
                        ))}

                        <div className="width-fit-content margin-auto">
                            <CircleLoading is_fetching={is_fetching} />
                        </div>

                        <div className="padding-left-20px">
                            <div className="display-flex">
                                <button
                                    className="btn btn-hv margin-right-16px brs-5px bg-fashion-red text-cap text-white cursor-pointer"
                                    onClick={handleComplete}
                                >
                                    Hoàn thành
                                </button>

                                <button
                                    className="border-blur brs-5px text-cap cursor-pointer hv-bg-blur"
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
                        type={user_info_arr[active_ix].type}
                        handleOpenFixed={handleOpenFixed}
                    />
                )}
            </div>
        </div>
    );
}

export default FsBuyUser;

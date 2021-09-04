import React, { useContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
//
import { context_api } from '../../../../../_context/ContextAPI';
//
import { initial_user_info_buy_obj } from '../../../../../_initial/fashion/user_info';
//
import {
    handle_API_FsUserInfoBuy_C,
    handle_API_FsUserInfoBuy_L,
} from '../../../../../_handle_api/fashion/user_info';
//
import { useScreenFetching } from '../../../../../_hooks/UseScreenFetching';
//
import FashionH from '../../../components/head/_main/FashionH';
import FsBuyUser from '../user/_main/FsBuyUser';
import { handleAddComplete } from '../_state/handleAddComplete';

//
FashionBuy.propTypes = {};

//
function FashionBuy(props) {
    //
    const { closeScreenFloor } = useContext(context_api);

    //
    const [state_obj, setStateObj] = useState({
        user_info_arr: [] || [initial_user_info_buy_obj()],
        active_ix: 0,
        has_fetched_user: false,
    });

    const { user_info_arr, active_ix, has_fetched_user } = state_obj;

    //
    const handleScreenFetching = useScreenFetching();

    //
    useEffect(() => {
        getData_API_User();
    }, []);

    // -------- API

    async function getData_API_User() {
        const { data } = await handle_API_FsUserInfoBuy_L({
            params: {
                is_active: true,
                size: 1,
            },
        });

        setStateObj({
            ...state_obj,
            user_info_arr: data,
            has_fetched_user: true,
        });
    }

    // -------- USER

    //
    function handleChangeUserInfo(new_active_ix) {
        setStateObj({
            ...state_obj,
            active_ix: new_active_ix,
        });
    }


    async function onAddComplete(new_user_info) {
        handleAddComplete({
            new_user_info: new_user_info,
            setStateObj: setStateObj,
            handleScreenFetching: handleScreenFetching,
            closeScreenFloor: closeScreenFloor,
        });
    }

    // -------

    //
    return (
        <div className="FashionBuy">
            <div className="margin-bottom-20px">
                <FashionH />
            </div>

            <div className="fashion-width">
                {has_fetched_user ? (
                    <div className="margin-bottom-20px">
                        <FsBuyUser
                            user_info_arr={user_info_arr}
                            active_ix={active_ix}
                            handleChangeUserInfo={handleChangeUserInfo}
                            handleAddComplete={onAddComplete}
                        />
                    </div>
                ) : null}
            </div>

            {has_fetched_user ? null : <div className="h-100vh"></div>}
        </div>
    );
}

export default FashionBuy;

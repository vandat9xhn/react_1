import React, { useState } from 'react';
import PropTypes from 'prop-types';
//
import { IS_MOBILE } from '../../../../../../../_constant/Constant';
//
import CmtActionsMb from '../mobile/_main/CmtActionMb';
import CmtActionPc from '../pc/_main/CmtActionPc';
//
import './CmtAction.scss';

//
CmtAction.propTypes = {};

//
function CmtAction({
    // for mobile
    show_action_mb,
    closeActionMb,

    handle_API_Action_L,
    handleAction,
}) {
    //
    const [state_obj, setStateObj] = useState({
        action_arr: [] || [
            {
                id: 0,
                name: '',
                title: '',
            },
        ],
        has_fetched: false,
        is_fetching: false,
    });

    const { action_arr, has_fetched, is_fetching } = state_obj;

    // ---- API

    //
    async function getData_Action() {
        setStateObj((state_obj) => ({
            ...state_obj,
            is_fetching: true,
        }));

        const data = await handle_API_Action_L();

        setStateObj((state_obj) => ({
            ...state_obj,
            action_arr: data,
            has_fetched: true,
            is_fetching: false,
        }));
    }

    //
    return (
        <div className="CmtAction">
            {IS_MOBILE ? (
                <CmtActionsMb
                    action_arr={action_arr}
                    is_show={show_action_mb}
                    is_fetching={is_fetching}
                    has_fetched={has_fetched}
                    //
                    getData_Action={getData_Action}
                    handleAction={handleAction}
                    handleClose={closeActionMb}
                />
            ) : (
                <CmtActionPc
                    action_arr={action_arr}
                    is_fetching={is_fetching}
                    has_fetched={has_fetched}
                    //
                    getData_Action={getData_Action}
                    handleAction={handleAction}
                />
            )}
        </div>
    );
}

export default CmtAction;

import React, { useState } from 'react';
import PropTypes from 'prop-types';
//
import CircleLoading from '../../../../../../waiting/circle_loading/CircleLoading';
import ActionsNormal from '../../../../../../actions/_main/ActionsNormal';
//
import CmtActionItem from '../item/CmtActionItem';

//
CmtAction.propTypes = {};

//
function CmtAction({ handle_API_Action_L, handleAction }) {
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
            is_fetching: false,
        }));

        const data = await handle_API_Action_L();

        setStateObj((state_obj) => ({
            ...state_obj,
            action_arr: data,
            has_fetched: true,
            is_fetching: false,
        }));
    }

    // -----

    //
    function callbackOpen(is_open = false) {
        is_open && !has_fetched && getData_Action();
    }

    //
    return (
        <ActionsNormal use_back={false} callbackOpen={callbackOpen}>
            <div className="CmtAction_contain font-500">
                <ul className="CmtAction_list list-none">
                    {action_arr.map((item, ix) => (
                        <li key={ix}>
                            <CmtActionItem
                                name={item.name}
                                title={item.title}
                                handleClick={handleAction}
                            />
                        </li>
                    ))}
                </ul>

                {is_fetching ? (
                    <div className="display-flex-center padding-y-5px">
                        <CircleLoading is_fetching={is_fetching} />
                    </div>
                ) : null}
            </div>
        </ActionsNormal>
    );
}

export default CmtAction;

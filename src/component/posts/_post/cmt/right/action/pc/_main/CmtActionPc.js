import React from 'react';
import PropTypes from 'prop-types';
//
import CircleLoading from '../../../../../../../waiting/circle_loading/CircleLoading';
import Actions from '../../../../../../../actions/_main/Actions';
//
import CmtActionItem from '../../item/CmtActionItem';
//
import './CmtActionPc.scss';
import { useBool } from '../../../../../../../../_hooks/useBool';
import { useForceUpdate } from '../../../../../../../../_hooks/UseForceUpdate';

//
CmtActionPc.propTypes = {};

//
function CmtActionPc({
    action_arr,
    has_fetched,
    is_fetching,

    getData_Action,
    handleAction,
}) {
    //
    const forceUpdate = useForceUpdate();

    //
    const { is_true, setIsTrue, toggleBool } = useBool();

    //  -----

    //
    async function callbackOpen() {
        !has_fetched ? getData_Action() : forceUpdate();
    }

    //
    function handleClose() {
        setIsTrue(false);
    }

    //
    return (
        <div className="CmtActionPc">
            <Actions
                is_show={is_true}
                toggleShow={toggleBool}
                callbackOpen={callbackOpen}
            >
                <div className="CmtActionPc_contain padding-10px font-500">
                    <ul className="CmtActionPc_list list-none">
                        {action_arr.map((item, ix) => (
                            <li key={ix}>
                                <CmtActionItem
                                    name={item.name}
                                    title={item.title}
                                    handleClose={handleClose}
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
            </Actions>
        </div>
    );
}

export default CmtActionPc;

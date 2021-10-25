import React from 'react';
import PropTypes from 'prop-types';
//
import { useBool } from '../../../../../../../../_hooks/useBool';
import { useForceUpdate } from '../../../../../../../../_hooks/UseForceUpdate';
//
import CircleLoading from '../../../../../../../waiting/circle_loading/CircleLoading';
import ActionsPc from '../../../../../../../actions/pc/ActionsPc';
//
import CmtActionItem from '../../item/CmtActionItem';
//
import './CmtActionPc.scss';
import CmtActionContain from '../../contain/CmtActionContain';

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
            <ActionsPc
                is_show={is_true}
                toggleShow={toggleBool}
                callbackOpen={callbackOpen}
            >
                <div className="CmtActionPc_contain padding-10px font-500">
                    <CmtActionContain
                        action_arr={action_arr}
                        is_fetching={is_fetching}
                        handleClose={handleClose}
                        handleAction={handleAction}
                    />
                </div>
            </ActionsPc>
        </div>
    );
}
CmtActionContain;
export default CmtActionPc;

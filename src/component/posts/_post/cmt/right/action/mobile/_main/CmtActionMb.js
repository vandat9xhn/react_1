import React from 'react';
import PropTypes from 'prop-types';
//
import ActionsMb from '../../../../../../../actions/mobile/_main/ActionsMb';
//
import CmtActionContain from '../../contain/CmtActionContain';
//
import './CmtActionsMb.scss';

//
CmtActionsMb.propTypes = {};

//
function CmtActionsMb({
    list_action_arr,
    is_show,
    is_fetching,
    has_fetched,

    handleClose,
    handleAction,
    getData_Action,
}) {
    //
    function callbackOpen() {
        !has_fetched && getData_Action();
    }

    //
    function handleTouchStart(e) {
        e.stopPropagation();
    }

    //
    return (
        <div onTouchStart={handleTouchStart}>
            <ActionsMb
                use_title={false}
                is_show={is_show}
                handleClose={handleClose}
                callbackOpen={callbackOpen}
            >
                <div className="CmtActionsMb pos-abs-center w-100per bg-primary overflow-y-auto scroll-width-0">
                    <CmtActionContain
                        list_action_arr={list_action_arr}
                        is_fetching={is_fetching}
                        handleClose={handleClose}
                        handleAction={handleAction}
                    />
                </div>
            </ActionsMb>
        </div>
    );
}

export default CmtActionsMb;

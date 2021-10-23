import React from 'react';
import PropTypes from 'prop-types';
//
import ActionsMb from '../../../../../../../actions/mobile/_main/ActionsMb';
//
import CmtActionItem from '../../item/CmtActionItem';
import CircleLoading from '../../../../../../../waiting/circle_loading/CircleLoading';
// 
import './CmtActionsMb.scss';

//
CmtActionsMb.propTypes = {};

//
function CmtActionsMb({
    action_arr,
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
    if (!is_show) {
        return null;
    }

    //
    return (
        <ActionsMb
            is_show={is_show}
            handleClose={handleClose}
            callbackOpen={callbackOpen}
        >
            <div className="CmtActionsMb pos-abs-center w-100per bg-primary overflow-y-auto scroll-width-0">
                <ul className="CmtAction_list list-none">
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
                    <div className="padding-y-15px">
                        <CircleLoading is_fetching={true} />
                    </div>
                ) : null}
            </div>
        </ActionsMb>
    );
}

export default CmtActionsMb;

import React from 'react';
import PropTypes from 'prop-types';
//
import { IS_MOBILE } from '../../../../../../../_constant/Constant';
//
import { useBool } from '../../../../../../../_hooks/useBool';
//
import Actions from '../../../../../../../component/actions/_main/Actions';
//
import FriendEditActionContain from '../contain/FriendEditActionContain';
//
import './FriendEditAction.scss';

//
FriendEditAction.propTypes = {};

//
function FriendEditAction({ openMessage, confirmDelete }) {
    //
    const { is_true, setIsTrue, toggleBool } = useBool();

    // ----

    //
    function handleClose() {
        setIsTrue(false);
    }

    // -----

    //
    function handleClose() {
        setIsTrue(false);
    }

    // ------

    const Contain = (
        <FriendEditActionContain
            openMessage={openMessage}
            confirmDelete={confirmDelete}
            handleClose={handleClose}
        />
    );

    //
    return (
        <div className="FriendEditAction">
            <Actions
                is_show={is_true}
                use_title={true}
                toggleShow={toggleBool}
                handleClose={handleClose}
            >
                {IS_MOBILE ? (
                    <div className="FriendEditAction_list-mb pos-abs bottom-0 left-0 w-100per bg-primary overflow-y-auto scroll-width-0">
                        {Contain}
                    </div>
                ) : (
                    <div className="FriendEditAction_list-pc padding-10px brs-8px bg-primary box-shadow-fb">
                        {Contain}
                    </div>
                )}
            </Actions>
        </div>
    );
}

export default FriendEditAction;

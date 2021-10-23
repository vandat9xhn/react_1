import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
//
import { toggleAppHiddenTemp } from '../../../../_some_function/AppHiddenTemp';
//
import PortalAtBody from '../../../portal/at_body/PortalAtBody';
// 
import './ActionsMb.scss';

//
ActionsMb.propTypes = {};

//
function ActionsMb({ class_actions, children, handleClose, callbackOpen }) {
    //
    useEffect(() => {
        callbackOpen && callbackOpen();
        toggleAppHiddenTemp({ is_hidden: true });

        return () => {
            toggleAppHiddenTemp({ is_hidden: false });
        };
    }, []);

    //
    return (
        <PortalAtBody>
            <div
                className={`ActionsMb pos-fixed-100per z-index-lv5 ${class_actions}`}
            >
                <div
                    className="pos-abs-100 bg-shadow-5"
                    onClick={handleClose}
                ></div>

                <div className="ActionsMb_contain">
                    {children}
                </div>
            </div>
        </PortalAtBody>
    );
}

export default ActionsMb;

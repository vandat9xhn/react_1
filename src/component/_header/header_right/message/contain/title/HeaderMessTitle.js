import React from 'react';
import PropTypes from 'prop-types';
//
import { useBool } from '../../../../../../_hooks/useBool';
//
import Actions from '../../../../../actions/_main/Actions';
// 
import HeaderMessSetting from '../../setting/HeaderMessSetting';
//
import './HeaderMessTitle.scss';

//
HeaderMessTitle.propTypes = {};

//
function HeaderMessTitle(props) {
    //
    const { is_true, setIsTrue, toggleBool } = useBool();

    // -----

    //
    function handleClose() {
        setIsTrue(false);
    }

    //
    return (
        <div className="HeaderMessTitle flex-between-center padding-10px">
            <h2 className="font-24px font-700">Messenger</h2>

            <div>
                <Actions
                    class_action_contain={'HeaderMessTitle_action'}
                    class_action_contain_mb="action-contain-mb-bottom"
                    is_show={is_true}
                    x_always={'right'}
                    //
                    handleClose={handleClose}
                    toggleShow={toggleBool}
                >
                    <HeaderMessSetting />
                </Actions>
            </div>
        </div>
    );
}

export default HeaderMessTitle;

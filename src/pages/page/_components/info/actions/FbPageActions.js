import React from 'react';
import PropTypes from 'prop-types';
//
import BtnPageCase from '../../../../../component/button/page_actions/_case/BtnPageCase';
// 
import './FbPageActions.scss';

//
FbPageActions.propTypes = {};

//
function FbPageActions({
    page_id,
    action_main_arr,
    has_liked,
    has_followed,

    handleAction,
}) {
    //
    return (
        <div className="FbPageActions">
            <BtnPageCase
                action_name={action_main_arr[0]}
                // use_title={use_title}
                // use_icon={use_icon}
                page_id={page_id}
                has_liked={has_liked}
                has_followed={has_followed}
                handleAction={handleAction}
            />
        </div>
    );
}

export default FbPageActions;

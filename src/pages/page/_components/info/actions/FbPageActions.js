import React from 'react';
import PropTypes from 'prop-types';
import BtnPageCase from '../../../../../component/button/page_actions/_case/BtnPageCase';

//
FbPageActions.propTypes = {};

//
function FbPageActions(props) {
    //
    function handleAction(params) {
        console.log(params);
    }

    //
    return (
        <BtnPageCase
            action_name="like"
            has_liked={true}
            handleAction={handleAction}
        />
    );
}

export default FbPageActions;

import React from 'react';
import PropTypes from 'prop-types';
//
import BtnActions from '../../actions/BtnActions';

//
BtnGroupJoin.propTypes = {
    ...BtnActions.propTypes,
};

//
function BtnGroupJoin({ handleAction }) {
    //
    function requestJoinGroup() {
        handleAction('join');
    }

    //
    return (
        <BtnActions
            className="bg-ccc"
            title="Join Group"
            handleClick={requestJoinGroup}
        />
    );
}

export default BtnGroupJoin;

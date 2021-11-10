import React from 'react';
import PropTypes from 'prop-types';
//
import FbSearchHistoryItemLayout from '../_layout/FbSearchHistoryItemLayout';
import FbSearchInputUser from '../../../_components/item/user/FbSearchInputUser';

//
FbSearchHistoryUser.propTypes = {};

//
function FbSearchHistoryUser({ user }) {
    //
    return (
        <FbSearchInputUser
            LayoutComponent={FbSearchHistoryItemLayout}
            user={user}
        />
    );
}

export default FbSearchHistoryUser;

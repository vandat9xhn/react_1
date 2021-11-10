import React from 'react';
import PropTypes from 'prop-types';
//
import FbSearchInputSearchItemLayout from '../_layout/FbSearchInputSearchItemLayout';
import FbSearchInputUser from '../../../_components/item/user/FbSearchInputUser';

//
FbSearchInputSearchUser.propTypes = {};

//
function FbSearchInputSearchUser({ user }) {
    //
    return (
        <FbSearchInputUser
            LayoutComponent={FbSearchInputSearchItemLayout}
            user={user}
        />
    );
}

export default FbSearchInputSearchUser;

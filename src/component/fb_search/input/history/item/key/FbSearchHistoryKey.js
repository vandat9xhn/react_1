import React from 'react';
import PropTypes from 'prop-types';
//
import FbSearchHistoryItemLayout from '../_layout/FbSearchHistoryItemLayout';
import FbSearchInputKey from '../../../_components/item/key/FbSearchInputKey';

//
FbSearchHistoryKey.propTypes = {};

//
function FbSearchHistoryKey({ search_key, Icon }) {
    //
    return (
        <FbSearchInputKey
            LayoutComponent={FbSearchHistoryItemLayout}
            search_key={search_key}
            Icon={Icon}
        />
    );
}

export default FbSearchHistoryKey;

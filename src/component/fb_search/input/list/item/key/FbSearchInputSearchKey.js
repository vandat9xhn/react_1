import React from 'react';
import PropTypes from 'prop-types';
//
import IconsInput from '../../../../../../_icons_svg/Icons_input/IconsInput';
//
import FbSearchInputItemLayout from '../_layout/FbSearchInputSearchItemLayout';
import FbSearchInputKey from '../../../_components/item/key/FbSearchInputKey';

//
FbSearchInputSearchKey.propTypes = {};

//
function FbSearchInputSearchKey({ search_key }) {
    //
    return (
        <FbSearchInputKey
            LayoutComponent={FbSearchInputItemLayout}
            search_key={search_key}
            Icon={<IconsInput y={200} />}
        />
    );
}

export default FbSearchInputSearchKey;

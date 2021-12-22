import React from 'react';
import PropTypes from 'prop-types';
//
import IconsInput from '../../../../../../_icons_svg/Icons_input/IconsInput';

import './FbSearchInputKey.scss';

//
FbSearchInputKey.propTypes = {
    LayoutComponent: PropTypes.func,
    search_key: PropTypes.string,
    Icon: PropTypes.element,
};

FbSearchInputKey.defaultProps = {};

//
function FbSearchInputKey({ LayoutComponent, search_key, Icon }) {
    //
    return (
        <div className="FbSearchInputKey">
            <LayoutComponent
                link_to={`/fb-search?q=${search_key}`}
                left_elm={<div className="btn-icon-36px bg-fb">{Icon}</div>}
                center_elm={<div>{search_key}</div>}
            />
        </div>
    );
}

export default FbSearchInputKey;

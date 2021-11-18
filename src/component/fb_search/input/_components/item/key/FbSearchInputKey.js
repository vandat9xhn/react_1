import React from 'react';
import PropTypes from 'prop-types';
//
import './FbSearchInputKey.scss';

//
FbSearchInputKey.propTypes = {};

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

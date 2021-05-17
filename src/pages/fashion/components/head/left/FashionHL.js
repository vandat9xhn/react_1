import React from 'react';
import PropTypes from 'prop-types';
import IconFav from '../../../../../_icons_svg/_icon_fav/IconFav';
import { Link } from 'react-router-dom';

import './FashionHL.scss';
//
FashionHL.propTypes = {
    
};

//
function FashionHL(props) {
    return (
        <div>
            <div className="display-flex">
                <div className="FashionHL_col">
                    <Link className="normal-text" to="/fashion">
                        <div className="FashionHL_icon">
                            <IconFav size_icon="3rem"/>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default FashionHL;
import React from 'react';
import PropTypes from 'prop-types';

import FashionOL from '../left/FashionOL';
import FashionOR from '../right/FashionOR';

import './FashionOwner.scss';
//
FashionOwner.propTypes = {};

function FashionOwner({ owner_profile, owner_info }) {
    //
    return (
        <div className="brs-5px box-shadow-1">
            <div className="FashionOwner_row">
                <div className="FashionOwner_left">
                    <FashionOL owner_profile={owner_profile} />
                </div>

                <div className="FashionOwner_right">
                    <FashionOR owner_info={owner_info} />
                </div>
            </div>
        </div>
    );
}

export default FashionOwner;

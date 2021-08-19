import React from 'react';
import PropTypes from 'prop-types';
//
import './FashionOwner.scss';
//
import ShopActivity from '../../../../components/shop_activity/ShopActivity';
// 
import FashionOL from '../left/FashionOL';

//
FashionOwner.propTypes = {};

//
function FashionOwner({ owner_profile, owner_info }) {
    //
    return (
        <div className="FashionOwner bg-primary">
            <div className="FashionOwner_row flex-between-center">
                <div className="FashionOwner_left">
                    <FashionOL {...owner_profile} />
                </div>

                <div className="FashionOwner_right flex-grow-1">
                    <ShopActivity owner_info={owner_info} />
                </div>
            </div>
        </div>
    );
}

export default FashionOwner;

import React from 'react';
import PropTypes from 'prop-types';
//
import ShopActivity from '../../../../../components/shop_activity/ShopActivity';

//
ShopPersonalRight.propTypes = {};

//
function ShopPersonalRight({ owner_info }) {
    return (
        <div>
            <div>
                <ShopActivity owner_info={owner_info} />
            </div>
        </div>
    );
}

export default ShopPersonalRight;

import React from 'react';
import PropTypes from 'prop-types';
//
import FsHotDeal from '../../../components/hot_deal/_main/FsHotDeal';

//
FsShopHotDeal.propTypes = {};

//
function FsShopHotDeal({ type_id }) {
    //
    return (
        <div>
            <FsHotDeal
                // item_info
                params_api={{
                    type_model: type_id,
                    type_request: 'shop_hot_deal',
                }}
            />
        </div>
    );
}

export default FsShopHotDeal;

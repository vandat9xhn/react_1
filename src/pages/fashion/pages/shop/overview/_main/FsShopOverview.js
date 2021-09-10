import React from 'react';
import PropTypes from 'prop-types';
//
import FsSOverviewLeading from '../leading/FsSOverviewLeading';
import FsSOverviewInfo from '../info/FsSOverviewInfo';
// 
import './FsShopOverview.scss';

//
FsShopOverview.propTypes = {};

//
function FsShopOverview({ shop_info }) {
    //
    return (
        <div className="FsShopOverview fashion-width padding-y-20px">
            <div className="FsShopOverview_row h-100per display-flex">
                <div className="FsShopOverview_leading">
                    <FsSOverviewLeading shop_info={shop_info} />
                </div>

                <div className="FsShopOverview_info flex-grow-1">
                    <FsSOverviewInfo shop_info={shop_info} />
                </div>
            </div>
        </div>
    );
}

export default FsShopOverview;

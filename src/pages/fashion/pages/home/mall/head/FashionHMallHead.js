import React from 'react';
import PropTypes from 'prop-types';
//
import FashionSeeMoreOnTitle from '../../../../components/see_more/on_title/FashionSeeMoreOnTitle';
//
import './FashionHMallHead.scss';
import { IS_MOBILE } from '../../../../../../_constant/Constant';

//
FashionHMallHead.propTypes = {};

//
function FashionHMallHead(props) {
    //
    return (
        <div className="FashionHMallHead pos-rel">
            <div className="FashionHMallHead_contain flex-between-center fashion-head-padding">
                <div className="FashionHMallHead_row display-flex align-items-center">
                    <h2 className="font-16px font-500 color-fashion-mall">
                        SHOPEE MALL
                    </h2>

                    <div className="FashionHMallHead_right display-flex align-items-center margin-left-5px font-16px text-secondary">
                        <div className="FashionHMallHead_right_item padding-8px">
                            <span>
                                {IS_MOBILE ? '' : '7 Ngày'} Miễn Phí Trả Hàng
                            </span>
                        </div>

                        <div className="FashionHMallHead_right_item padding-8px">
                            <span>
                                {IS_MOBILE ? '' : 'Hàng'} Chính Hãng 100%
                            </span>
                        </div>

                        <div className="FashionHMallHead_right_item padding-8px">
                            <span>
                                {IS_MOBILE
                                    ? 'Giao miễn phí'
                                    : 'Miễn Phí Vận Chuyển '}
                            </span>
                        </div>
                    </div>
                </div>

                <div className="FashionHMallHead_more padding-4px">
                    <FashionSeeMoreOnTitle
                        link_to="/fashion/top_search"
                        title="Xem thêm"
                        class_color={
                            IS_MOBILE ? 'text-secondary' : 'color-fashion-mall'
                        }
                    />
                </div>
            </div>
        </div>
    );
}

export default FashionHMallHead;

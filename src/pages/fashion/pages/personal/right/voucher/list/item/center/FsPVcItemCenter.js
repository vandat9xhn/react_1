import React from 'react';
import PropTypes from 'prop-types';
// 
import { formatLocalDateString } from '../../../../../../../../../_some_function/FormatDate';
// 
import FsShopDealLabel from '../../../../../../../components/shop_deal_label/FsShopDealLabel';

//
FsPVcItemCenter.propTypes = {};

//
function FsPVcItemCenter({
    img_tag,
    
    title_center_1,
    title_center_2,
    title_center_3,
    
    used_count,
    end_time,
}) {
    //
    return (
        <div className="FsPVcItemCenter h-100per padding-10px">
            <div>
                {img_tag ? (
                    <img src={img_tag} alt="" width="60" height="14" />
                ) : null}

                <span>{title_center_1}</span>
            </div>

            <div>{title_center_2}</div>

            {title_center_3 ? (
                <div className="margin-top-5px margin-bottom-5px width-fit-content line-14px">
                    <FsShopDealLabel label={title_center_3} />
                </div>
            ) : null}

            {used_count ? (
                <div className="FsPVoucherItem_bg_count pos-rel border-blur overflow-hidden">
                    <div
                        className="FsPVoucherItem_bg_count_contain pos-abs left-0 top-0 h-100per"
                        style={{
                            width: used_count,
                        }}
                    ></div>
                </div>
            ) : null}

            <div className="font-12px">
                {used_count ? (
                    <span className="margin-right-5px color-fashion">
                        Đã dùng {used_count}
                    </span>
                ) : null}

                <span className="text-del">
                    HSD: {formatLocalDateString(end_time)}
                </span>
            </div>
        </div>
    );
}

export default FsPVcItemCenter;

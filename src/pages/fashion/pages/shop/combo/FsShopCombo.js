import React from 'react';
import PropTypes from 'prop-types';
//
import { handle_API_FsProduct_L } from '../../../../../_handle_api/fashion/FashionHandleAPI';
//
import RowProducts from '../../../components/row_products/_main/RowProducts';
import FashionSeeMoreOnTitle from '../../../components/see_more/on_title/FashionSeeMoreOnTitle';
import FsShopDealLabel from '../../../components/shop_deal_label/FsShopDealLabel';
//
import './FsShopCombo.scss';
import { IS_MOBILE } from '../../../../../_constant/Constant';

//
FsShopCombo.propTypes = {
    type_id: PropTypes.number,
    title: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
    has_more: PropTypes.bool,
    title_more: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
};

FsShopCombo.defaultProps = {
    has_more: true,
    title_more: 'Xem tất cả',
};

//
function FsShopCombo({ type_id, title, has_more, title_more }) {
    //
    async function handle_API_L() {
        return handle_API_FsProduct_L(0, 'shop_combo', {
            type_model: type_id,
        });
    }

    //
    return (
        <div className="FsShopCombo">
            <RowProducts
                handle_API_L={handle_API_L}
                use_limit_count={true}
                limit_count={6}
                use_more={false}
                use_next_prev={false}
                item_props={
                    {
                        // show_address: false,
                    }
                }
                // link_to_more={`/fashion/search?`}
                // title_more="Xem thêm"
                // class_color_more=""
                title={
                    <div className="flex-between-center">
                        {IS_MOBILE ? (
                            <div className="font-14px">{title}</div>
                        ) : (
                            <div className="display-flex">
                                <h3 className="margin-right-10px font-16px font-500 text-upper text-secondary">
                                    BUNDLE DEALS
                                </h3>
                                <FsShopDealLabel label={title} />
                            </div>
                        )}

                        {has_more ? (
                            <FashionSeeMoreOnTitle
                                link_to={`/fashion/search?`}
                                title={title_more}
                            />
                        ) : null}
                    </div>
                }
            />
        </div>
    );
}

export default FsShopCombo;

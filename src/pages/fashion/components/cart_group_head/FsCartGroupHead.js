import React from 'react';
import PropTypes from 'prop-types';
//
import FsShopDealLabel from '../shop_deal_label/FsShopDealLabel';
import FashionSeeMoreOnTitle from '../see_more/on_title/FashionSeeMoreOnTitle';
import { IS_MOBILE } from '../../../../_constant/Constant';
//

//
FsCartGroupHead.propTypes = {
    title_main: PropTypes.string,
    title_main: PropTypes.string,
    link_to: PropTypes.string,
    title_more: PropTypes.string,
};

//
function FsCartGroupHead({ label_deal, title_main, title_more, link_to }) {
    //
    return (
        <div className="FsCartGroupHead padding-8px bg-fashion-heart">
            <div className="FsCartGroupHead_row display-flex align-items-center">
                <div className="flex-shrink-0 margin-right-10px">
                    <FsShopDealLabel
                        label={label_deal}
                        class_main="fashion-value-padding color-fashion font-10px"
                    />
                </div>

                <div
                    className={`margin-right-10px text-secondary ${
                        IS_MOBILE ? 'font-12px' : ''
                    }`}
                >
                    {title_main}
                </div>

                <div className="flex-shrink-0">
                    <FashionSeeMoreOnTitle
                        link_to={link_to}
                        title={title_more}
                    />
                </div>
            </div>
        </div>
    );
}

export default FsCartGroupHead;

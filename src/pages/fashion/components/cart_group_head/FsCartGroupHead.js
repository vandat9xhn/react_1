import React from 'react';
import PropTypes from 'prop-types';
//
import FsShopDealLabel from '../shop_deal_label/FsShopDealLabel';
import FashionSeeMoreOnTitle from '../see_more/on_title/FashionSeeMoreOnTitle';
//

//
FsCartGroupHead.propTypes = {
    title_main: PropTypes.string,
    title_main: PropTypes.string,
    link_to: PropTypes.string,
    title_more: PropTypes.string,
};

//
function FsCartGroupHead({
    label_deal,
    title_main,
    title_more,
    link_to,
}) {
    //
    return (
        <div className="FsCartGroupHead padding-8px bg-fashion-heart">
            <div className="FsCartGroupHead_row display-flex align-items-center">
                <div className="margin-right-10px">
                    <FsShopDealLabel
                        label={label_deal}
                        class_main="fashion-value-padding color-fashion font-10px"
                    />
                </div>

                <div className="margin-right-10px">{title_main}</div>

                <div>
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

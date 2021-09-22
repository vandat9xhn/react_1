import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
//
import { formatNum } from '../../../_some_function/FormatNum';
//
import VidPicObserve from '../../vid_pic/observe/VidPicObserve';
import ProductItemSkeleton from '../skeleton/ProductItemSkeleton';
//
import './ProductItem.scss';

//
ProductItem.propTypes = {
    num_row_info: PropTypes.number,

    link: PropTypes.string,
    img: PropTypes.string,
    name: PropTypes.string,
    in_stock: PropTypes.string,

    new_price: PropTypes.number,
    old_price: PropTypes.number,
    discount: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    installment: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

ProductItem.defaultProps = {
    num_row_info: 4,
};

//
function ProductItem({
    num_row_info,

    link,
    img,
    name,
    in_stock,
    new_price,
    old_price,
    discount,
    installment,
}) {
    //
    return name ? (
        <div className="ProductItem padding-8px pos-rel" title={name}>
            <Link to={link} className="normal-text hv-cl-blue">
                <div className="ProductItem_head pos-rel padding-top-100per">
                    <VidPicObserve
                        vid_pic={img}
                        type="img"
                        img_props={{
                            className:
                                'ProductItem_head-img pos-abs left-0 bottom-0 wh-100 brs-5px object-fit-cover',
                        }}
                    />
                </div>

                <div className="ProductItem_foot font-14px">
                    <div className="ProductItem_name wk-box-vertical line-clamp-2 overflow-hidden font-400">
                        {name}
                    </div>

                    <div className="text-red">{in_stock}</div>

                    <div className="ProductItem_price text-nowrap">
                        <span className="margin-right-5px font-400 font-italic color-fashion">
                            {formatNum(new_price)}

                            <sup className="font-10px">đ</sup>
                        </span>

                        {old_price ? (
                            <del className="text-del font-11px">
                                {formatNum(old_price)}

                                <sup className="font-10px">đ</sup>
                            </del>
                        ) : null}
                    </div>
                </div>
            </Link>

            {discount && (
                <div className="ProductItem_discount text-red">
                    {-discount + '%'}
                </div>
            )}

            {installment !== undefined && (
                <div className="ProductItem_installment brs-5px">
                    {installment}%
                </div>
            )}
        </div>
    ) : (
        <ProductItemSkeleton num_row_info={num_row_info} />
    );
}

export default ProductItem;

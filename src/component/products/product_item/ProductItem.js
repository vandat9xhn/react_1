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
    img_or_dataset: PropTypes.bool,

    link: PropTypes.string,
    img: PropTypes.string,
    name: PropTypes.string,
    in_stock: PropTypes.string,
    new_price: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    old_price: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    discount: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    installment: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

ProductItem.defaultProps = {
    img_or_dataset: true,
};

//
function ProductItem({
    img_or_dataset,

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
        <div className="ProductItem padding-8px position-rel" title={name}>
            <Link to={link} className="normal-text hv-cl-blue">
                <div className="ProductItem_head">
                    {img_or_dataset ? (
                        <img src={img} alt="" />
                    ) : (
                        <VidPicObserve vid_pic={img} />
                    )}
                </div>

                <div className="ProductItem_foot">
                    <div className="ProductItem_name label-field">{name}</div>

                    {in_stock && <div className="text-red">{in_stock}</div>}

                    <div className="ProductItem_price">
                        {new_price && (
                            <div className="label-field font-italic">
                                {formatNum(new_price)}
                            </div>
                        )}

                        {old_price && (
                            <div>
                                <span className="ProductItem_old-price">
                                    {formatNum(old_price)}
                                </span>
                                <sup className="dv-vnd">đ</sup>
                            </div>
                        )}
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
        <ProductItemSkeleton />
    );
}

export default ProductItem;

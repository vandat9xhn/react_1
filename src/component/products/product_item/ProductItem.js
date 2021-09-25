import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
//
import { formatNum } from '../../../_some_function/FormatNum';
//
import VidPicObserve from '../../vid_pic/observe/VidPicObserve';
import SkeletonDiv from '../../skeleton/skeleton_div/SkeletonDiv';
//
import image_loading from '../../../../image/image_loading.svg';
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
    num_row_info: 3,
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
    return (
        <div className="ProductItem padding-8px pos-rel" title={name}>
            <Link to={link} className="normal-text hv-cl-blue">
                <div className="ProductItem_head pos-rel padding-top-100per">
                    {name ? (
                        <VidPicObserve
                            vid_pic={img}
                            type="img"
                            img_props={{
                                className:
                                    'ProductItem_head-img pos-abs left-0 bottom-0 wh-100 brs-5px object-fit-cover',
                            }}
                        />
                    ) : (
                        <img
                            className="pos-abs left-0 bottom-0 wh-100 brs-5px object-fit-cover"
                            src={image_loading}
                            alt=""
                        />
                    )}
                </div>

                {name ? (
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
                ) : (
                    <SkeletonDiv num={num_row_info} />
                )}

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
            </Link>
        </div>
    );
}

export default ProductItem;

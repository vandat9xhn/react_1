import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
//
import { formatNum } from '../../../_some_function/FormatNum';
import { observerVidPic } from '../../../_some_function/ImageObserve';
import SkeletonDiv from '../../skeleton/skeleton_div/SkeletonDiv';
//
import image_loading from '../../../../image/image_loading.svg';
import './ProductItem.scss';

ProductItem.propTypes = {
    // link
    link: PropTypes.string,
    // index for image observer
    img_or_dataset: PropTypes.bool,
    // properties
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
function ProductItem(props) {
    const {
        link,
        img_or_dataset,
        img,
        name,
        in_stock,
        new_price,
        old_price,
        discount,
        installment,
    } = props;

    //
    const ref_image = useRef(null);

    //
    useEffect(() => {
        ref_image.current != null &&
            observerVidPic(ref_image.current, 'data-src');
    }, [img]);

    //
    function handleOnClickLink(e) {
        !name && e.preventDefault();
    }

    // 
    return (
        <div className="ProductItem" title={name}>
            <Link
                to={link}
                className="ProductItem_link normal-text"
                onClick={handleOnClickLink}
            >
                <div className="ProductItem_img">
                    {!img ? (
                        <img src={image_loading} alt="" />
                    ) : img_or_dataset ? (
                        <img src={img} alt="" />
                    ) : (
                        <img ref={ref_image} data-src={img} alt="" />
                    )}
                </div>

                {name ? (
                    <div className="ProductItem_info">
                        <div className="ProductItem_name label-field">{name}</div>

                        {in_stock && (
                            <div className="text-red">{in_stock}</div>
                        )}

                        <div className="ProductItem_price display-flex align-items-center flex-wrap">
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
                    </div>
                ) : (
                    <SkeletonDiv num={2} />
                )}
            </Link>
        </div>
    );
}

export default ProductItem;

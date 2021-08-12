import React from 'react';
import PropTypes from 'prop-types';
//
import { formatNum } from '../../../../../_some_function/FormatNum';
//
import SkeletonDiv from '../../../../../component/skeleton/skeleton_div/SkeletonDiv';
//
import PhoneLaptopBuying from '../buying/PhoneLaptopBuying';
//
import image_loading from '../../../../../../image/image_loading.svg';
import './ProductDetail.scss';

//
ProductDetail.propTypes = {
    product: PropTypes.object,
};

//
function ProductDetail({ product, openTypeBuy, has_fetched }) {
    const {
        url,
        name,
        new_price,
        old_price,
        in_stock,
        discount,
        installment,
        promotion,
        gift,
        product_sets,
        cpu,
        os,
        ram,
        internal_memory,
        camera,
        memory_stick,
    } = product;

    const product_specifications = has_fetched
        ? [
              { name: 'CPU', value: cpu },
              { name: 'OS', value: os },
              { name: 'RAM', value: ram },
              { name: 'Internal memory', value: internal_memory },
              { name: 'Camera', value: camera },
              { name: 'Memory stick', value: memory_stick },
          ]
        : undefined;

    return (
        <div className="ProductDetail">
            <div className="padding-8px">
                {has_fetched ? (
                    <h2 className="ProductDetail_name margin-0">{name}</h2>
                ) : (
                    <h2 className="ProductDetail_name-skeleton margin-0">
                        <SkeletonDiv />
                    </h2>
                )}
            </div>

            <hr className="App_hr-bg" />

            <div className="ProductDetail_contain">
                <div className="ProductDetail_row display-flex">
                    <div className="ProductDetail_col">
                        <div className="ProductDetail_image">
                            <div className="ProductDetail__img pos-rel">
                                <img
                                    className="wh-100"
                                    src={url || image_loading}
                                    alt=""
                                />

                                <div className="ProductDetail__discount">
                                    -{discount}%
                                </div>
                                <div className="ProductDetail__installment">
                                    Installment {installment}%
                                </div>
                            </div>

                            {has_fetched ? (
                                <div>
                                    <div>
                                        {formatNum(new_price)} VND{' '}
                                        <del>{formatNum(old_price)}</del>
                                    </div>

                                    <div className="text-red">{in_stock}</div>
                                </div>
                            ) : (
                                <SkeletonDiv num={2} />
                            )}
                        </div>
                    </div>

                    <div className="ProductDetail_col">
                        <div>
                            <h3 className="ProductDetail_specs_title">
                                * Promotion:{' '}
                            </h3>

                            {has_fetched ? (
                                promotion
                                    .split('\n')
                                    .map((item, index) => (
                                        <div
                                            key={`ProductDetail_promotion_${index}`}
                                        >
                                            {item}
                                        </div>
                                    ))
                            ) : (
                                <SkeletonDiv num={6} />
                            )}
                        </div>

                        <div>{gift}</div>
                    </div>

                    <div className="ProductDetail_col">
                        <div>
                            <h3 className="ProductDetail_specs_title">
                                * Product sets:{' '}
                            </h3>
                            {has_fetched ? (
                                product_sets
                                    .split('\n')
                                    .map((item, index) => (
                                        <div
                                            key={`ProductDetail_product_sets_${index}`}
                                        >
                                            {item}
                                        </div>
                                    ))
                            ) : (
                                <SkeletonDiv num={6} />
                            )}
                        </div>
                    </div>
                </div>
            </div>

            <hr className="App_hr-bg" />

            <div className="ProductDetail_specs">
                <h3 className="ProductDetail_specs_title">
                    * Product specifications:
                </h3>

                {has_fetched ? (
                    product_specifications.map((item, index) => (
                        <div key={`ProductDetail_product_specs_${index}`}>
                            - {item.name}: {item.value}
                        </div>
                    ))
                ) : (
                    <SkeletonDiv num={6} />
                )}
            </div>

            <div>
                <PhoneLaptopBuying openTypeBuy={openTypeBuy} />
            </div>
        </div>
    );
}

export default ProductDetail;

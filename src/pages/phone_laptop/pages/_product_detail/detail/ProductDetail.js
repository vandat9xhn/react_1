import React from 'react';
import PropTypes from 'prop-types';

import './ProductDetail.scss';
import SkeletonDiv from '../../../../../component/skeleton/skeleton_div/SkeletonDiv';
import PhoneLaptopBuying from '../buying/PhoneLaptopBuying';
import image_loading from '../../../../../../image/image_loading.svg';
import { formatNum } from '../../../../../_some_function/FormatNum';

//
function ProductDetail(props) {
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
    } = props.product;
    const {openTypeBuy} = props;

    const product_specifications = cpu ? ([
              { name: 'CPU', value: cpu },
              { name: 'OS', value: os },
              { name: 'RAM', value: ram },
              { name: 'Internal memory', value: internal_memory },
              { name: 'Camera', value: camera },
              { name: 'Memory stick', value: memory_stick },
        ]) : undefined;

    return (
        <div className="ProductDetail">
            {/* name */}
            <div className="ProductDetail_name">{name}</div>
            <hr className="App_hr-bg" />

            {/* main */}
            <div className="ProductDetail_contain">
                <div className="ProductDetail_row">
                    {/* col image */}
                    <div className="ProductDetail_col">
                        <div className="ProductDetail_image">
                            <div className="ProductDetail__img">
                                
                                <img src={url || image_loading} alt="" />

                                <div className="ProductDetail__discount">
                                    -{discount}%
                                </div>
                                <div className="ProductDetail__installment">
                                    Installment {installment}%
                                </div>
                            </div>
                            {new_price ? (
                                <div>
                                    <div>
                                        {formatNum(new_price)} VND <del>{formatNum(old_price)}</del>
                                    </div>

                                    <div className="text-red">{in_stock}</div>
                                </div>
                            ) : (
                                <SkeletonDiv num={2} />
                            )}
                        </div>
                    </div>

                    {/* col promotion */}
                    <div className="ProductDetail_col">
                        <div>
                            <div className="label-field">* Promotion: </div>

                            {promotion ? (
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

                        {/* gift */}
                        <div>{gift}</div>
                    </div>

                    {/* col products */}
                    <div className="ProductDetail_col">
                        <div>
                            <div className="label-field">* Product sets: </div>
                            {product_sets ? (
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

            {/* product specifications */}
            <div className="ProductDetail_specs">
                <div className="label-field">* Product specifications:</div>
                {product_specifications ? (
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
                <PhoneLaptopBuying openTypeBuy={openTypeBuy}/>
            </div>
        </div>
    );
}

ProductDetail.propTypes = {
    product: PropTypes.object,
};

export default ProductDetail;

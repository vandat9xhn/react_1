import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
//
import SkeletonDiv from '../../skeleton/skeleton_div/SkeletonDiv';
//
import PLProductHead from '../head/PLProductHead';
import PLProductFoot from '../foot/PLProductFoot';
import PLProductTypes from '../types/_main/PLProductTypes';
import PLProductCompare from '../compare/PLProductCompare';
//
import './PLProduct.scss';

//
PLProduct.propTypes = {
    product_obj: PropTypes.shape({}),
    use_compare: PropTypes.bool,
    num_row_info: PropTypes.number,
};

PLProduct.defaultProps = {
    num_row_info: 5,
    use_compare: true,
};

//
function PLProduct({ num_row_info, product_obj, use_compare, addToCompare }) {
    //
    const {
        id,
        name,
        type_arr,

        in_stock,
        is_coming,

        new_price,
        old_price,
        discount,
        installment,

        cheap_price,
        gift_str,
        rating_avg,
        rating_count,
    } = product_obj;

    //
    const [type_ix, setTypeIx] = useState(0);

    //
    return (
        <div className="PLProduct h-100per pos-rel">
            <Link
                to={`/phone-laptop:${id}`}
                className="display-block h-100per padding-8px color-inherit"
            >
                <div className="PLProduct_head margin-bottom-10px">
                    <PLProductHead
                        img={type_arr ? type_arr[type_ix].img : ''}
                        installment={installment}
                        has_fetched={!!name}
                    />
                </div>

                {name ? (
                    <div className="PLProduct_foot">
                        {type_arr.length >= 2 ? (
                            <div className="margin-bottom-10px">
                                <PLProductTypes
                                    type_arr={type_arr}
                                    type_ix={type_ix}
                                    handleChangeType={setTypeIx}
                                />
                            </div>
                        ) : null}

                        <div>
                            <PLProductFoot
                                name={name}
                                new_price={new_price}
                                old_price={old_price}
                                discount={discount}
                                cheap_price={cheap_price}
                                gift_str={gift_str}
                                rating_avg={rating_avg}
                                rating_count={rating_count}
                                is_coming={is_coming}
                                in_stock={in_stock}
                            />
                        </div>

                        {use_compare ? (
                            <div>
                                <PLProductCompare addToCompare={addToCompare} />
                            </div>
                        ) : null}
                    </div>
                ) : (
                    <SkeletonDiv num={num_row_info} />
                )}
            </Link>
        </div>
    );
}

export default PLProduct;

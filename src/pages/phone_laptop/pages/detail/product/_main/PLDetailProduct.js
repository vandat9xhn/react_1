import React, { useRef } from 'react';
import PropTypes from 'prop-types';
//
import { IS_MOBILE } from '../../../../../../_constant/Constant';
//
import { handleScrollSmooth } from '../../../../../../_some_function/handleScrollSmooth';
//
import PLDetailProductMb from '../mobile/PLDetailProductMb';
import PLDetailProductPc from '../pc/PLDetailProductPc';
//
import './PLDetailProduct.scss';

//
PLDetailProduct.propTypes = {};

//
function PLDetailProduct(props) {
    //
    const { group_arr, has_two_price, offer_obj, offer_2_obj } =
        props.product_obj;

    //
    const type = group_arr[0].find((item) => item.is_active).title;
    const is_price_2 = has_two_price && props.price_ix == 1;

    const c_offer_obj = is_price_2 ? offer_2_obj : offer_obj;

    //
    const ref_rating_elm = useRef(null);

    // -------

    //
    function goToRating() {
        handleScrollSmooth(() => {
            ref_rating_elm.current.scrollIntoView();
        });
    }

    //
    const more_props = {
        type: type,
        is_price_2: is_price_2,
        c_offer_obj: c_offer_obj,
        ref_rating_elm: ref_rating_elm,
        goToRating: goToRating,
    };

    //
    return (
        <div className="PLDetailProduct">
            {IS_MOBILE ? (
                <PLDetailProductMb {...props} {...more_props} />
            ) : (
                <PLDetailProductPc {...props} {...more_props} />
            )}
        </div>
    );
}

export default PLDetailProduct;

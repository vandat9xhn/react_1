import React from 'react';
import PropTypes from 'prop-types';
// 
import { GetIdSlug } from '../../../../../_some_function/GetIdSlug';
//
import FashionH from '../../../components/head/_main/FashionH';
import ShopHead from '../shop_head/_main/ShopHead';
import ShopBody from '../shop_body/_main/ShopBody';

//
Shop.propTypes = {};

//
function Shop(props) {
    //
    const { id } = GetIdSlug();

    //
    return (
        <div>
            <div className="FashionItem_head">
                <FashionH />
            </div>

            {/* <div>
                <ShopHead id={id} />
            </div>

            <div>
                <ShopBody id={id} />
            </div> */}
        </div>
    );
}

export default Shop;

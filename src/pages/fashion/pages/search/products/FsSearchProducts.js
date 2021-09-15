import React from 'react';
import PropTypes from 'prop-types';
//
import FashionFaceItem from '../../../components/face_item/_main/FashionFaceItem';
//
import './FsSearchProducts.scss';

//
FsSearchProducts.propTypes = {
    products: PropTypes.array,
};

//
function FsSearchProducts({ products }) {
    //
    return (
        <div className="FsSearchProducts">
            <ul className="display-flex flex-wrap list-none">
                {products.map((item) => (
                    <li
                        key={`${item.id}`}
                        className="FsSearchProducts_item padding-4px"
                    >
                        <FashionFaceItem
                            id={item.id}
                            img={item.img}
                            is_like={item.is_like}
                            is_plus={item.is_plus}
                            is_mall={item.is_mall}
                            flash_img={item.flash_img}
                            discount={item.discount}
                            name={item.name}
                            rate_avg={item.rate_avg}
                            sold={item.sold}
                            //
                            shop_deals={item.shop_deals}
                            shop_discount={item.shop_discount}
                            address={item.address}
                            //
                            old_price={item.old_price}
                            new_price={item.new_price}
                            old_price_max={item.old_price_max}
                            new_price_max={item.new_price_max}
                            //
                            use_same={false}
                        />
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default FsSearchProducts;

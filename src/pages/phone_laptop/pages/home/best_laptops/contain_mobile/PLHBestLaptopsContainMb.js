import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
//
import PLProduct from '../../../../../../component/pl_product/_main/PLProduct';
// 
import './PLHBestLaptopsContainMb.scss';

//
PLHBestLaptopsContainMb.propTypes = {};

//
function PLHBestLaptopsContainMb({ product_arr, count_laptop, count_tablet }) {
    //
    return (
        <div>
            <ul className="display-flex flex-wrap list-none">
                {product_arr.map((product_obj) => (
                    <li key={product_obj.id} className="PLHBestLaptopsContainMb_item">
                        <PLProduct
                            product_obj={product_obj}
                            use_type={false}
                            use_compare={false}
                        />
                    </li>
                ))}
            </ul>
            
            {[
                {
                    count: count_laptop,
                    name: 'laptop',
                    link_to: '/phone-laptop-laptops',
                },
                { count: count_tablet, name: 'tablet', link_to: '' },
            ].map((item, ix) => (
                <Link
                    key={ix}
                    className="display-block margin-top-10px margin-x-10px padding-y-8px border-blur brs-4px text-align-center color-inherit cursor-pointer"
                    to={item.link_to}
                >
                    Xem tất cả <b>{item.count}</b> {item.name}
                </Link>
            ))}
        </div>
    );
}

export default PLHBestLaptopsContainMb;

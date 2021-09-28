import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
//
import AllProducts from '../../../components/all_product/AllProducts';
//
import './Phones.scss';

//
function Phones() {
    //
    useEffect(() => {
        document.title = 'Phone';
    }, []);

    //
    return (
        <div className="Phones">
            <AllProducts
                product_type="phone"
                brand_arr={[
                    { title: 'Samsung', checked: false, filter_key: 'ss' },
                    { title: 'iPhone', checked: false, filter_key: 'ip' },
                    { title: 'Oppo', checked: false, filter_key: 'op' },
                    { title: 'Xiaomi', checked: false, filter_key: 'xm' },
                    { title: 'Realme', checked: false, filter_key: 'rm' },
                    { title: 'Nokia', checked: false, filter_key: 'nk' },
                    { title: 'Vivo', checked: false, filter_key: 'vv' },
                ]}
                price_arr={[
                    {
                        title: 'Dưới 2tr',
                        checked: false,
                        filter_key: '1',
                    },
                    {
                        title: 'Từ 2 - 4 triệu',
                        checked: false,
                        filter_key: '2',
                    },
                    {
                        title: 'Từ 4 - 8 triệu',
                        checked: false,
                        filter_key: '3',
                    },
                    {
                        title: 'Từ 8 - 12 triệu',
                        checked: false,
                        filter_key: '4',
                    },
                    {
                        title: 'Từ 12 - 20 triệu',
                        checked: false,
                        filter_key: '5',
                    },
                    {
                        title: 'Trên 20 triệu',
                        checked: false,
                        filter_key: '6',
                    },
                ]}
                filter_arr={[
                    {
                        title: 'Loại điện thoại',
                        name: 'os',
                        item_arr: [
                            {
                                title: 'Android',
                                checked: false,
                                filter_key: 'android',
                            },
                            {
                                title: 'iPhone (iOS)',
                                checked: false,
                                filter_key: 'ios',
                            },
                            {
                                title: 'Điện thoại phổ thông',
                                checked: false,
                                filter_key: 'other',
                            },
                        ],
                    },
                ]}
            />
        </div>
    );
}

Phones.propTypes = {};

export default Phones;

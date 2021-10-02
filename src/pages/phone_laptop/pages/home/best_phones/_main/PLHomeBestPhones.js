import React, { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
//
import { IS_MOBILE } from '../../../../../../_constant/Constant';
// 
import observeToDo from '../../../../../../_some_function/observerToDo';
// 
import { initial_phone_arr } from '../../../../../../_initial/phone/InitialPhone';
//
import { handle_API_PhoneLaptop_L } from '../../../../../../_handle_api/phone/list';
//
import PLProduct from '../../../../../../component/pl_product/_main/PLProduct';
import PLHBestPhonesLinks from '../links/PLHBestPhonesLinks';
//
import './PLHomeBestPhones.scss';

//
PLHomeBestPhones.propTypes = {};

//
function PLHomeBestPhones(props) {
    //
    const [state_obj, setStateObj] = useState({
        product_arr: [] || initial_phone_arr(),
        count: 0,
        link_arr: [] || [{ name: '', link_to: '' }],
        has_fetched: false,
    });

    const { product_arr, count, link_arr, has_fetched } = state_obj;

    //
    const ref_main_elm = useRef(null);

    //
    useEffect(() => {
        observeToDo({
            elm: ref_main_elm.current,
            callback: getData_BestPhones,
        });
    }, []);

    // ----

    //
    async function getData_BestPhones() {
        const { data, count: new_count } = await handle_API_PhoneLaptop_L({
            params: {
                type: 'phone',
                form: 'best',
                size: 10,
            },
        });

        setStateObj({
            ...state_obj,
            product_arr: data.slice(0, IS_MOBILE ? 6 : 10),
            count: new_count,
            link_arr: [
                {
                    name: 'Samsung Galaxy A72',
                    link_to: '/phone-laptop/1',
                },
                {
                    name: 'iPhone 12 Pro Max 128GB',
                    link_to: '/phone-laptop/2',
                },
                {
                    name: 'Oppo Reno6 Z 5G',
                    link_to: '/phone-laptop/3',
                },
            ],
            has_fetched: true,
        });
    }

    //
    return (
        <div ref={ref_main_elm} className="PLHomeBestPhones">
            <div className="PLHomeBestPhones_head flex-between-center margin-bottom-15px">
                <h2 className="PLHomeBestPhones_title pl-home-title">
                    ĐIỆN THOẠI NỔI BẬT NHẤT
                </h2>

                <PLHBestPhonesLinks link_arr={link_arr} count={count} />
            </div>

            {has_fetched ? (
                <div className="PLHomeBestPhones_contain">
                    <ul className="PLHomeBestPhones_row display-flex flex-wrap list-none">
                        {product_arr.map((product_obj) => (
                            <li
                                key={product_obj.id}
                                className="PLHomeBestPhones_item"
                            >
                                <PLProduct
                                    product_obj={product_obj}
                                    use_type={false}
                                    use_compare={false}
                                />
                            </li>
                        ))}
                    </ul>
                </div>
            ) : (
                <div className="PLHomeBestPhones_not_fetched"></div>
            )}
        </div>
    );
}

export default PLHomeBestPhones;

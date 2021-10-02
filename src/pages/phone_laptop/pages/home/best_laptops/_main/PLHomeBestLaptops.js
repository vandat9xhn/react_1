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
import PLRowProducts from '../../../../components/row_products/_main/PLRowProducts';
import PLHBestLaptopsLinks from '../links/PLHBestLaptopsLinks';
import PLHBestLaptopsContainMb from '../contain_mobile/PLHBestLaptopsContainMb';
//
import './PLHomeBestLaptops.scss';

//
PLHomeBestLaptops.propTypes = {};

//
function PLHomeBestLaptops(props) {
    //
    const [state_obj, setStateObj] = useState({
        product_arr: [] || initial_phone_arr(),
        count: 0,
        link_arr: [] || [{ name: '', link_to: '' }],
        has_fetched: false,
    });

    const { product_arr, count_laptop, count_tablet, link_arr, has_fetched } =
        state_obj;

    //
    const ref_main_elm = useRef(null);

    //
    useEffect(() => {
        observeToDo({
            elm: ref_main_elm.current,
            callback: getData_BestLaptops,
        });
    }, []);

    // ----

    //
    async function getData_BestLaptops() {
        const { data } = await handle_API_PhoneLaptop_L({
            params: {
                type: ['laptop', 'tablet'],
                form: 'best',
                size: 10,
            },
        });

        setStateObj({
            ...state_obj,
            product_arr: data.slice(0, IS_MOBILE ? 6 : 10),
            count_laptop: 80,
            count_tablet: 42,
            link_arr: [
                {
                    name: 'Laptop Asus',
                    link_to: '/phone-laptop/1',
                },
                {
                    name: 'Laptop HP',
                    link_to: '/phone-laptop/2',
                },
                {
                    name: 'iPad Air 4 Wifi 64GB',
                    link_to: '/phone-laptop/3',
                },
            ],
            has_fetched: true,
        });
    }

    //
    return (
        <div ref={ref_main_elm} className="PLHomeBestLaptops">
            <div className="PLHomeBestLaptops_head flex-between-center margin-bottom-15px">
                <h2 className="PLHomeBestLaptops_title pl-home-title">
                    LAPTOP, TABLET NỔI BẬT NHẤT
                </h2>

                <PLHBestLaptopsLinks
                    link_arr={link_arr}
                    count_laptop={count_laptop}
                    count_tablet={count_tablet}
                />
            </div>

            {has_fetched ? (
                <div className="PLHomeBestLaptops_contain">
                    {IS_MOBILE ? (
                        <PLHBestLaptopsContainMb
                            product_arr={product_arr}
                            count_laptop={count_laptop}
                            count_tablet={count_tablet}
                        />
                    ) : (
                        <PLRowProducts
                            product_arr={product_arr}
                            use_type={false}
                            use_compare={false}
                        />
                    )}
                </div>
            ) : (
                <div className="PLHomeBestLaptops_not_fetched"></div>
            )}
        </div>
    );
}

export default PLHomeBestLaptops;

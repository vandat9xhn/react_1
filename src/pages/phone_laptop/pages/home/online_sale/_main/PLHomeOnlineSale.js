import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
//
import { handle_API_PhoneLaptop_L } from '../../../../../../_handle_api/phone/list';
//
import { useDataShowMore } from '../../../../../../_hooks/useDataShowMore';
//
import PLRowProducts from '../../../../components/row_products/_main/PLRowProducts';

//
PLHomeOnlineSale.propTypes = {};

//
function PLHomeOnlineSale(props) {
    //
    const { data_state, getData_API } = useDataShowMore({
        initial_arr: [],
        handle_API_L: (c_count) =>
            handle_API_PhoneLaptop_L({
                c_count: c_count,
                params: {
                    form: 'online_sale',
                },
            }),
    });

    const { data_arr, has_fetched } = data_state;

    //
    useEffect(() => {
        getData_API();
    }, []);

    //
    return (
        <div className="PLHomeOnlineSale bg-gold brs-4px overflow-hidden">
            <h2 className="PLHomeOnlineSale_title pl-home-title padding-8px font-italic">
                Săn Sale Online Mỗi Ngày
            </h2>

            {has_fetched ? (
                <div className="PLHomeOnlineSale_contain">
                    <PLRowProducts
                        product_arr={data_arr}
                        use_type={false}
                        use_compare={false}
                    />
                </div>
            ) : (
                <div className="PLHomeOnlineSale_not_fetched"></div>
            )}
        </div>
    );
}

export default PLHomeOnlineSale;

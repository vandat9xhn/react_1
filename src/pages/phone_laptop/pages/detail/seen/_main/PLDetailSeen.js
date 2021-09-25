import React, { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
//
import { API_PhoneLaptop_L } from '../../../../../../api/api_django_no_token/phone_laptop/PhoneLaptopAPI';
//
import observeToDo from '../../../../../../_some_function/observerToDo';
//
import PLRowProducts from '../../../../components/row_products/_main/PLRowProducts';
//
import './PLDetailSeen.scss';

//
PLDetailSeen.propTypes = {
    product_id: PropTypes.number,
};

//
function PLDetailSeen({ product_id }) {
    //
    const [state_obj, setStateObj] = useState({
        product_arr: [],
        has_fetched: false,
    });

    const { product_arr, link_arr, has_fetched } = state_obj;

    //
    const ref_relative = useRef(null);

    //
    useEffect(() => {
        observeToDo({
            elm: ref_relative.current,
            callback: getData_API_Relative,
        });
    }, []);

    //
    async function getData_API_Relative() {
        const res = await API_PhoneLaptop_L({
            pk: product_id,
            page: 1,
            size: 10,
            type: 'seen',
        });

        setStateObj({
            ...state_obj,
            product_arr: res.data.data,
            has_fetched: true,
        });
    }

    //
    return (
        <div ref={ref_relative} className="PLDetailSeen">
            <h2 className="margin-bottom-15px font-700 font-20px">
                Điện thoại bạn đã xem
            </h2>

            {has_fetched ? (
                <div>
                    <PLRowProducts product_arr={product_arr} />
                </div>
            ) : (
                <div className="PLDetailSeen_not_fetched"></div>
            )}
        </div>
    );
}

export default PLDetailSeen;

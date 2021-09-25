import React, { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
//
import { API_PhoneLaptop_L } from '../../../../../../api/api_django_no_token/phone_laptop/PhoneLaptopAPI';
//
import observeToDo from '../../../../../../_some_function/observerToDo';
//
import PLDRltLinks from '../links/_main/PLDRltLinks';
import PLRowProducts from '../../../../components/row_products/_main/PLRowProducts';
//
import './PLDetailRelative.scss';

//
const DEFAULT_LINK_ARR = [
    { link_to: '', title: 'iPhone 12 (Mini, Pro, Pro Max)' },
    { link_to: '', title: 'iPhone (iOS)' },
    { link_to: '', title: '4 GB ' },
    { link_to: '', title: 'Chơi game / Cấu hình cao' },
    { link_to: '', title: '64 GB' },
    { link_to: '', title: 'Chụp góc rộng' },
    { link_to: '', title: 'Chụp xoá phông' },
    { link_to: '', title: 'Chụp zoom xa' },
    { link_to: '', title: 'Kháng nước, bụi' },
    { link_to: '', title: 'Tràn viền' },
    { link_to: '', title: 'Mỏng nhẹ' },
    { link_to: '', title: 'Mặt lưng kính' },
];

//
PLDetailRelative.propTypes = {
    product_id: PropTypes.number,
};

//
function PLDetailRelative({ product_id }) {
    //
    const [state_obj, setStateObj] = useState({
        product_arr: [],
        link_arr: [] || [
            {
                title: '',
                link_to: '',
            },
        ],
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
            type: 'relative',
        });

        setStateObj({
            ...state_obj,
            product_arr: res.data.data,
            link_arr: DEFAULT_LINK_ARR,
            has_fetched: true,
        });
    }
    
    //
    return (
        <div ref={ref_relative} className="PLDetailRelative">
            <h2 className="margin-bottom-15px font-700 font-20px">
                Xem thêm điện thoại khác
            </h2>

            {has_fetched ? (
                <React.Fragment>
                    <div className="margin-bottom-10px">
                        <PLDRltLinks link_arr={link_arr} />
                    </div>

                    <div>
                        <PLRowProducts product_arr={product_arr} />
                    </div>
                </React.Fragment>
            ) : (
                <div className="PLDetailRelative_not_fetched"></div>
            )}
        </div>
    );
}

export default PLDetailRelative;

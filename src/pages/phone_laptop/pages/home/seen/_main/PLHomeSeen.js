import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
//
import { handle_API_PhoneLaptop_L } from '../../../../../../_handle_api/phone/list';
//
import { useScrollToX } from '../../../../../../_hooks/useScrollToX';
//
import PLLinks from '../../../../components/links/PLLinks';
import PLHomeSeenItem from '../item/PLHomeSeenItem';
import NextPrevDiv from '../../../../../../component/some_div/next_prev_div/NextPrevDiv';
import observeToDo from '../../../../../../_some_function/observerToDo';
import { IS_MOBILE } from '../../../../../../_constant/Constant';

//
PLHomeSeen.propTypes = {};

//
function PLHomeSeen(props) {
    //
    const [state_obj, setStateObj] = useState({
        seen_arr: [] || [
            {
                id: 0,
                name: '',
                img: '',
            },
        ],
        count: 0,
        link_arr: [] || [{ name: '', link_to: '' }],
        has_fetched: false,
    });

    const { seen_arr, count, link_arr, has_fetched } = state_obj;

    //
    const ref_main_elm = useRef(null);
    const ref_scroll_elm = useRef(null);

    //
    const { is_has_next, is_has_prev, handleNext, handlePrev, hasNextPrev } =
        useScrollToX(ref_scroll_elm);

    //
    useEffect(() => {
        observeToDo({
            elm: ref_main_elm.current,
            callback: getData_ProductSeen,
        });
    }, []);

    // ---- API

    //
    async function getData_ProductSeen() {
        const res = await handle_API_PhoneLaptop_L({
            params: {
                type: 'phone',
                form: 'best',
                size: 10,
            },
        });

        setStateObj({
            ...state_obj,
            product_arr: res.data.data,
            count: res.data.count,
            link_arr: [
                {
                    name: 'Laptop',
                    link_to: '/phone-laptop-laptops',
                },
                {
                    name: 'Điện thoại',
                    link_to: '/phone-laptop-phones',
                },
                {
                    name: 'Sản phẩm khuyến mãi',
                    link_to: '/phone-laptop/discount',
                },
            ],
            has_fetched: true,
        });

        hasNextPrev();
    }

    // -------

    //
    function handleDeleteSeen() {
        setStateObj({
            ...state_obj,
            seen_arr: [],
        });
    }

    // ------

    //
    if (seen_arr.length == 0 && has_fetched) {
        return null;
    }

    //
    return (
        <div ref={ref_main_elm} className="PLHomeSeen">
            <div className="PLHomeSeen_head display-flex margin-bottom-15px">
                <h2 className="PLHomeSeen_title pl-home-title">BẠN ĐÃ XEM</h2>

                {IS_MOBILE ? (
                    <div
                        className="font-12px font-400 text-blue cursor-pointer"
                        onClick={handleDeleteSeen}
                    >
                        Xóa lịch sử
                    </div>
                ) : (
                    <div className="display-flex margin-left-10px">
                        <PLLinks link_arr={link_arr} />
                        <div
                            className="margin-left-10px font-12px text-blue cursor-pointer"
                            onClick={handleDeleteSeen}
                        >
                            Xóa lịch sử
                        </div>
                    </div>
                )}
            </div>

            {IS_MOBILE ? (
                <div className="margin-bottom-10px">
                    <PLLinks link_arr={link_arr} />{' '}
                </div>
            ) : null}

            <div className="PLHomeSeen_contain pos-rel">
                <ul className="display-flex list-none overflow-x-auto scroll-height-0">
                    {seen_arr.map((item, ix) => (
                        <li key={item.id} className="PLHomeSeen_item">
                            <Link to={`/phone-laptop/${item.id}`}>
                                <PLHomeSeenItem
                                    name={item.name}
                                    img={item.img}
                                />
                            </Link>
                        </li>
                    ))}
                </ul>

                <div>
                    <NextPrevDiv
                        is_btn_circle={false}
                        is_has_next={is_has_next}
                        is_has_prev={is_has_prev}
                        // size_icon={size_icon}
                        handleNext={handleNext}
                        handlePrev={handlePrev}
                    />
                </div>
            </div>
        </div>
    );
}

export default PLHomeSeen;

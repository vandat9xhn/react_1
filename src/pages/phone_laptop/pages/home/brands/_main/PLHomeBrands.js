import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
//
import { handle_API_PhoneLaptop_L } from '../../../../../../_handle_api/phone/list';
// 
import './PLHomeBrands.scss';

//
import { getDefaultArr } from '../../../../../../_default/_common/getDefaultArr';
import { getRandomImg } from '../../../../../../_default/_common/default_image';
import { getRandomId } from '../../../../../../_default/_common/default_id';

//
PLHomeBrands.propTypes = {};

//
function PLHomeBrands(props) {
    //
    const [state_obj, setStateObj] = useState({
        new_arr: [] || [
            {
                id: 0,
                link_to: '',
                img: '',
            },
        ],

        has_fetched: false,
    });

    const { new_arr, has_fetched } = state_obj;

    //
    useEffect(() => {
        getData_New();
    }, []);

    // ----

    //
    async function getData_New() {
        const res = await handle_API_PhoneLaptop_L({
            params: {},
        });

        setStateObj({
            ...state_obj,
            new_arr: getDefaultArr(getRandomImg, 3, 3).map((item) => {
                return {
                    id: getRandomId(),
                    img: item,
                    link_to: '/phone-laptop',
                };
            }),
            has_fetched: true,
        });
    }

    //
    return (
        <div className="PLHomeBrands">
            <h2 className="PLHomeBrands_title pl-home-title-md margin-bottom-15px">
                CHUYÊN TRANG THƯƠNG HIỆU
            </h2>

            <div className="PLHomeBrands_contain">
                <ul className="PLHomeBrands_row flex-between-center list-none overflow-x-auto">
                    {new_arr.map((item, ix) => (
                        <li key={item.id} className="PLHomeBrands_item flex-shrink-0">
                            <Link
                                className="PLHomeBrands_item_contain pos-rel display-block"
                                to={item.link_to}
                            >
                                <img
                                    className="pos-abs top-0 left-0 wh-100 object-fit-cover brs-4px"
                                    src={item.img}
                                    alt=""
                                />
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default PLHomeBrands;

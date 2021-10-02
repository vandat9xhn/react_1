import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
//
import { IS_MOBILE } from '../../../../_constant/Constant';
//
import observeToDo from '../../../../_some_function/observerToDo';
//
import { handle_API_PhoneLaptop_L } from '../../../../_handle_api/phone/list';
//
import { useDataShowMore } from '../../../../_hooks/useDataShowMore';
//
import FavWithLetter from '../../../../component/fav_with_letter/FavWithLetter';
import PLProduct from '../../../../component/pl_product/_main/PLProduct';
//
import './HomePhone.scss';

//
HomePhone.propTypes = {};

//
function HomePhone(props) {
    //
    const ref_main_elm = useRef(null);

    //
    const { data_state, getData_API } = useDataShowMore({
        handle_API_L: handle_API_PhoneLaptop_L,
    });

    //
    useEffect(() => {
        observeToDo({
            elm: ref_main_elm.current,
            callback: getData_API,
        });
    }, []);

    //
    return (
        <div ref={ref_main_elm} className="HomePhone">
            <div className="home-title display-flex align-items-center">
                <div>
                    <Link to="/phone-laptop">
                        <FavWithLetter letter="P" class_letter="text-gold" />
                    </Link>
                </div>

                <div className="flex-grow-1 padding-left-15px">
                    Điện thoại, Laptop, phụ kiện
                </div>
            </div>

            <div className="pos-rel">
                <ul className="display-flex flex-wrap list-none">
                    {data_state.data_arr.slice(0, 6).map((product_obj) => (
                        <li
                            key={product_obj.id}
                            className={`HomePhone_item ${
                                IS_MOBILE ? 'HomePhone_item-mobile' : ''
                            }`}
                        >
                            <PLProduct
                                product_obj={product_obj}
                                use_compare={false}
                                use_type={false}
                            />
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default HomePhone;

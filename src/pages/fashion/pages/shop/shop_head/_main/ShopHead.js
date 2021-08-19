import React, { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
//
import { API_FashionShop_R } from '../../../../../../api/api_django_no_token/fashion/APIFashionNoToken';
//
import observeToDo from '../../../../../../_some_function/observerToDo';
//
import { initial_fashion_shop } from '../../../../../../_initial/fashion/FashionInitial';
import { changeOwnerInfo } from '../../../../../../_some_function/fashion/FashionFunction';
//
import image_loading from '../../../../../../../image/image_loading.svg';
//
import ShopBanner from '../banner/ShopBanner';
import ShopInfo from '../info/ShopInfo';
import ShopPersonal from '../personal/_main/ShopPersonal';
//
import './ShopHead.scss';

//
ShopHead.propTypes = {};

//
function ShopHead({ id }) {
    //
    const [state_obj, setStateObj] = useState({
        shop_obj: initial_fashion_shop(),
        has_fetched: false,
    });

    const { shop_obj, has_fetched } = state_obj;
    const { vid_pics, info, ...rest_shop_obj } = shop_obj;

    //
    const mounted = useRef(true);

    const ref_shop_head = useRef(null);

    //
    useEffect(() => {
        return () => {
            mounted.current = false;
        };
    }, []);

    //
    useEffect(() => {
        observeToDo({
            elm: ref_shop_head.current,
            callback: () => getData_API_Shop(id),
        });
    }, [id]);

    /* -------------------- GET API ----------------------- */

    // shop
    async function getData_API_Shop() {
        const res = await API_FashionShop_R(id);

        const new_shop_obj = res.data;

        changeOwnerInfo(new_shop_obj.owner_info);

        if (!mounted.current) {
            return;
        }

        document.title = new_shop_obj.name;

        setStateObj({
            ...state_obj,
            shop_obj: new_shop_obj,
            has_fetched: true,
        });
    }

    //
    return (
        <div
            ref={ref_shop_head}
            className={`ShopHead ${has_fetched ? '' : 'pointer-events-none'}`}
        >
            <div className="ShopHead_part">
                <ShopPersonal {...rest_shop_obj} />
            </div>

            <div className="ShopHead_part">
                <ShopBanner
                    vid_pics={
                        has_fetched
                            ? vid_pics.map((item) => item.vid_pic)
                            : [image_loading, image_loading, image_loading]
                    }
                />
            </div>

            <div className="ShopHead_part">
                <ShopInfo info={info} has_fetched={has_fetched} />
            </div>
        </div>
    );
}

export default ShopHead;

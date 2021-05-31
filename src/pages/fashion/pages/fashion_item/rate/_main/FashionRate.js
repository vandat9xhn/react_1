import React, { useContext, useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
//
import { context_api } from '../../../../../../_context/ContextAPI';
//
import { useScreenFetching } from '../../../../../../_custom_hooks/UseScreenFetching';
//
import observeToDo from '../../../../../../_some_function/observerToDo';
import { calculateAvgCount } from '../../../../../../_some_function/calculateAvgCount';
//
import ComponentSkeleton from '../../../../../../component/skeleton/component_skeleton/ComponentSkeleton';
//
import {
    handle_API_FashionRate_C,
    handle_API_FashionRate_L,
    handle_API_FashionUserContentRate_R,
} from '../../../../__handle_api/item/rate/FashionItemRateHandleAPI';

import FashionRateSkeleton from '../skeleton/FashionRateSkeleton';
import ConfirmRate from '../confirm_rate/ConfirmRate';
import FashionRateChart from '../chart/_main/FashionRateChart';
import FashionRateList from '../list/_main/FashionRateList';
//
import './FashionRate.scss';

//
FashionRate.propTypes = {};

//
function FashionRate({ id }) {
    //
    const { user, openScreenConfirm } = useContext(context_api);

    //
    const [rate_state, setRateState] = useState({
        rate_arr: [],
        rate_num_arr: [],
        rate_count: 0,
        rate_avg: 0,
        user_rate: 0,

        has_fetched: false,
    });

    const {
        rate_arr,
        rate_num_arr,
        rate_avg,
        rate_count,
        user_rate,

        has_fetched,
    } = rate_state;

    //
    const ref_fashion_rate = useRef(null);
    const ref_confirm_rate = useRef(null);

    const user_rate_temp = useRef(user_rate);

    //
    const handleScreenFetching = useScreenFetching();

    //
    useEffect(() => {
        has_fetched &&
            setRateState({
                ...rate_state,
                has_fetched: false,
            });

        observeToDo(ref_fashion_rate.current, getData_API_Rate, 0);
    }, [id]);

    /* --------------- GET API ---------------- */

    async function getData_API_Rate() {
        const { data } = await handle_API_FashionRate_L({
            product_model: id,
            c_count: rate_arr.length,
        });

        setRateState({
            ...data,
            rate_avg: calculateAvgCount(data.rate_num_arr).avg,
            user_rate_temp: data.user_rate,
            has_fetched: true,
        });
    }

    /* ------------------------------- */

    //
    function handleChangeRate(new_rate) {
        user_rate_temp.current = new_rate;
    }

    //
    async function handleRate() {
        const new_rate = user_rate_temp.current || 5;
        const content_rate = ref_confirm_rate.current.getElementsByClassName(
            'ConfirmRate_textarea'
        )[0].value;

        const data = await handleScreenFetching(() =>
            handle_API_FashionRate_C({
                rate: new_rate,
                content: content_rate,
            })
        );

        const new_rate_arr = [...rate_arr];
        const new_rate_num_arr = [...rate_num_arr];

        if (user_rate > 0) {
            new_rate_num_arr[user_rate - 1] -= 1;
            new_rate_num_arr[new_rate - 1] += 1;

            const rate_user_obj = new_rate_arr.find(
                (item) => item.user.id == user.id
            );
            if (rate_user_obj) {
                rate_user_obj.content_obj.content = content_rate;
                rate_user_obj.rate = new_rate;
            }
        } else {
            new_rate_num_arr[new_rate - 1] += 1;
            new_rate_arr.unshift({
                id: data.id,
                user: user,
                content_obj: {
                    content: content_rate,
                    has_more_content: false,
                },
                rate: new_rate,
            });
        }

        setRateState({
            ...rate_state,
            user_rate: new_rate,
            rate_count: rate_count + (user_rate > 0 ? 0 : 1),
            rate_avg: calculateAvgCount(new_rate_num_arr).avg,
            rate_arr: new_rate_arr,
            rate_num_arr: new_rate_num_arr,
        });
    }

    //
    async function openRateNow() {
        let content_rate = '';
        const rate_model = rate_arr.find((item) => item.user.id == user.id);

        if (user_rate > 0) {
            content_rate = await handleScreenFetching(() =>
                handle_API_FashionUserContentRate_R({
                    rate_model: rate_model ? rate_model.id : 0,
                })
            );
        }

        openScreenConfirm(
            'Rate Now',
            <div ref={ref_confirm_rate}>
                <ConfirmRate
                    content_rate={content_rate}
                    rate_avg={user_rate}
                    handleChangeRate={handleChangeRate}
                />
            </div>,
            handleRate
        );
    }

    //
    return (
        <div className="padding-8px" ref={ref_fashion_rate}>
            <div className={`FashionRate ${has_fetched ? '' : 'display-none'}`}>
                <h3 className="margin-0">ASSESSMENT:</h3>

                <div>
                    <FashionRateChart
                        rate_num_arr={rate_num_arr}
                        rate_count={rate_count}
                        rate_avg={rate_avg}
                        user_rate={user_rate}
                        openRateNow={openRateNow}
                    />
                </div>

                <div className="FashionRate_list">
                    <FashionRateList rate_arr={rate_arr} />
                </div>
            </div>

            <div>
                <ComponentSkeleton
                    component={<FashionRateSkeleton />}
                    has_fetched={has_fetched}
                />
            </div>
        </div>
    );
}

export default FashionRate;

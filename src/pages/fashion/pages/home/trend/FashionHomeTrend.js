import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
//
import { IS_MOBILE } from '../../../../../_constant/Constant';
//
import observeToDo from '../../../../../_some_function/observerToDo';
//
import { handle_API_FashionHomeTrend_L } from '../../../../../_handle_api/fashion/trend_mall_searching_home';
//
import { useDataShowMore } from '../../../../../_hooks/useDataShowMore';
//
import IconDiv from '../../../../../component/some_div/icon_div/IconDiv';
import IconUpdate from '../../../../../_icons_svg/icon_update/IconUpdate';
//
import FashionTrendItem from '../../../components/trend_item/FashionTrendItem';
//
import './FashionHomeTrend.scss';

//
const count_item = IS_MOBILE ? 4 : 5;

//
FashionHomeTrend.propTypes = {};

//
function FashionHomeTrend(props) {
    //
    const ref_main_elm = useRef(null);

    //
    const { data_state, setDataState, data_count, is_max, getData_API } =
        useDataShowMore({
            handle_API_L: handle_API_FashionHomeTrend_L,
            other_state: {
                active_ix: 0,
            },
        });

    const { data_arr, has_fetched, active_ix } = data_state;

    //
    useEffect(() => {
        observeToDo({ elm: ref_main_elm.current, callback: getData_API });
    }, []);

    //
    function handleUpdateTrend() {
        if (!is_max.current) {
            getData_API({
                getOtherDataStateWhenSetState: (data_state) => {
                    return {
                        active_ix: data_state.has_fetched
                            ? data_state.active_ix + 1
                            : 0,
                    };
                },
            });

            return;
        }

        setDataState({
            ...data_state,
            active_ix:
                (active_ix + 1) * count_item >= data_count.current
                    ? 0
                    : active_ix + 1,
        });
    }

    //
    return (
        <div ref={ref_main_elm} className="FashionHomeTrend bg-primary">
            <div className="FashionHomeTrend_head flex-between-center fashion-head-padding">
                <div>
                    <h2 className="font-16px font-500 text-secondary">
                        XU HƯỚNG TÌM KIẾM
                    </h2>
                </div>

                <div>
                    <div
                        className="cursor-pointer color-fashion"
                        onClick={handleUpdateTrend}
                    >
                        <IconDiv
                            Icon={IconUpdate}
                            size_icon="0.75rem"
                            icon_props={{
                                stroke: 'currentColor',
                            }}
                        >
                            <span className="font-14px">Xem thêm</span>
                        </IconDiv>
                    </div>
                </div>
            </div>

            <div className="overflow-x-auto">
                <ul
                    className={`display-flex list-none ${
                        IS_MOBILE ? 'flex-wrap' : ''
                    }`}
                >
                    {data_arr
                        .slice(
                            active_ix * count_item,
                            (active_ix + 1) * count_item
                        )
                        .map((item, ix) => (
                            <li
                                key={`${item.keyword}_${ix}`}
                                className={`FashionHomeTrend_item ${
                                    IS_MOBILE
                                        ? 'FashionHomeTrend_item-mobile'
                                        : 'FashionHomeTrend_item-pc'
                                }`}
                            >
                                <FashionTrendItem
                                    link_to={`/fashion/trend?q=${item.keyword}`}
                                    keyword={item.keyword}
                                    count={item.count}
                                    image={item.image}
                                />
                            </li>
                        ))}
                </ul>
            </div>

            {has_fetched ? null : (
                <div className="FashionHomeTrend_not_fetched"></div>
            )}
        </div>
    );
}

export default FashionHomeTrend;

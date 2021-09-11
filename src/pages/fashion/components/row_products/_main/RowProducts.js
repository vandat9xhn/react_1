import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
//
import { IS_MOBILE } from '../../../../../_constant/Constant';
//
import observeToDo from '../../../../../_some_function/observerToDo';
//
import { useObserverShowMore } from '../../../../../_hooks/useObserverShowMore';
//
import RowProductPc from '../pc/RowProductPc';
import RowProductMobile from '../mobile/RowProductMobile';
//
import './RowProducts.scss';

//
RowProducts.propTypes = {
    title: PropTypes.oneOfType([PropTypes.element, PropTypes.string]),
};

RowProducts.defaultProps = {
    title: <div></div>,
};

//
function RowProducts({
    title,

    handle_API_L,
    use_limit_count,
    limit_count,

    use_next_prev = true,
    item_props,

    use_more,
    link_to_more,
    title_more,
    class_color_more,
}) {
    //
    const ref_main_elm = useRef(null);
    const ref_fake_elm_end = useRef(null);
    const ref_scroll_elm = useRef(null);

    //
    const { data_state, getData_API, observerShowMore, is_max } =
        useObserverShowMore({
            initial_arr: [],
            handle_API_L: handle_API_L,
        });

    const { data_arr, count, has_fetched } = data_state;

    const common_props = {
        products: data_arr.slice(0, use_limit_count ? limit_count : undefined),
        ref_scroll_elm: ref_scroll_elm,
        ref_fake_elm_end: ref_fake_elm_end,

        has_fetched: has_fetched,
        item_props: item_props,

        use_more: use_more,
        link_to_more: link_to_more,
        title_more: title_more,
        class_color_more: class_color_more,
    };

    //
    useEffect(() => {
        observeToDo({
            elm: ref_main_elm.current,
            callback: () => {
                getData_API();

                const margin_right = IS_MOBILE ? 500 : 1000;

                observerShowMore({
                    fake_elm_end: ref_fake_elm_end.current,
                    root: ref_scroll_elm.current,
                    way_scroll: 'to_right',
                    rootMargin: `0px ${margin_right}px 0px 0px`,
                    margin: margin_right,
                });
            },
        });
    }, []);

    useEffect(() => {
        if (use_limit_count && limit_count <= data_arr.length) {
            is_max.current = true;
        }
    }, [data_arr.length]);

    //
    return (
        <div ref={ref_main_elm} className="RowProducts padding-8px">
            <div className="RowProducts_title font-500">{title}</div>

            <div className="RowProducts_products">
                {IS_MOBILE ? (
                    <RowProductMobile {...common_props} />
                ) : (
                    <RowProductPc
                        {...common_props}
                        use_next_prev={use_next_prev}
                    />
                )}

                {has_fetched ? (
                    ''
                ) : (
                    <div className="RowProducts_not_fetched"></div>
                )}
            </div>
        </div>
    );
}

export default RowProducts;

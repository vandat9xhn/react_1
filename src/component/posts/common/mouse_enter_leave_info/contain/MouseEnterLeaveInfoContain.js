import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
//
import { useMounted } from '../../../../../_hooks/useMounted';
import { useForceUpdate } from '../../../../../_hooks/UseForceUpdate';
import { usePosFollowBodyOrElm } from '../../../../../_hooks/usePosFollowBodyOrElm';
//
import LoaderDiv from '../../../../some_div/loader_div/LoaderDiv';
import ListPeople from '../list_people/ListPeople';
//
import './MouseEnterLeaveInfoContain.scss';

//
MouseEnterLeaveInfoContain.propTypes = {};

//
function MouseEnterLeaveInfoContain({
    // scroll_elm,
    ref_btn_elm,
    // getChildWidth,
    div_fix_width,

    title_people,
    has_list_people_component,
    list_people_props,

    data_arr,
    count,
    ref_fetching,
    is_closing,

    LoadingComponent,
    PeopleComponent,
    ListPeopleComponent,
}) {
    //
    const ref_contain = useRef(null);

    //
    const {
        ref_is_open,
        ref_starting,
        ref_pos,

        handleOpen,
        handleClose,
        calculatePos,
    } = usePosFollowBodyOrElm({
        getScrollElm: getScrollElm,
        ref_base_elm: ref_btn_elm,
        getChildWidth: getChildWidth,

        is_at_body: true,
        use_scroll: true,
        use_resize: false,
    });

    //
    const {
        top_or_bottom,
        position_y,
        transform_y,

        left_or_right,
        position_x,
        transform_x,
    } = ref_pos.current;

    //
    const forceUpdate = useForceUpdate();
    const mounted = useMounted();

    //
    useEffect(() => {
        handleOpen({
            callbackOpen: () => {
                mounted && forceUpdate();
            },
        });
    }, []);

    // ----

    //
    function getScrollElm() {
        return ref_btn_elm.current.closest('[class~=div_fix_scroll]');
    }

    //
    function getChildWidth() {
        return ref_contain.current
            ? ref_contain.current.getBoundingClientRect().width
            : 0;
    }

    //
    return (
        ref_is_open.current && (
            <div
                ref={ref_contain}
                className={`MouseEnterLeaveInfo_contain pos-abs z-index-1 ${
                    ref_starting.current ? 'opacity-0' : ''
                } ${
                    is_closing
                        ? 'MouseEnterLeaveInfo_contain-closing opacity-0'
                        : ''
                }`}
                style={{
                    [top_or_bottom]: position_y,
                    [left_or_right]: position_x,
                    transform: `translate(${transform_x}, ${transform_y})`,
                }}
            >
                {ref_fetching.current ? (
                    <LoaderDiv
                        LoadingComponent={LoadingComponent}
                        is_fetching={true}
                    />
                ) : has_list_people_component ? (
                    <ListPeopleComponent
                        {...list_people_props}
                        list_people={data_arr}
                        count_people={count}
                    />
                ) : (
                    <ListPeople
                        title={title_people}
                        list_people={data_arr}
                        count_people={count}
                        PeopleComponent={PeopleComponent}
                    />
                )}
            </div>
        )
    );
}

export default MouseEnterLeaveInfoContain;

import React, { useContext, useRef } from 'react';
import PropTypes from 'prop-types';
//
import { IS_MOBILE } from '../../../../../_constant/Constant';
// 
import { context_api } from '../../../../../_context/ContextAPI';
//
import { useMouseEnterLeave } from '../../../../../_hooks/UseMouseEnterLeave';
// 
import { definePositionXY } from '../../../../../_some_function/definePositionXY';
//
import { content_pic_name_props } from '../../../../../_prop-types/_CommonPropTypes';
//
import LoaderDiv from '../../../../some_div/loader_div/LoaderDiv';
import ListPeople from '../list_people/ListPeople';
//
import './MouseEnterLeaveInfo.scss';

//
MouseEnterLeaveInfo.propTypes = {
    count: PropTypes.number,
    title: content_pic_name_props,
    total_people: PropTypes.number,
    PeopleComponent: PropTypes.func,

    handle_API_L: PropTypes.func,
    handleOpenScreen: PropTypes.func,
    LoadingComponent: PropTypes.func,
};

MouseEnterLeaveInfo.defaultProps = {
    use_transform_x: true,
};

//
function MouseEnterLeaveInfo({
    count,
    title,
    total_people,
    PeopleComponent,

    handle_API_L,
    handleOpenScreen,
    LoadingComponent,
}) {
    //
    const { openDivFixPeople, closeDivFixPeople } = useContext(context_api);

    //
    const ref_btn_elm = useRef(null);

    //
    const { mouse_state, handleMouseenter, handleMouseleave } =
        useMouseEnterLeave({
            handle_API_L: handle_API_L,

            handleOpenDivFixLoading: handleOpenDivFixLoading,
            handleOpenDivFixPeople: handleOpenDivFixPeople,
            handleCloseDivFixPeople: handleCloseDivFixPeople,
        });

    //
    function handleOpenDivFix(FixElement) {
        const div_fix_width = 200;

        const { left, right, top, bottom } =
            ref_btn_elm.current.getBoundingClientRect();

        const { position_x, position_y, transform_x, max_height } =
            definePositionXY({
                child_width: div_fix_width,
                ref_btn_elm: ref_btn_elm,
                header_head: 0,
            });

        const left_obj = {
            'left-0': { left: `${left}px` },
            'right-0': { right: `${right}px` },
            'left-50per': { left: `${(left + right) / 2}px` },
        };

        openDivFixPeople({
            scroll_elm: ref_btn_elm.current.closest('[class~=div_fix_scroll]'),
            width: div_fix_width,
            max_height: max_height,
            ...left_obj[position_x],
            top: pageYOffset + (position_y == 'top' ? top : bottom),
            transform_x: transform_x,
            transform_y: position_y == 'top' ? '-100%' : '0',

            FixElement: FixElement,
        });
    }

    //
    function handleOpenDivFixLoading() {
        handleOpenDivFix(
            <LoaderDiv LoadingComponent={LoadingComponent} is_fetching={true} />
        );
    }

    //
    function handleOpenDivFixPeople() {
        handleOpenDivFix(
            <ListPeople
                list_people={mouse_state.list}
                count_people={total_people || mouse_state.count}
                PeopleComponent={PeopleComponent}
            />
        );
    }

    //
    function handleCloseDivFixPeople() {
        closeDivFixPeople();
    }

    //
    return (
        <div
            ref={ref_btn_elm}
            className="MouseEnterLeaveInfo position_rel cursor-pointer"
        >
            <div
                // className={`${count ? '' : 'display-none'}`}
                className={`${true ? '' : 'display-none'}`}
                onClick={handleOpenScreen}
                onMouseEnter={IS_MOBILE ? undefined : handleMouseenter}
                onMouseLeave={IS_MOBILE ? undefined : handleMouseleave}
            >
                {title || count}
            </div>
        </div>
    );
}

export default MouseEnterLeaveInfo;

import React, { useContext, useRef } from 'react';
import PropTypes from 'prop-types';
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
    content_pic: content_pic_name_props,

    is_pic_name: PropTypes.bool,
    PeopleComponent: PropTypes.func,
    //
    handle_API_L: PropTypes.func,
    handleOpenScreen: PropTypes.func,
    LoadingComponent: PropTypes.func,

    use_transform_x: PropTypes.bool,
};

MouseEnterLeaveInfo.defaultProps = {
    use_transform_x: true,
};

//
function MouseEnterLeaveInfo({
    count,
    title,
    total_people,

    is_pic_name,
    PeopleComponent,

    handle_API_L,
    handleOpenScreen,
    LoadingComponent,
}) {
    //
    const { openDivFixPeople, closeDivFixPeople } = useContext(context_api);

    //
    const ref_parent_elm = useRef(null);

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

        const { x, y, width, height } =
            ref_parent_elm.current.getBoundingClientRect();

        const { transform_x, position_y, max_height } =
            definePositionXY(div_fix_width, x, width, y, height);

        openDivFixPeople({
            width: div_fix_width,
            left: x + pageXOffset + width / 2,
            top: y + pageYOffset,
            transform_x: `calc(-50% + ${transform_x}px)`,
            transform_y: position_y == 'top' ? '-100%' : `${height}px`,

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
                is_pic_name={is_pic_name}
                PeopleComponent={PeopleComponent}
            />
        );
    }

    //
    function handleCloseDivFixPeople() {
        closeDivFixPeople();
    }

    //
    const is_mobile = localStorage.is_mobile == 1;

    //
    return (
        <div
            ref={ref_parent_elm}
            className="MouseEnterLeaveInfo position_rel cursor-pointer"
        >
            <div
                // className={`${count ? '' : 'display-none'}`}
                className={`${true ? '' : 'display-none'}`}
                onClick={handleOpenScreen}
                onMouseEnter={is_mobile ? undefined : handleMouseenter}
                onMouseLeave={is_mobile ? undefined : handleMouseleave}
            >
                {title || count}
            </div>
        </div>
    );
}

export default MouseEnterLeaveInfo;

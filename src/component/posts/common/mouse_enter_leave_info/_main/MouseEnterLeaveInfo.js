import React, { useRef } from 'react';
import PropTypes from 'prop-types';
//
import { useMouseEnterLeave } from '../../../../../_hooks/UseMouseEnterLeave';
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
}

//
function MouseEnterLeaveInfo({
    count,
    title,
    total_people,
    content_pic,

    is_pic_name,
    PeopleComponent,
    
    handle_API_L,
    handleOpenScreen,
    LoadingComponent,
    
    use_transform_x,
}) {
    //
    const ref_child_elm = useRef(null);
    const ref_parent_elm = useRef(null);

    //
    const {
        mouse_state: {
            is_open,
            transform_x,
            position_y,

            list,
            count: new_count,
            is_fetching,
        },
        handleMouseenter,
        handleMouseleave,
    } = useMouseEnterLeave(handle_API_L, ref_child_elm, ref_parent_elm);

    // console.log(position_y);
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
                onMouseEnter={
                    localStorage.is_mobile == 1 ? undefined : handleMouseenter
                }
                onMouseLeave={
                    localStorage.is_mobile == 1 ? undefined : handleMouseleave
                }
            >
                {title || count}
            </div>

            <div
                className={`MouseEnterLeaveInfo_list ${
                    use_transform_x ? 'left-50per' : 'left-0'
                } ${is_open ? 'visibility-visible' : 'visibility-hidden'} ${
                    position_y == 'top' ? 'bottom-100per' : 'top-100per'
                }`}
                style={{
                    transform: use_transform_x
                        ? `translateX(-50%) translateX(${transform_x}px)`
                        : undefined,
                }}
            >
                <div ref={ref_child_elm} className="w-100per"></div>

                <div className={`${is_open ? '' : 'display-none'}`}>
                    <div className={`${is_fetching ? 'display-none' : ''}`}>
                        <ListPeople
                            list_people={list}
                            count_people={total_people || new_count || count}
                            content={content_pic}
                            is_pic_name={is_pic_name}
                            PeopleComponent={PeopleComponent}
                        />
                    </div>

                    <LoaderDiv
                        LoadingComponent={LoadingComponent}
                        is_fetching={is_fetching}
                    />
                </div>
            </div>
        </div>
    );
}

export default MouseEnterLeaveInfo;

import React, { useRef } from 'react';
import PropTypes from 'prop-types';
//
import { IS_MOBILE } from '../../../../../_constant/Constant';
// 
import { useMouseEnterLeaveNormal } from '../../../../../_hooks/UseMouseEnterLeave';
//
import { content_pic_name_props } from '../../../../../_prop-types/_CommonPropTypes';
//
import LoaderDiv from '../../../../some_div/loader_div/LoaderDiv';
import ListPeople from '../list_people/ListPeople';
//
import './MouseEnterLeaveInfo.scss';

//
MouseEnterLeaveInfoNormal.propTypes = {
    count: PropTypes.number,
    title: content_pic_name_props,
    total_people: PropTypes.number,

    is_pic_name: PropTypes.bool,
    PeopleComponent: PropTypes.func,

    handle_API_L: PropTypes.func,
    handleOpenScreen: PropTypes.func,
    LoadingComponent: PropTypes.func,
};

//
function MouseEnterLeaveInfoNormal({
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
    const ref_child_elm = useRef(null);
    const ref_btn_elm = useRef(null);

    //
    const {
        mouse_state: {
            is_open,
            position_x,
            transform_x,
            position_y,
            // max_height,

            list,
            count: new_count,
            is_fetching,
        },
        handleMouseenter,
        handleMouseleave,
    } = useMouseEnterLeaveNormal(handle_API_L, ref_child_elm, ref_btn_elm);

    // console.log(position_y);
    //
    return (
        <div className="MouseEnterLeaveInfo position_rel">
            <div
                ref={ref_btn_elm}
                // className={`${count ? '' : 'display-none'}`}
                className={`${true ? '' : 'display-none'} cursor-pointer`}
                onClick={handleOpenScreen}
                onMouseEnter={IS_MOBILE ? undefined : handleMouseenter}
                onMouseLeave={IS_MOBILE ? undefined : handleMouseleave}
            >
                {title || count}
            </div>

            <div
                className={`MouseEnterLeaveInfo_list ${
                    is_open ? 'visibility-visible' : 'visibility-hidden'
                } ${
                    position_y == 'top' ? 'bottom-100per' : 'top-100per'
                } ${position_x}`}
                style={{
                    transform: `translateX(${transform_x})`,
                }}
            >
                <div ref={ref_child_elm} className="w-100per"></div>

                <div className={`${is_open ? '' : 'display-none'}`}>
                    <div className={`${is_fetching ? 'display-none' : ''}`}>
                        <ListPeople
                            list_people={list}
                            count_people={total_people || new_count || count}
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

export default MouseEnterLeaveInfoNormal;

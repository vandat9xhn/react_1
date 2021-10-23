import React, { useRef } from 'react';
import PropTypes from 'prop-types';
//
import { IS_MOBILE } from '../../../../../_constant/Constant';
//
import { useMouseEnterLeave } from '../../../../../_hooks/useMouseEnterLeave';
import { useForceUpdate } from '../../../../../_hooks/UseForceUpdate';
import { useBool } from '../../../../../_hooks/useBool';
//
import PortalAtBody from '../../../../portal/at_body/PortalAtBody';
import CircleLoading from '../../../../waiting/circle_loading/CircleLoading';
//
import MouseEnterLeaveInfoContain from '../contain/MouseEnterLeaveInfoContain';
//
import './MouseEnterLeaveInfo.scss';

//
MouseEnterLeaveInfo.propTypes = {
    count: PropTypes.number,
    title: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
    total_people: PropTypes.number,
    title_people: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),

    has_list_people_component: PropTypes.bool,
    list_people_props: PropTypes.object,
    ListPeopleComponent: PropTypes.func,

    handle_API_L: PropTypes.func,
    handleOpenScreen: PropTypes.func,

    LoadingComponent: PropTypes.func,
    PeopleComponent: PropTypes.func,
};

MouseEnterLeaveInfo.defaultProps = {
    has_list_people_component: false,
    list_people_props: {},

    LoadingComponent: CircleLoading,
};

//
function MouseEnterLeaveInfo({
    title,
    count,
    total_people,
    title_people,

    // scroll_elm,
    // getChildWidth,
    div_fix_width,
    time_closing = 200,

    has_list_people_component,
    list_people_props,
    ListPeopleComponent,

    handle_API_L,
    handleOpenScreen,
    LoadingComponent,
    PeopleComponent,
}) {
    //
    const { is_true, setIsTrue } = useBool();

    //
    const ref_btn_elm = useRef(null);

    //
    const {
        ref_arr,
        ref_count,
        ref_fetching,
        ref_closing,

        handleMouseenter,
        handleMouseleave,
    } = useMouseEnterLeave({
        time_closing: time_closing,
        handle_API_L: handle_API_L,

        handleLoading: handleLoadingInfo,
        handleOpen: handleOpenInfo,
        handleClose: handleCloseInfo,
    });

    //
    const forceUpdate = useForceUpdate();

    // -----

    //
    function handleLoadingInfo() {
        setIsTrue(true);
    }

    //
    function handleOpenInfo() {
        !is_true && setIsTrue(true);
        forceUpdate();
    }

    //
    function handleCloseInfo() {
        setIsTrue(false);
    }

    //
    return (
        <div className="MouseEnterLeaveInfo cursor-pointer">
            <div
                ref={ref_btn_elm}
                className="display-flex-center hv-underline"
                onClick={handleOpenScreen}
                onMouseEnter={IS_MOBILE ? undefined : handleMouseenter}
                onMouseLeave={IS_MOBILE ? undefined : handleMouseleave}
            >
                {title || count}
            </div>

            {is_true ? (
                <PortalAtBody>
                    <MouseEnterLeaveInfoContain
                        // scroll_elm={scroll_elm}
                        ref_btn_elm={ref_btn_elm}
                        // getChildWidth={getChildWidth}
                        div_fix_width={div_fix_width}
                        // 
                        title_people={title_people}
                        has_list_people_component={has_list_people_component}
                        list_people_props={list_people_props}
                        //
                        data_arr={ref_arr.current}
                        count={total_people || ref_count.current}
                        ref_fetching={ref_fetching}
                        is_closing={ref_closing.current}
                        //
                        ListPeopleComponent={ListPeopleComponent}
                        LoadingComponent={LoadingComponent}
                        PeopleComponent={PeopleComponent}
                    />
                </PortalAtBody>
            ) : null}
        </div>
    );
}

export default MouseEnterLeaveInfo;

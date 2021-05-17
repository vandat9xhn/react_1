import React from 'react';
import PropTypes from 'prop-types';
//
import { useMouseEnterLeave } from '../../../../../_custom_hooks/UseMouseEnterLeave';
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
};

//
function MouseEnterLeaveInfo(props) {
    const {
        count,
        title,
        total_people,
        content_pic,

        is_pic_name,
        PeopleComponent,
        //
        handle_API_L,
        handleOpenScreen,
        LoadingComponent,
    } = props;
    //
    const [
        { list, count: new_count, is_fetching, open_list },
        handleMouseEnter,
        handleMouseOut,
    ] = useMouseEnterLeave(handle_API_L);

    //
    return (
        <div className="MouseEnterLeaveInfo position_rel cursor-pointer">
            <div
                // className={`${count ? '' : 'display-none'}`}
                className={`${true ? '' : 'display-none'}`}
                onClick={handleOpenScreen}
                onMouseEnter={localStorage.is_mobile == 1 ? undefined : handleMouseEnter}
                onMouseLeave={localStorage.is_mobile == 1 ? undefined : handleMouseOut}
            >
                {title || count}
            </div>

            <div
                className={`MouseEnterLeaveInfo_list ${
                    open_list ? '' : 'display-none'
                }`}
            >
                <ListPeople
                    list_people={list}
                    count_people={total_people || new_count || count}
                    content={content_pic}

                    is_pic_name={is_pic_name}
                    PeopleComponent={PeopleComponent}
                />
            </div>

            <div className="MouseEnterLeaveInfo_fetching">
                <LoaderDiv
                    LoadingComponent={LoadingComponent}
                    open_fetching={is_fetching}
                />
            </div>
        </div>
    );
}

export default MouseEnterLeaveInfo;

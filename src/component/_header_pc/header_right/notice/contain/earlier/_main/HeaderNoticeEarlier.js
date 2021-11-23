import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
//
import { IS_MOBILE } from '../../../../../../../_constant/Constant';
// 
import { handle_API_FbNotice_L } from '../../../../../../../_handle_api/fb_notice/list';
//
import { useObserverShowMore } from '../../../../../../../_hooks/useObserverShowMore';
//
import ComponentSkeleton from '../../../../../../skeleton/component_skeleton/ComponentSkeleton';
import SkeletonPicContent from '../../../../../../skeleton/some_skeleton/pic_content/SkeletonPicContent';
//
import HeaderNoticeList from '../../../list/_main/HeaderNoticeList';

//
HeaderNoticeEarlier.propTypes = {};

//
function HeaderNoticeEarlier({ ref_scroll_elm }) {
    //
    const ref_fake_elm = useRef(null);

    //
    const { data_state, is_max, getData_API, observerShowMore } =
        useObserverShowMore({
            handle_API_L: (c_count) =>
                handle_API_FbNotice_L({ c_count: c_count, type: 'earlier' }),
        });

    const { data_arr } = data_state;

    //
    useEffect(() => {
        getData_API();

        observerShowMore({
            fake_elm_end: ref_fake_elm.current,
            root: ref_scroll_elm.current,
            way_scroll: 'to_bottom',
            margin: 0,
        });
    }, []);

    // ----

    //
    function handleAction(action_name = '') {
        console.log(action_name);
    }

    //
    return (
        <div className="HeaderNoticeEarlier">
            <HeaderNoticeList
                title="Earlier"
                notices={data_arr}
                ref_scroll_elm={ref_scroll_elm}
                // handleClickItem={handleClickItem}
                handleAction={handleAction}
            />

            <div ref={ref_fake_elm} className="padding-1px"></div>

            <div className="padding-8px">
                <ComponentSkeleton
                    component={
                        <SkeletonPicContent size_pic={IS_MOBILE ? 48 : 56} />
                    }
                    has_fetched={is_max.current}
                    num={2}
                    skeleton_class=""
                />
            </div>
        </div>
    );
}

export default HeaderNoticeEarlier;

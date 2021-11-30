import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
//
import { useBool } from '../../../../../../_hooks/useBool';
//
import IconCaret from '../../../../../../_icons_svg/_icon_caret/IconCaret';
//
import CloseDiv from '../../../../../../component/some_div/close_div/CloseDiv';
//
import GroupPageNavMoreItem from '../item/GroupPageNavMoreItem';

//
GroupPageNavMore.propTypes = {};

//
function GroupPageNavMore({ group_id, color, bg_btn, more_link_arr }) {
    //
    const is_active = more_link_arr.some(
        (item) => item.link_to == location.pathname.split('/').slice(-1)[0]
    );

    //
    const ref_btn = useRef(null);

    //
    const { is_true, setIsTrue, toggleBool } = useBool();

    //
    useEffect(() => {
        makeDivHidden();
    }, [location.href]);

    // -----

    //
    function makeDivHidden() {
        is_true && setIsTrue(false);
    }

    //
    return (
        <div className="GroupPageNavMore pos-rel h-100per">
            <div
                ref={ref_btn}
                className="display-flex-center pos-rel h-100per padding-x-12px padding-bottom-3px brs-6px cursor-pointer hv-bg-fb"
                onClick={toggleBool}
                style={{ color: is_active ? color : null }}
            >
                <div className="margin-right-8px font-500">More</div>

                <IconCaret
                    size_icon="15px"
                    fill={is_active ? bg_btn : 'currentColor'}
                />

                <div
                    className={`pos-abs bottom-0 left-0 w-100per h-3px bg-current brs-20px ${
                        is_active ? '' : 'display-none'
                    }`}
                ></div>
            </div>

            {is_true ? (
                <CloseDiv makeDivHidden={makeDivHidden} refs_target={[ref_btn]}>
                    <div className="pos-abs top-100per left-0 z-index-1">
                        <div className="padding-8px brs-8px bg-primary box-shadow-fb">
                            <ul className="list-none">
                                {more_link_arr.map((item, ix) => (
                                    <li key={ix}>
                                        <GroupPageNavMoreItem
                                            title={item.title}
                                            link_to={`/group/${group_id}/${item.link_to}`}
                                        />
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </CloseDiv>
            ) : null}
        </div>
    );
}

export default GroupPageNavMore;

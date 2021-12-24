import React, { useRef } from 'react';
import PropTypes from 'prop-types';
//
import { useBool } from '../../../../../_hooks/useBool';
//
import IconCaret from '../../../../../_icons_svg/_icon_caret/IconCaret';
//
import Actions from '../../../../actions/_main/Actions';
//
import ProfileLayoutNavMoreItem from '../item/ProfileLayoutNavMoreItem';
//
import './ProfileLayoutNavMore.scss';

//
ProfileLayoutNavMore.propTypes = {};

//
function ProfileLayoutNavMore({
    color,
    bg_btn,
    more_link_arr,

    has_item_component = false,
    ItemComponent = () => <div></div>,
    item_props = {},
}) {
    //
    const is_active = more_link_arr.some(
        (item) => item.link_to == location.pathname.split('/').slice(-1)[0]
    );

    //
    const ref_btn = useRef(null);

    //
    const { is_true, setIsTrue, toggleBool } = useBool();

    // -----

    //
    function handleClose() {
        setIsTrue(false);
    }

    //
    return (
        <div className="ProfileLayoutNavMore pos-rel h-100per">
            <Actions
                title_action={
                    <div
                        ref={ref_btn}
                        className="display-flex-center pos-rel h-100per padding-x-12px padding-bottom-3px brs-6px cursor-pointer hv-bg-fb"
                        // onClick={toggleBool}
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
                }
                //
                is_show={is_true}
                x_always="left"
                //
                use_caret={false}
                //
                toggleShow={toggleBool}
                handleClose={handleClose}
            >
                <div className="padding-8px brs-8px bg-primary box-shadow-fb">
                    <ul className="list-none">
                        {more_link_arr.map((item, ix) => (
                            <li key={ix}>
                                {has_item_component ? (
                                    <ItemComponent {...item} {...item_props} />
                                ) : (
                                    <ProfileLayoutNavMoreItem
                                        title={item.title}
                                        link_to={item.link_to}
                                    />
                                )}
                            </li>
                        ))}
                    </ul>
                </div>
            </Actions>
        </div>
    );
}

export default ProfileLayoutNavMore;

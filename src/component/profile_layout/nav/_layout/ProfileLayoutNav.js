import React from 'react';
import PropTypes from 'prop-types';
//
import { IS_MOBILE } from '../../../../_constant/Constant';
//
import { useStickyOver } from '../../../../_hooks/useStickyOver';
//
import './ProfileLayoutNav.scss';

//
ProfileLayoutNav.propTypes = {};

//
function ProfileLayoutNav({ left_main_elm, left_sticky_elm, right_elm }) {
    //
    const { scroll_over, ref_fake_sticky } = useStickyOver({});

    //
    return (
        <div className="ProfileLayoutNav border-top-blur font-600 text-secondary">
            {IS_MOBILE ? null : (
                <div
                    ref={ref_fake_sticky}
                    className="ProfileLayoutNav_fake_sticky pos-abs left-0 w-100per h-1px pointer-events-none"
                ></div>
            )}

            <div className="ProfileLayoutNav_row flex-between-center h-100per">
                <div className="flex-grow-1 h-100per overflow-hidden">
                    <div
                        className={`h-100per ${
                            scroll_over ? 'display-none' : ''
                        }`}
                    >
                        {left_main_elm}
                    </div>

                    {IS_MOBILE ? null : (
                        <div
                            className={`h-100per ${
                                scroll_over ? '' : 'display-none'
                            }`}
                        >
                            {left_sticky_elm}
                        </div>
                    )}
                </div>

                <div className="h-100per padding-x-8px">{right_elm}</div>
            </div>
        </div>
    );
}

export default ProfileLayoutNav;

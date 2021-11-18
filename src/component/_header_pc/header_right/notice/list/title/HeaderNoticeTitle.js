import React from 'react';
import PropTypes from 'prop-types';
//
import { useBool } from '../../../../../../_hooks/useBool';
//
import Actions from '../../../../../actions/_main/Actions';
//
import './HeaderNoticeTitle.scss';

//
HeaderNoticeTitle.propTypes = {};

//
function HeaderNoticeTitle(props) {
    //
    const { is_true, setIsTrue, toggleBool } = useBool();

    // -----

    //
    function handleClose() {
        setIsTrue(false);
    }

    //
    function clickActionContain(e) {
        e.stopPropagation();
    }

    //
    return (
        <div className="HeaderNoticeTitle flex-between-center padding-10px">
            <h2 className="font-24px font-700">Notifications</h2>

            <div>
                <Actions
                    class_action_contain={'HeaderNoticeTitle_action'}
                    class_action_contain_mb="action-contain-mb-bottom"
                    is_show={is_true}
                    x_always={'right'}
                    //
                    handleClose={handleClose}
                    toggleShow={toggleBool}
                >
                    <div
                        className="HeaderNoticeTitle_action_contain padding-y-8px text-333"
                        onClick={clickActionContain}
                    >
                        {[
                            { title: 'Mark all as read' },
                            { title: 'Notification settings' },
                            { title: 'Open notification' },
                        ].map((item, ix) => (
                            <div
                                key={ix}
                                className="margin-x-8px padding-8px brs-5px line-20px font-500 cursor-pointer hv-bg-hv"
                            >
                                {item.title}
                            </div>
                        ))}
                    </div>
                </Actions>
            </div>
        </div>
    );
}

export default HeaderNoticeTitle;

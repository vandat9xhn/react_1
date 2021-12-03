import React from 'react';
import PropTypes from 'prop-types';
// 
import BtnActionsOther from '../../../../../../../component/button/actions_other/BtnActionsOther';

//
GPMemUserPageLayout.propTypes = {};

//
function GPMemUserPageLayout({
    name,
    picture,

    badge_arr,
    badge_count,

    info_1,
    info_2,

    action_elm,
    has_action_other,
    handle_API_ActionOther_L,
    handleActionOther,
}) {
    //
    return (
        <div className="GPMemUserPageLayout padding-y-8px break-word">
            <div className="display-flex align-items-center">
                <div className="flex-shrink-0 margin-right-12px">{picture}</div>

                <div className="flex-grow-1 flex-between-center">
                    <div className="display-flex flex-col space-between padding-right-8px">
                        <div>{name}</div>

                        {badge_count > 0 ? (
                            <div className="display-flex align-items-center font-13px">
                                {badge_arr.map((item) => (
                                    <div className="margin-right-4px bg-fb-active text-blue">
                                        {item.title}
                                    </div>
                                ))}

                                {badge_count - badge_arr.length ? (
                                    <div className="padding-x-4px padding-y-2px bg-ccc brs-6px">
                                        +{badge_count - badge_arr.length}
                                    </div>
                                ) : null}
                            </div>
                        ) : null}

                        <div className="font-500 font-12px text-secondary">
                            {info_1}
                        </div>

                        <div className="font-12px text-secondary">{info_2}</div>
                    </div>

                    <div className="display-flex">
                        {action_elm ? <div>{action_elm}</div> : null}

                        {has_action_other ? (
                            <div className="margin-left-5px">
                                <BtnActionsOther
                                    handle_API_L={handle_API_ActionOther_L}
                                    handleAction={handleActionOther}
                                />
                            </div>
                        ) : null}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default GPMemUserPageLayout;

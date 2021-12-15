import React from 'react';
import PropTypes from 'prop-types';
//
import { IS_MOBILE } from '../../../../../_constant/Constant';
//
import BtnPageCase from '../../../../../component/button/page_actions/_case/BtnPageCase';
import ActionsPageOther from '../../../../../component/actions_page/other/ActionsPageOther';
//
import './FbPageActions.scss';

//
FbPageActions.propTypes = {};

//
function FbPageActions({
    page_id,
    action_main_arr,
    action_arr,

    has_liked,
    has_followed,

    handleAction,
}) {
    //
    return IS_MOBILE ? (
        <div className="FbPageActionsMb display-flex flex-wrap">
            <div className="flex-grow-1 padding-4px">
                <BtnPageCase
                    action_name={action_arr[0]}
                    // use_title={use_title}
                    // use_icon={use_icon}
                    page_id={page_id}
                    has_liked={has_liked}
                    has_followed={has_followed}
                    handleAction={handleAction}
                />
            </div>

            <div className="flex-grow-1 display-flex flex-wrap">
                {action_arr[1] ? (
                    <div className="flex-grow-1 padding-4px">
                        <BtnPageCase
                            action_name={action_arr[1]}
                            // use_title={use_title}
                            // use_icon={use_icon}
                            page_id={page_id}
                            has_liked={has_liked}
                            has_followed={has_followed}
                            handleAction={handleAction}
                        />
                    </div>
                ) : null}

                <div className="padding-4px">
                    <ActionsPageOther
                        page_id={page_id}
                        handleAction={handleAction}
                    />
                </div>
            </div>
        </div>
    ) : (
        <div className="FbPageActions">
            <BtnPageCase
                action_name={action_main_arr[0]}
                // use_title={use_title}
                // use_icon={use_icon}
                page_id={page_id}
                has_liked={has_liked}
                has_followed={has_followed}
                handleAction={handleAction}
            />
        </div>
    );
}

export default FbPageActions;

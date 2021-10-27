import React from 'react';
import PropTypes from 'prop-types';
// 
import { IS_MOBILE } from '../../../_constant/Constant';
// 
import ActionsPc from '../../actions/pc/ActionsPc';

//
ActionPreviewProfile.propTypes = {};

//
function ActionPreviewProfile(props) { 
    //
    if (!IS_MOBILE) {
        return null;
    }



    //
    return <div>
        <ActionsPc
            title_action={title_action}
            is_show={is_show}
            scroll_elm={scroll_elm}
            // 
            toggleShow={toggleShow}
            callbackOpen={callbackOpen}
            callbackClose={callbackClose}
        >
            <div>
                <div>
                    <div></div>

                    <div></div>
                </div>

                <div className="display-flex-center">
                    <button className="" type="button" onClick={}>
                        
                    </button>

                    <button className="" type="button" onClick={}></button>

                    <button className="" type="button" onClick={}></button>
                </div>
            </div>
        </ActionsPc>
    </div>;
}

export default ActionPreviewProfile;

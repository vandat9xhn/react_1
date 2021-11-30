import React from 'react';
import PropTypes from 'prop-types';
//
import { useBool } from '../../../../../../_hooks/useBool';
//
import ToggleSwitch from '../../../../../../component/some_div/switch_div/switch/ToggleSwitch';

//
GPTopicsSettings.propTypes = {};

//
function GPTopicsSettings(props) {
    //
    const { is_true, toggleBool } = useBool();

    //
    return (
        <div className="GPTopicsSettings">
            <h2 className="GroupPageTopics_title">Settings</h2>

            <div className="flex-between-center margin-top-10px">
                <div>
                    <div className="font-600">Show group topics list</div>

                    <div className="font-12px text-secondary">
                        A section with the top three pinned or popular topics
                        will appear as part of the group's feed.
                    </div>
                </div>

                <div className="cursor-pointer" onClick={toggleBool}>
                    <ToggleSwitch switch_on={is_true} />
                </div>
            </div>
        </div>
    );
}

export default GPTopicsSettings;

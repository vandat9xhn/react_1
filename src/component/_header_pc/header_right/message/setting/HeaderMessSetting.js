import React from 'react';
import PropTypes from 'prop-types';
//
import SwitchDiv from '../../../../some_div/switch_div/_main/SwitchDiv';
//
import './HeaderMessSetting.scss';

//
HeaderMessSetting.propTypes = {};

//
function HeaderMessSetting(props) {
    //
    function clickSetting(e) {
        e.stopPropagation();
    }

    //
    return (
        <div className="HeaderMessSetting padding-y-8px" onClick={clickSetting}>
            <div className="padding-x-16px padding-y-8px">
                <div className="line-20px font-17px font-500">
                    Chat settings
                </div>

                <div className="line-16px font-13px text-secondary">
                    Customise your Messenger experience.
                </div>
            </div>

            <div className="HeaderMessSetting_separate"></div>

            <div className="text-333">
                {[
                    { title: 'Incoming call sounds', info: '' },
                    {
                        title: 'Message sounds',
                        info: '',
                    },
                    {
                        title: 'Pop up new messages',
                        info: 'Automatically open new messages',
                    },
                ].map((item, ix) => (
                    <div key={ix} className="HeaderMessSetting_item">
                        <SwitchDiv switch_on={true}>
                            <div>
                                <div className="font-500 line-20px">
                                    {item.title}
                                </div>

                                <div className="line-16px font-12px">
                                    {item.info}
                                </div>
                            </div>
                        </SwitchDiv>
                    </div>
                ))}
            </div>

            <div className="HeaderMessSetting_separate"></div>

            <div className="text-333">
                {[
                    { title: 'Turn off active status', info: '' },
                    {
                        title: 'Message requests',
                        info: '',
                    },
                    {
                        title: 'Message delivery settings',
                        info: '',
                    },
                    { title: 'Block settings', info: '' },
                ].map((item, ix) => (
                    <div key={ix} className="HeaderMessSetting_item">
                        <div>
                            <div className="font-500 line-20px">
                                {item.title}
                            </div>

                            <div className="line-16px font-12px">
                                {item.info}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default HeaderMessSetting;

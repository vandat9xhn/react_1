import React, { useState } from 'react';
import PropTypes from 'prop-types';
//
import { useMakeBodyHidden } from '../../../../../../_hooks/useMakeBodyHidden';
//
import ScreenBlurHead from '../../../../../_screen/components/part/head/ScreenBlurHead';
import ScreenBlurFootYesNo from '../../../../../_screen/components/part/foot_yes_no/ScreenBlurFootYesNo';
import InputNotValid from '../../../../../input/input_not_valid/InputNotValid';
//
import './ChatGroupNameScreen.scss';

//
ChatGroupNameScreen.propTypes = {};

//
function ChatGroupNameScreen({ group_name, changeGroupName, handleClose }) {
    //
    const [value, setValue] = useState(group_name);

    //
    useMakeBodyHidden({ use_z_index: true, screen_z_index: 41 });

    // ----

    //
    function handleChange(e) {
        setValue(e.target.value);
    }

    //
    function onChangeGroupName() {
        changeGroupName(value);
    }

    //
    return (
        <div className="ChatGroupNameScreen screen">
            <div className="ChatGroupNameScreen_contain screen-contain w-550px">
                <div>
                    <ScreenBlurHead
                        title="Change chat name"
                        is_center={true}
                        closeScreenBlur={handleClose}
                    />
                </div>

                <div className="ChatGroupNameScreen_main padding-x-16px padding-top-16px">
                    <div className="margin-top-4px font-13px text-secondary">
                        Changing the name of a group chat changes it for
                        everyone.
                    </div>

                    <div className="margin-top-20px margin-bottom-6px">
                        <InputNotValid
                            value={value}
                            placeholder={group_name || 'Group name'}
                            max_length={50}
                            handleChange={handleChange}
                        />
                    </div>

                    <div>
                        <ScreenBlurFootYesNo
                            title_no="Cancel"
                            title_yes="Save"
                            disabled={false}
                            handleConfirm={onChangeGroupName}
                            closeScreenBlur={handleClose}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ChatGroupNameScreen;

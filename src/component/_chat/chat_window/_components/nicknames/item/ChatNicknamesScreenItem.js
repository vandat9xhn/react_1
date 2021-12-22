import React, { useRef, useState } from 'react';
import PropTypes from 'prop-types';
//
import { useBool } from '../../../../../../_hooks/useBool';
//
import IconsEdit from '../../../../../../_icons_svg/icons_edit/IconsEdit';
import IconSent from '../../../../../../_icons_svg/icons_status_message/icon_sent/IconSent';
import InputNotValid from '../../../../../input/input_not_valid/InputNotValid';
//
import './ChatNicknamesScreenItem.scss';

//
ChatNicknamesScreenItem.propTypes = {};

//
function ChatNicknamesScreenItem({ ix, user, nickname, changeNickName }) {
    //
    const user_name = `${user.first_name} ${user.last_name}`;

    //
    const [value, setValue] = useState(nickname);

    //
    const ref_input = useRef(null);

    //
    const { is_true, setIsTrue } = useBool();

    // -----

    //
    function startEditing() {
        setIsTrue(true);

        setTimeout(() => {
            ref_input.current.getElementsByTagName('input')[0].focus();
        }, 0);
    }

    //
    function editingDone(e) {
        if (is_true) {
            e.stopPropagation();
            setIsTrue(false);

            changeNickName({ nickname: value, user_ix: ix });
        }
    }

    //
    function handleChange(e) {
        setValue(e.target.value);
    }

    //
    function handleKeyDown(e) {
        const keyCode = e.keyCode;

        if (keyCode == 13 || keyCode == 27) {
            editingDone(e);
        }
    }

    //
    return (
        <div
            className={`ChatNicknamesScreenItem padding-8px brs-6px text-333 ${
                is_true ? '' : 'cursor-pointer hv-bg-hv'
            }`}
            onClick={startEditing}
        >
            <div className="display-flex align-items-center">
                <img
                    className="brs-50 object-fit-cover"
                    src={user.picture}
                    alt=""
                    width="36"
                    height="36"
                />

                <div className="flex-grow-1 flex-between-center margin-left-12px">
                    <div ref={ref_input} className="flex-grow-1">
                        {is_true ? (
                            <div>
                                <InputNotValid
                                    value={value}
                                    placeholder={user_name}
                                    handleChange={handleChange}
                                    input_props={{ onKeyDown: handleKeyDown }}
                                />
                            </div>
                        ) : (
                            <div>
                                <div className="font-500">
                                    {value || user_name}
                                </div>

                                <div className="font-13px">
                                    {value ? user_name : 'Set nickname'}
                                </div>
                            </div>
                        )}
                    </div>

                    <div className="margin-left-8px">
                        {is_true ? (
                            <div
                                className="cursor-pointer"
                                onClick={editingDone}
                            >
                                <IconSent size_icon="20px" />
                            </div>
                        ) : (
                            <IconsEdit size_icon="20px" />
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ChatNicknamesScreenItem;

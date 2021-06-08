import React, { useState } from 'react';
import PropTypes from 'prop-types';

import IconDiv from '../../../../some_div/icon_div/IconDiv';
import IconsAction from '../../../../../_icons_svg/icons_action/IconsAction';
//
import YesNoDiv from '../../../../some_div/yes_no_div/YesNoDiv';

import './ActionsEdit.scss';

//
ActionsEdit.propTypes = {};

//
function ActionsEdit({ chat_ix, delBdMessage }) {
    //
    const [open_yes_no, setOpenYesNo] = useState(false);

    //
    function onDelBdMessage() {
        delBdMessage(chat_ix);
    }

    //
    function openYesNoDelete() {
        setOpenYesNo(true);
    }

    //
    function closeYesNo() {
        setOpenYesNo(false);
    }

    //
    return (
        <div>
            <div className="ActionsEdit_contain">
                <div className="ActionsChat__del">
                    <div className="ActionsEdit_row" onClick={openYesNoDelete}>
                        <IconDiv Icon={IconsAction}>Delete message</IconDiv>
                    </div>

                    <div className={open_yes_no ? '' : 'display-none'}>
                        <YesNoDiv
                            handleYes={onDelBdMessage}
                            handleNo={closeYesNo}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ActionsEdit;

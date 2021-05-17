import React from 'react';
import PropTypes from 'prop-types';
//
import IconDiv from '../../../../../../component/some_div/icon_div/IconDiv';
import IconsAction from '../../../../../../_icons_svg/icons_action/IconsAction';

//
CaseNormal.propTypes = {};

//
function CaseNormal(props) {
    const { handleAddFriend } = props;

    //
    return (
        <div>
            <div onClick={handleAddFriend}>
                <IconDiv y={200} color="#000000ad" Icon={IconsAction}>
                    Add friend
                </IconDiv>
            </div>
        </div>
    );
}

export default CaseNormal;

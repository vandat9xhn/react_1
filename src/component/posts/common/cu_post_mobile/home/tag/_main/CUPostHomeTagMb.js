import React from 'react';
import PropTypes from 'prop-types';
//
import IconsAction from '../../../../../../../_icons_svg/icons_action/IconsAction';
//
import CUPostChoiceLabelMb from '../../../_components/choice_label/CUPostChoiceLabelMb';

//
CUPostHomeTagMb.propTypes = {};

//
function CUPostHomeTagMb({ user_tag_arr, openChooseTagUsers }) {
    //
    return (
        <div className="CUPostHomeTagMb">
            <CUPostChoiceLabelMb
                Icon={<IconsAction y={200} size_icon="14px" />}
                title={
                    user_tag_arr.length == 0
                        ? 'Tag Friends'
                        : `With ${user_tag_arr
                              .map((item) => item.last_name)
                              .join(', ')}`
                }
                handleClick={openChooseTagUsers}
            />
        </div>
    );
}

export default CUPostHomeTagMb;

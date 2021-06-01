import React from 'react';
import PropTypes from 'prop-types';
// 
import { user_propTypes } from '../../../../../../../../../_prop-types/_CommonPropTypes';
// 
import PicNameContent from '../../../../../../../../../component/picture_name/pic_name_content/PicNameContent';

// 
PfRelationOptionItem.propTypes = {
    item: PropTypes.object,
    ix: PropTypes.number,
    handleSelectOption: PropTypes.func,
};

// 
function PfRelationOptionItem({item, ix, handleSelectOption}) {
    // 
    function onSelectOption() {
        handleSelectOption(ix)
    }

    // 
    return (
        <div className="padding-8px">
            <div>
                <PicNameContent
                    user={item}
                    // content={}
                    // is_inline_block={}
                    handleClick={onSelectOption}
                />
            </div>
        </div>
    );
}

export default PfRelationOptionItem;
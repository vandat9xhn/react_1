import React from 'react';
import PropTypes from 'prop-types';
//
import CheckBoxCustom from '../../../../../../../component/input/checkbox_custom/CheckBoxCustom';

//
FsScFilterCheckedItem.propTypes = {
    ix: PropTypes.number,
    checked: PropTypes.bool,
    title: PropTypes.string,
    handleFilterChecked: PropTypes.func,
};

//
function FsScFilterCheckedItem({
    filter_ix,
    item_ix,
    
    title,
    checked,

    handleFilterChecked,
}) {
    //
    function onChangeChecked() {
        handleFilterChecked({ filter_ix: filter_ix, item_ix: item_ix });
    }

    //
    return (
        <CheckBoxCustom
            title={title}
            checked={checked}
            handleChangeChecked={onChangeChecked}
        />
    );
}

export default FsScFilterCheckedItem;

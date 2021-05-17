import React from 'react';
import PropTypes from 'prop-types';
//
import CheckBoxCustom from '../../../../../../../component/input/checkbox_custom/CheckBoxCustom';

//
FilterAreaItem.propTypes = {
    area_ix: PropTypes.number,
    checked: PropTypes.bool,
    title: PropTypes.string,
    handleAreaChecked: PropTypes.func,
};

//
function FilterAreaItem(props) {
    const { area_ix, title, checked, handleAreaChecked } = props;
    //
    function onChangeChecked() {
        handleAreaChecked(area_ix);
    }

    //
    return (
        <div>
            <CheckBoxCustom
                title={title}
                checked={checked}
                handleChangeChecked={onChangeChecked}
            />
        </div>
    );
}

export default FilterAreaItem;

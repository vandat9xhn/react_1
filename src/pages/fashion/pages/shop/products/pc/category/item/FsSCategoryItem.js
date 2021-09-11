import React from 'react';
import PropTypes from 'prop-types';
//
import IconCaret from '../../../../../../../../_icons_svg/_icon_caret/IconCaret';

//
FsSCategoryItem.propTypes = {};

//
function FsSCategoryItem({ id, name, is_active, handleChange }) {
    //
    function onChange() {
        !is_active && handleChange(id);
    }

    //
    return (
        <div
            className={`FsSCategoryItem pos-rel padding-left-15px padding-y-8px padding-right-8px cursor-pointer ${
                is_active ? 'color-fashion' : ''
            }`}
            onClick={onChange}
        >
            {is_active ? (
                <span className="pos-abs left-0 y-center">
                    <IconCaret
                        class_icon="rotate--90"
                        size_icon="0.5rem"
                        fill="currentColor"
                    />
                </span>
            ) : null}

            <span>{name}</span>
        </div>
    );
}

export default FsSCategoryItem;

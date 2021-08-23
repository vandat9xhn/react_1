import React from 'react';
import PropTypes from 'prop-types';
//
import FsRightBottomChecked from '../../../../../../components/right_bottom_checked/FsRightBottomChecked';
//
import './FsIIfRTierVariantItem.scss';

//
FsIIfRTierVariantItem.propTypes = {
    text: PropTypes.string,
    handleClick: PropTypes.func,
};

//
function FsIIfRTierVariantItem({ tier_ix, ix, is_active, text, handleClick }) {
    //
    function onClick() {
        handleClick(tier_ix, ix);
    }

    //
    return (
        <div
            className={`FsIIfRTierVariantItem pos-rel padding-8px cursor-pointer ${
                is_active
                    ? 'FsIIfRTierVariantItem-active color-fashion'
                    : 'text-secondary'
            }`}
            onClick={onClick}
        >
            <span>{text}</span>

            <FsRightBottomChecked is_active={is_active} />
        </div>
    );
}

export default FsIIfRTierVariantItem;

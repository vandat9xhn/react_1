import React from 'react';
import PropTypes from 'prop-types';
//
import FsRightBottomChecked from '../../../../../../components/right_bottom_checked/FsRightBottomChecked';
//
import './FsHDTierItem.scss';

//
FsHDTierItem.propTypes = {
    tier_v_ix: PropTypes.number,
    tier_ix: PropTypes.number,
    is_active: PropTypes.bool,
    text: PropTypes.string,
    handleClick: PropTypes.func,
};

//
function FsHDTierItem({ tier_v_ix, tier_ix, is_active, text, handleClick }) {
    //
    function onClick() {
        handleClick(tier_v_ix, tier_ix);
    }

    //
    return (
        <div
            className={`FsHDTierItem pos-rel padding-8px cursor-pointer ${
                is_active
                    ? 'FsHDTierItem-active color-fashion'
                    : 'text-secondary'
            }`}
            onClick={onClick}
        >
            <span>{text}</span>

            <FsRightBottomChecked is_active={is_active} />
        </div>
    );
}

export default FsHDTierItem;

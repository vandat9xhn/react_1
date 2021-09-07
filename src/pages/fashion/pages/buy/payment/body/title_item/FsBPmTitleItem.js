import React from 'react';
import PropTypes from 'prop-types';
//
import FsRightBottomChecked from '../../../../../components/right_bottom_checked/FsRightBottomChecked';
//
import './FsBPmTitleItem.scss';

//
FsBPmTitleItem.propTypes = {
    ix: PropTypes.number,
    title: PropTypes.string,
    is_active: PropTypes.bool,
    handleChangePayment: PropTypes.func,
};

//
function FsBPmTitleItem({ ix, title, is_active, handleChangePayment }) {
    //
    function onChangePayment() {
        handleChangePayment(ix);
    }

    //
    return (
        <div
            className={`FsBPmTitleItem pos-rel padding-8px cursor-pointer font-14px text-nowrap ${
                is_active
                    ? 'FsBPmTitleItem-active color-fashion'
                    : 'border-blur text-secondary'
            }`}
            onClick={onChangePayment}
        >
            <div>{title}</div>

            <FsRightBottomChecked is_active={is_active} />
        </div>
    );
}

export default FsBPmTitleItem;

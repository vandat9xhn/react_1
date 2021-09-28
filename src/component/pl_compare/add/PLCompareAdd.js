import React from 'react';
import PropTypes from 'prop-types';
// 
import IconPlusSubtract from '../../../_icons_svg/_icon_plus_subtract/IconPlusSubtract';
// 
import './PLCompareAdd.scss';

//
PLCompareAdd.propTypes = {};

//
function PLCompareAdd({ ix, addCompareItem }) {
    //
    function onAddCompareItem() {
        addCompareItem(ix);
    }

    //
    return (
        <div
            className="PLCompareAdd display-flex-center flex-col h-100per text-third cursor-pointer"
            onClick={onAddCompareItem}
        >
            <div className="PLCompareAdd_icon display-flex-center brs-5px">
                <IconPlusSubtract size_icon="22px" />
            </div>

            <div className="margin-top-5px font-12px">Thêm sản phẩm</div>
        </div>
    );
}

export default PLCompareAdd;

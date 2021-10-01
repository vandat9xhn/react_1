import React from 'react';
import PropTypes from 'prop-types';
//
import IconCaret from '../../../../../../_icons_svg/_icon_caret/IconCaret';

//
PLDetailArea.propTypes = {};

//
function PLDetailArea({ province, openDetailAddress }) {
    //
    return (
        <div className="PLDetailArea">
            <span>Giá tại</span>

            <button
                className="btn bg-transparent text-blue cursor-pointer"
                type="button"
                onClick={openDetailAddress}
            >
                <span>{province}</span>

                <IconCaret size_icon="14px" fill="currentColor" />
            </button>
        </div>
    );
}

export default PLDetailArea;

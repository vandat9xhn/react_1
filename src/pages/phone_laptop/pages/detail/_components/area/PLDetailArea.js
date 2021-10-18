import React from 'react';
import PropTypes from 'prop-types';
//
import IconCaret from '../../../../../../_icons_svg/_icon_caret/IconCaret';

//
PLDetailArea.propTypes = {};

//
function PLDetailArea({ openDetailAddress }) {
    //
    return (
        <div className="PLDetailArea">
            <span>Giá tại:</span>

            <button
                className="display-flex-ceenter btn bg-transparent text-blue cursor-pointer"
                type="button"
                onClick={openDetailAddress}
            >
                <span className="margin-x-5px">
                    {localStorage.pl_province || 'Hà Nội'}
                </span>

                <IconCaret size_icon="14px" fill="currentColor" />
            </button>
        </div>
    );
}

export default PLDetailArea;

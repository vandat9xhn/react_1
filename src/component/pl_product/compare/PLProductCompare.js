import React from 'react';
import PropTypes from 'prop-types';
//
import IconPlusSubtract from '../../../_icons_svg/_icon_plus_subtract/IconPlusSubtract';

//
PLProductCompare.propTypes = {};

//
function PLProductCompare({ added_compare, addToCompare }) {
    //
    function onAddToCompare(e) {
        e.preventDefault();

        addToCompare && addToCompare();
    }

    //
    return (
        <div className="PLProductCompare">
            <div
                className="inline-flex align-items-center text-blue cursor-pointer"
                onClick={onAddToCompare}
            >
                <div className="PhoneDetailHead_compare_icon display-flex-center brs-50 border-blue">
                    <IconPlusSubtract
                        size_icon="13px"
                        stroke="currentColor"
                        stroke_width="10"
                    />
                </div>

                <div className="margin-left-5px">
                    {added_compare ? 'Đã thêm so sánh' : 'So sánh'}
                </div>
            </div>
        </div>
    );
}

export default PLProductCompare;

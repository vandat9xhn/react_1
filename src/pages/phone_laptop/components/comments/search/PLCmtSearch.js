import React, { useRef } from 'react';
import PropTypes from 'prop-types';
//
import IconsInput from '../../../../../_icons_svg/Icons_input/IconsInput';

//
PLCmtSearch.propTypes = {};

//
function PLCmtSearch({ handleSearch }) {
    //
    const ref_input = useRef(null);

    // -----

    //
    function onSearch() {
        handleSearch(ref_input.current.value);
    }

    //
    function handleKeyDown(e) {
        if (e.keyCode == 13) {
            onSearch();
        }
    }

    //
    return (
        <div className="PLCmtSearch brs-3px border-blur overflow-hidden">
            <div className="PLCmtSearch_row display-flex align-items-center">
                <div
                    className="padding-x-5px cursor-pointer"
                    onClick={onSearch}
                >
                    <IconsInput y={200} size_icon="14px" />
                </div>

                <input
                    ref={ref_input}
                    className="flex-grow-1 padding-y-8px padding-x-5px border-none outline-none"
                    type="text"
                    placeholder="Tìm theo nội dung, người gửi..."
                    onKeyDown={handleKeyDown}
                />
            </div>
        </div>
    );
}

export default PLCmtSearch;

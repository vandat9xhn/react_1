import React, { useState } from 'react';
import PropTypes from 'prop-types';
//
import IconsInput from '../../../../../../../_icons_svg/Icons_input/IconsInput';

//
FsPPurchaseRowSearch.propTypes = {};

//
function FsPPurchaseRowSearch({ handleSearch }) {
    //
    const [value, setValue] = useState('');

    //
    function handleChange(e) {
        setValue(e.target.value);
    }

    //
    function onSearch() {
        handleSearch(value);
    }

    //
    function handleKeyDown(e) {
        if (e.keyCode == 13) {
            onSearch();
        }
    }

    //
    return (
        <div className="FsPPurchaseRowSearch padding-10px bg-blur">
            <div className="display-flex">
                <div
                    className="padding-x-5px cursor-pointer"
                    onClick={onSearch}
                >
                    <IconsInput y={200} size_icon="1.5rem" />
                </div>

                <input
                    className="flex-grow-1 border-none padding-5px"
                    value={value}
                    type="text"
                    autoComplete="off"
                    placeholder="Tìm kiếm theo Tên Shop, ID đơn hàng hoặc Tên Sản phẩm"
                    onKeyDown={handleKeyDown}
                    onChange={handleChange}
                />
            </div>
        </div>
    );
}

export default FsPPurchaseRowSearch;

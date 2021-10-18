import React, { useState } from 'react';
import PropTypes from 'prop-types';
//
import { useDisplayBlockToNone } from '../../../../../../_hooks/useDisplayBlockToNone';
//
import IconCaret from '../../../../../../_icons_svg/_icon_caret/IconCaret';
import IconsInput from '../../../../../../_icons_svg/Icons_input/IconsInput';
//
import PLChooseAddressInputItem from '../item/PLChooseAddressInputItem';
//
import './PLChooseAddressInput.scss';

//
PLChooseAddressInput.propTypes = {};

//
function PLChooseAddressInput({
    address_arr,
    address_name,
    has_fetched,

    placeholder_search,
    placeholder_address,
    disabled,

    getData_Address,
    chooseAddress,
}) {
    //
    const [value_search, setValueSearch] = useState('');

    //
    const { opacity_0, display_none, toggleBlockNone } = useDisplayBlockToNone({
        trans_time: 260,
    });

    // -----

    //
    function openChooseAddress() {
        toggleBlockNone();
        !has_fetched && getData_Address();
    }

    //
    function changeValueSearch(e) {
        setValueSearch(e.target.value);
    }

    //
    function onChooseAddress(id = 0) {
        toggleBlockNone();
        chooseAddress(id);
    }

    //
    return (
        <div
            className={`PLChooseAddressInput pos-rel ${
                disabled ? 'pointer-events-none opacity-05' : ''
            }`}
        >
            <div
                className="flex-between-center padding-10px border-blur brs-4px cursor-pointer"
                onClick={openChooseAddress}
            >
                <div>{address_name || placeholder_address}</div>

                <IconCaret size_icon="16px" />
            </div>

            {display_none ? null : (
                <div
                    className={`PLChooseAddressInput_list pos-abs top-100per left-0 z-index-1 w-100per padding-10px border-blur bg-primary overflow-hidden transition-all-250ms ${
                        opacity_0 ? 'PLChooseAddressInput_list-none' : ''
                    }`}
                >
                    <div className="display-flex align-items-center padding-5px border-blur brs-4px">
                        <div className="display-flex-center padding-x-5px">
                            <IconsInput y={200} size_icon="15px" />
                        </div>

                        <input
                            className="flex-grow-1 border-none outline-none"
                            type="text"
                            placeholder={placeholder_search}
                            value={value_search}
                            onChange={changeValueSearch}
                        />
                    </div>

                    <div className="PLChooseAddressInput_list_contain overflow-y-auto scroll-thin">
                        <ul className="display-flex flex-wrap list-none">
                            {address_arr
                                .filter(
                                    (item) =>
                                        item.name.search(value_search) >= 0
                                )
                                .map((item, ix) => (
                                    <li key={item.id} className="w-50per">
                                        <PLChooseAddressInputItem
                                            address_name={item.name}
                                            id={item.id}
                                            is_active={
                                                item.name == address_name
                                            }
                                            handleClick={onChooseAddress}
                                        />
                                    </li>
                                ))}
                        </ul>
                    </div>
                </div>
            )}
        </div>
    );
}

export default PLChooseAddressInput;

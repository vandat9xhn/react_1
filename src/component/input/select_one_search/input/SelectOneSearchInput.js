import React from 'react';
import PropTypes from 'prop-types';
//
import IconCaret from '../../../../_icons_svg/_icon_caret/IconCaret';
//
import './SelectOneSearchInput.scss';

//
SelectOneSearchInput.propTypes = {};

//
function SelectOneSearchInput({
    title,
    is_active,

    use_input,
    value_search,
    placeholder,

    showOptions,
    changeSearch,
}) {
    //
    return (
        <div className="SelectOneSearchInput pos-rel line-20px">
            <div
                className={`padding-8px brs-6px cursor-pointer hv-bg-fb ${
                    is_active && use_input ? 'display-none' : ''
                }`}
                onClick={showOptions}
            >
                {title}
            </div>

            {use_input ? (
                <div className={`${is_active ? '' : 'display-none'}`}>
                    <input
                        className="SelectOneSearchInput_input w-100per padding-8px brs-6px border-none outline-none bg-fb"
                        type="text"
                        placeholder={placeholder}
                        value={value_search}
                        onChange={changeSearch}
                    />
                </div>
            ) : null}

            <div className="pos-abs right-0 y-center padding-right-12px">
                <IconCaret size_icon="16px" fill="var(--md-color-third)" />
            </div>
        </div>
    );
}

export default SelectOneSearchInput;

import React from 'react';
import PropTypes from 'prop-types';
//
import IconCaret from '../../../../../../../_icons_svg/_icon_caret/IconCaret';
//
import PLDShortConfigItem from '../item/PLDShortConfigItem';
//
import './PLDetailShortConfig.scss';

//
PLDetailShortConfig.propTypes = {};

//
function PLDetailShortConfig({
    name,
    type,
    short_config_arr,

    openDetailConfig,
}) {
    //
    return (
        <div className="PLDetailShortConfig font-14px">
            <h2 className="PLDetailShortConfig_title margin-bottom-15px font-20px font-700">
                <span>{name}</span>

                {type ? (
                    <span className="margin-left-5px">({type})</span>
                ) : null}
            </h2>

            <div className="margin-bottom-15px">
                <ul className="list-none">
                    {short_config_arr.map((item, ix) => (
                        <li
                            key={ix}
                            className={`padding-10px ${
                                ix % 2 == 1 ? '' : 'bg-f1'
                            }`}
                        >
                            <PLDShortConfigItem
                                name={item.name}
                                value={item.value}
                            />
                        </li>
                    ))}
                </ul>
            </div>

            <div className="display-flex-center">
                <button
                    className="PLDetailShortConfig_btn btn-active margin-auto w-100per padding-y-8px border-blue brs-4px text-blue cursor-pointer"
                    type="button"
                    onClick={openDetailConfig}
                >
                    <span className="margin-right-10px">
                        Xem thêm cấu hình chi tiết
                    </span>

                    <IconCaret
                        class_icon="rotate--90"
                        size_icon="14px"
                        fill="currentColor"
                    />
                </button>
            </div>
        </div>
    );
}

export default PLDetailShortConfig;

import React from 'react';
import PropTypes from 'prop-types';

//
PLDetailScreenConfig.propTypes = {};

//
function PLDetailScreenConfig({ config_arr, img_main }) {
    //
    return (
        <div className="PLDetailScreenConfig">
            <img className="w-100per" src={img_main} alt="" />

            <div>
                {config_arr.map((config_obj, ix) => (
                    <div key={ix} className="PLDetailScreenConfig_list">
                        <div className="padding-x-10px padding-y-5px bg-ccc">
                            {config_obj.title}
                        </div>

                        <ul className="list-none">
                            {config_obj.data.map((item, item_ix) => (
                                <li
                                    key={item_ix}
                                    className="PLDetailScreenConfig_item display-flex padding-10px"
                                >
                                    <div className="PLDetailScreenConfig_item_left font-700">
                                        {item.title}
                                    </div>

                                    <div className="PLDetailScreenConfig_item_right padding-left-10px">
                                        {item.config}
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default PLDetailScreenConfig;

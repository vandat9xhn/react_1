import React from 'react';
import PropTypes from 'prop-types';
//
import { formatLocalDateTimeString } from '../../../../../../../_some_function/FormatDate';
// 
import { city_bg_color_arr } from '../../../../../_data/bg_color';
// 
import CityHistoryItem from '../item/CityHistoryItem';
//
import './CityHistories.scss';

//
CityHistories.propTypes = {};

//
function CityHistories({ histories, ...rest_props }) {
    //
    return (
        <div className="CityHistories">
            <ul className="CityHistories_row">
                {histories.map((item, ix) => (
                    <li key={`${ix}`} className="CityHistories_item">
                        <div className="inline-block">
                            <div className="font-12px font-italic font-500">
                                Update at{' '}
                                {formatLocalDateTimeString(
                                    new Date(item.created_time)
                                )}
                            </div>
                        </div>

                        <div>
                            <CityHistoryItem
                                city={item.city}
                                street={item.street}
                                quote={item.quote}
                                image={item.image}
                                bg={city_bg_color_arr[item.bg_color].bg}
                                color={city_bg_color_arr[item.bg_color].color}
                                created_time={item.created_time}
                            />
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default CityHistories;

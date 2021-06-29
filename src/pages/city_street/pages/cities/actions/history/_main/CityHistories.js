import React from 'react';
import PropTypes from 'prop-types';
//
import CityHistoryItem from '../item/CityHistoryItem';
//
import './CityHistories.scss';
import { formatLocalDateTimeString } from '../../../../../../../_some_function/FormatDate';

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
                            <div className="font-12px font-italic label-field">
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
                                created_time={item.created_time}
                                bg={item.bg_color.split('.')[0]}
                                color={item.bg_color.split('.')[1]}
                            />
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default CityHistories;

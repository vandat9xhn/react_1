import React from 'react';
import PropTypes from 'prop-types';
//
import PLRatesItem from '../item/_main/PLRatesItem';
//
import './PLRates.scss';

//
PLRates.propTypes = {};

//
function PLRates({ rate_arr, handleSendDiscuss }) {
    //
    return (
        <div className="PLRates">
            <ul className="list-none">
                {rate_arr.map((rate_obj, ix) => (
                    <li key={rate_obj.id} className="PLRates_item">
                        <PLRatesItem
                            rate_obj={rate_obj}
                            handleSendDiscuss={handleSendDiscuss}
                        />
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default PLRates;

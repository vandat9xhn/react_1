import React from 'react';
import PropTypes from 'prop-types';
//
import PLDOfferHead from '../head/PLDOfferHead';
import PLDOfferItem from '../item/PLDOfferItem';

//
PLDetailOffer.propTypes = {};

//
function PLDetailOffer({ offer_obj }) {
    //
    const { data, end_time } = offer_obj;

    //
    return (
        <div className="PLDetailOffer border-blur brs-4px">
            <div>
                <PLDOfferHead count_offer={data.length} end_time={end_time} />
            </div>

            <div>
                <ul className="list-none">
                    {data.map((item, ix) => (
                        <li key={item.id}>
                            <PLDOfferItem info={item.info} />
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default PLDetailOffer;

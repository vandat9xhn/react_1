import React from 'react';
import PropTypes from 'prop-types';

//
CityHistoryItem.propTypes = {};

//
function CityHistoryItem({
    city,
    street,
    quote,
    image,
    bg,
    color,
    created_time,
}) {
    //
    return (
        <div className={`padding-8px ${bg} ${color}`}>
            <div>
                <address>
                    <div className={`${city ? '' : 'display-none'}`}>
                        City: {city}
                    </div>

                    <div className={`${street ? '' : 'display-none'}`}>
                        Street: {street}
                    </div>
                </address>

                <article
                    className={`CityHistoryItem_quote ${
                        quote ? '' : 'display-none'
                    }`}
                >
                    Quote: {quote}
                </article>
            </div>

            <div
                className={`CityHistoryItem_img ${image ? '' : 'display-none'}`}
            >
                <div>
                    <img
                        className="object-fit-cover"
                        src={image}
                        alt=""
                        width="200"
                        height="200"
                    />
                </div>
            </div>
        </div>
    );
}

export default CityHistoryItem;

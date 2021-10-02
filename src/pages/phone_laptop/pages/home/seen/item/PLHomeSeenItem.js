import React from 'react';
import PropTypes from 'prop-types';

//
PLHomeSeenItem.propTypes = {};

//
function PLHomeSeenItem({ name, img }) {
    //
    return (
        <div className="PLHomeSeenItem">
            <img
                className="PLHomeSeenItem_img w-100per object-fit-cover"
                src={img}
                alt=""
                height="80px"
            />

            <div className="PLHomeSeenItem_name margin-top-10px">{name}</div>
        </div>
    );
}

export default PLHomeSeenItem;

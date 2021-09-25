import React from 'react';
import PropTypes from 'prop-types';
//
import './PLDRltLinksItem.scss';

//
PLDRltLinksItem.propTypes = {};

//
function PLDRltLinksItem({ title }) {
    //
    return (
        <div className="PLDRltLinksItem padding-x-15px padding-y-5px border-blur">
            {title}
        </div>
    );
}

export default PLDRltLinksItem;

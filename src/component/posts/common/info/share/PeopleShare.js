import React from 'react';
import PropTypes from 'prop-types';
//
import './PeopleShare.scss';

//
PeopleShare.propTypes = {};

//
function PeopleShare({ item }) {
    //
    return (
        <div className="PeopleShare text-nowrap">
            <span className="text-white font-13px">
                {item.user.first_name} {item.user.last_name}
            </span>
        </div>
    );
}

export default PeopleShare;

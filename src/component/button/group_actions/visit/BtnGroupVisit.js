import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
//
import BtnActions from '../../actions/BtnActions';

//
BtnGroupVisit.propTypes = {
    ...BtnActions.propTypes,
};

//
function BtnGroupVisit({ group_id }) {
    //

    //
    return (
        <Link to={`/group/${group_id}`}>
            <BtnActions className="bg-fb-active" title="Visit" />
        </Link>
    );
}

export default BtnGroupVisit;

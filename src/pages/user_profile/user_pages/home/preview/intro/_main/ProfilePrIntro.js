import React from 'react';
import PropTypes from 'prop-types';
//
import './ProfilePrIntro.scss';

//
ProfilePrIntro.propTypes = {
    hobby: PropTypes.string,
    university: PropTypes.string,
    from: PropTypes.string,
    live_now: PropTypes.string,
};

//
function ProfilePrIntro(props) {
    const { hobby, university, from, live_now } = props;

    //
    return (
        <div className="ProfilePrIntro">
            <div>
                <span>From: </span>
                <span className="label-field">{from}</span>
            </div>

            <div>
                <span>Live at: </span>
                <span className="label-field">{live_now}</span>
            </div>

            <div>
                <span>Hobby: </span>
                <span className="label-field">{hobby}</span>
            </div>

            <div>
                <span>University: </span>
                <span className="label-field">{university}</span>
            </div>
        </div>
    );
}

export default ProfilePrIntro;

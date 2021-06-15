import React from 'react';
import PropTypes from 'prop-types';
//
import Contact from '../component/_contact/Contact';

//
AppPhone.propTypes = {};

//
function AppPhone({ component: ComponentPhone, props }) {
    return (
        <div>
            <div>
                <ComponentPhone {...props} />
            </div>

            <div className="AppContact">
                <Contact />
            </div>
        </div>
    );
}

export default AppPhone;

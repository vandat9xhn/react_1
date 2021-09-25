import React from 'react';
import PropTypes from 'prop-types';
//
import './PLDShortConfigItem.scss';

//
PLDShortConfigItem.propTypes = {};

//
function PLDShortConfigItem({ name, value }) {
    //
    return (
        <div className="PLDShortConfigItem">
            <div className="PLDShortConfigItem_row display-flex">
                <div className="PLDShortConfigItem_name">{name}:</div>

                <div className="PLDShortConfigItem_value flex-grow-1 padding-left-20p">
                    {value}
                </div>
            </div>
        </div>
    );
}

export default PLDShortConfigItem;

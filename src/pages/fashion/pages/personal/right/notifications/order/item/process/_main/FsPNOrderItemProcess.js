import React from 'react';
import PropTypes from 'prop-types';
//
import FsPNOIProcessItem from '../item/FsPNOIProcessItem';

//
FsPNOrderItemProcess.propTypes = {};

//
function FsPNOrderItemProcess({ process_arr }) {
    //
    return (
        <div className="FsPNOrderItemProcess">
            {process_arr.map((item, ix) => (
                <div key={ix}>
                    <FsPNOIProcessItem
                        title={item.title}
                        info={item.info}
                        created_time={item.created_time}
                    />
                </div>
            ))}
        </div>
    );
}

export default FsPNOrderItemProcess;

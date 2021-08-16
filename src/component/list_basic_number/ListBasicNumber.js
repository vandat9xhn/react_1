import React from 'react';
import PropTypes from 'prop-types';
//
import './ListBasicNumber.scss';

//
ListBasicNumber.propTypes = {};

//
function ListBasicNumber({ count, time_delay }) {
    //
    return (
        <div
            className="ListBasicNumber display-flex flex-col w-100per"
            style={{
                animationDuration: `${count}s`,
                animationDelay: `${time_delay}s`,
            }}
        >
            <div>0</div>

            {Array(count).map((_, ix) => (
                <div>{count - 1 - ix}</div>
            ))}

            <div>{count - 1}</div>
        </div>
    );
}

export default ListBasicNumber;

import React from 'react';
import PropTypes from 'prop-types';
//
import PLRIDiscussItem from '../item/PLRIDiscussItem';
import PLRIDiscussInput from '../input/PLRIDiscussInput';
//
import './PLRIDiscuss.scss';

//
PLRIDiscuss.propTypes = {};

//
function PLRIDiscuss({ discuss_arr }) {
    //
    return (
        <div className="PLRIDiscuss">
            <div className="PLRIDiscuss_input">
                <PLRIDiscussInput />
            </div>

            <div className="PLRIDiscuss_contain margin-left-20px padding-top-15px padding-left-15px">
                <ul className="list-none">
                    {discuss_arr.map((discuss_obj, ix) => (
                        <li key={discuss_obj.id}>
                            <PLRIDiscussItem discuss_obj={discuss_obj} />
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default PLRIDiscuss;

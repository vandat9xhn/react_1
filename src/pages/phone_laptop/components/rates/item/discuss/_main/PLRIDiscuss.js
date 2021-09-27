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
function PLRIDiscuss({ discuss_arr, handleSendDiscuss }) {
    //
    return (
        <div className="PLRIDiscuss">
            <div className="PLRIDiscuss_input margin-bottom-10px">
                <PLRIDiscussInput handleSendDiscuss={handleSendDiscuss} />
            </div>

            <div className="PLRIDiscuss_contain margin-left-20px padding-top-15px padding-left-15px">
                <ul className="list-none">
                    {discuss_arr.map((discuss_obj, ix) => (
                        <li key={discuss_obj.id} className="margin-bottom-15px">
                            <PLRIDiscussItem discuss_obj={discuss_obj} />
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default PLRIDiscuss;

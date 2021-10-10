import React from 'react';
import PropTypes from 'prop-types';
//
import CheckBox from '../../../../../input/checkbox/CheckBox';

//
CUPTagUserItemMb.propTypes = {};

//
function CUPTagUserItemMb({ ix, name, picture, checked, handleCheckedUser }) {
    //
    function handleClick() {
        handleCheckedUser(ix);
    }

    //
    return (
        <div className="CUPTagUserItemMb padding-5px" onClick={handleClick}>
            <div className="flex-between-center">
                <div className="display-flex align-items-center">
                    <img
                        className="brs-50 object-fit-cover"
                        src={picture}
                        alt=""
                        width="30"
                        height="30"
                    />

                    <div className="margin-left-10px">{name}</div>
                </div>

                <div className={`${checked ? 'text-blue' : 'text-white'}`}>
                    <CheckBox />
                </div>
            </div>
        </div>
    );
}

export default CUPTagUserItemMb;

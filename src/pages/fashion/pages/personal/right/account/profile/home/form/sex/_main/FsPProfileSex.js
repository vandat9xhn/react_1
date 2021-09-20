import React from 'react';
import PropTypes from 'prop-types';
//
import RadioCustom from '../../../../../../../../../../../component/input/radio_custom/RadioCustom';

//
FsPProfileSex.propTypes = {};

//
function FsPProfileSex({ sex_ix, handleChangeSex }) {
    //
    return (
        <div className="FsPProfileSex">
            <div className="display-flex">
                <div className="fs-personal-profile-label">Giới tính</div>

                <div className="display-flex">
                    {['Nam', 'Nữ', 'Khác'].map((title, ix) => (
                        <div
                            key={ix}
                            className="inline-flex align-items-center margin-right-15px cursor-pointer"
                            onClick={() => handleChangeSex(ix)}
                        >
                            <RadioCustom is_active={ix == sex_ix} />

                            <span className="margin-left-5px">{title}</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default FsPProfileSex;

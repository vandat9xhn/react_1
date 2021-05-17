import React from 'react';
import PropTypes from 'prop-types';
//
import './YesNoDiv.scss';


//
YesNoDiv.propTypes = {
    handleYes: PropTypes.func,
    handleNo: PropTypes.func,
};

function YesNoDiv(props) {
    const { handleYes, handleNo } = props;

    //
    return (
        <div className="YesNoDiv">
            <div className="YesNoDiv_row">
                <div
                    className="YesNoDiv_btn YesNoDiv_btn-yes hv-opacity"
                    onClick={handleYes}
                >
                    Yes
                </div>

                <div
                    className="YesNoDiv_btn YesNoDiv_btn-no hv-opacity"
                    onClick={handleNo}
                >
                    No
                </div>
            </div>
        </div>
    );
}

export default YesNoDiv;

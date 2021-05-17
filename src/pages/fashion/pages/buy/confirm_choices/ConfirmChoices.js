import React from 'react';
import PropTypes from 'prop-types';

import './ConfirmChoices.scss';
//
ConfirmChoices.propTypes = {
    closeConfirmChoices: PropTypes.func,
    handleConfirmChoices: PropTypes.func,
};

//
function ConfirmChoices(props) {
    const {closeConfirmChoices, handleConfirmChoices} = props;
    
    return (
        <div>
            <div className="ConfirmChoices_contain">
                <div className="display-flex flex-end">
                    <div className="ConfirmChoices_row display-flex">
                        <div
                            className="ConfirmChoices_item ConfirmChoices_close brs-5px"
                            onClick={closeConfirmChoices}
                        >
                            Close
                        </div>
                        <div
                            className="ConfirmChoices_item ConfirmChoices_yes brs-5px"
                            onClick={handleConfirmChoices}
                        >
                            Confirm
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ConfirmChoices;
import React, { useState } from 'react';
import PropTypes from 'prop-types';
//
import CloseDiv from '../../some_div/close_div/CloseDiv';
import ActionBack from '../common_actions/back/ActionBack';
//
import './ActionsCommon.scss';
import './Actions.scss';
//

//
Actions.propTypes = {
    title_action: PropTypes.string,
    symbol_post: PropTypes.bool,
    children: PropTypes.element,
};

Actions.defaultProps = {
    symbol_post: true,
    title_action: '...',
};

//
function Actions({ title_action, symbol_post, children }) {
    //
    const [is_open, setIsOpen] = useState(false);

    /* ---------------------------------- */

    //
    const toggleActions = () => {
        setIsOpen(!is_open);
    };

    //
    const closeActions = () => {
        is_open && toggleActions();
    };

    //
    return (
        <CloseDiv makeDivHidden={closeActions}>
            <div
                onClick={toggleActions}
                className="Actions_contain position-rel"
            >
                <div
                    className={`Actions_symbol display-flex-center brs-50 hv-opacity ${
                        symbol_post ? 'Actions_symbol-post' : ''
                    }`}
                    title="More actions"
                >
                    {title_action}
                </div>

                {is_open && (
                    <div className="Actions_choices box-shadow-1 brs-5px text-primary">
                        <div className="Actions_choices_actions">
                            <div className="ActionsChoices_back display-none">
                                <ActionBack />
                            </div>

                            {children}
                        </div>
                    </div>
                )}
            </div>
        </CloseDiv>
    );
}

export default Actions;

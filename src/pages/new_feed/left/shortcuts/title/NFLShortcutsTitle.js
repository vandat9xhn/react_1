import React from 'react';
import PropTypes from 'prop-types';

//
NFLShortcutsTitle.propTypes = {};

//
function NFLShortcutsTitle({ openEditShortcuts }) {
    //
    return (
        <div className="NFLShortcutsTitle padding-x-8px">
            <div className="flex-between-center">
                <h2 className="font-600 font-17px text-secondary">
                    Your shortcuts
                </h2>

                <button
                    className="NFLShortcutsTitle_edit btn btn-active padding-8px brs-6px bg-transparent text-blue opacity-0 visibility-hidden cursor-pointer hv-bg-blur"
                    type="button"
                    onClick={openEditShortcuts}
                >
                    Edit
                </button>
            </div>
        </div>
    );
}

export default NFLShortcutsTitle;

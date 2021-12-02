import React from 'react';
import PropTypes from 'prop-types';
//
import { useBool } from '../../../../_hooks/useBool';

//
GPAboutDescription.propTypes = {};

//
function GPAboutDescription({ description, handleReady }) {
    //
    const { is_true, toggleBool } = useBool();

    // -----

    //
    function onToggleBool() {
        handleReady && handleReady();
        toggleBool();
    }

    //
    return (
        <div className="GPAboutDescription">
            <span>{description.slice(0, is_true ? undefined : 100)}</span>{' '}
            {description.length <= 100 ? null : (
                <span
                    className="font-500 cursor-pointer hv-underline"
                    onClick={onToggleBool}
                >
                    See {is_true ? 'less' : 'more'}
                </span>
            )}
        </div>
    );
}

export default GPAboutDescription;

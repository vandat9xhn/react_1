import React from 'react';
import PropTypes from 'prop-types';
//
import { useBool } from '../../../../../../../_hooks/useBool';

//
GPDAboutDescription.propTypes = {};

//
function GPDAboutDescription({ description, handleReady }) {
    //
    const { is_true, toggleBool } = useBool();

    // -----

    //
    function onToggleBool() {
        handleReady();
        toggleBool();
    }

    //
    return (
        <div className="GPDAboutDescription">
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

export default GPDAboutDescription;

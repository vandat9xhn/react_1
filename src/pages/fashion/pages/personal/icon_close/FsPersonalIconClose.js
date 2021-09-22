import React from 'react';
import PropTypes from 'prop-types';
//
import IconPlusSubtract from '../../../../../_icons_svg/_icon_plus_subtract/IconPlusSubtract';
// 
import './FsPersonalIconClose.scss';

//
FsPersonalIconClose.propTypes = {};

//
function FsPersonalIconClose({ is_true, toggleBool }) {
    return (
        <div className="FsPersonalIconClose">
            <div
                className={`FsPersonalIconClose_contain display-flex-center padding-10px brs-50 bg-blue ${
                    is_true ? 'rotate-45' : ''
                }`}
                onClick={toggleBool}
            >
                <IconPlusSubtract size_icon="1rem" stroke="var(--white)" />
            </div>
        </div>
    );
}

export default FsPersonalIconClose;

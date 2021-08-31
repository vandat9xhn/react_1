import React from 'react';
import PropTypes from 'prop-types';
//
import { IS_MOBILE } from '../../_constant/Constant';
//
import './ModelAppearMb.scss';

//
ModelAppearMb.propTypes = {};

//
function ModelAppearMb({
    ref_pos_elm,
    ref_main_elm,

    class_main,
    children,

    handleClose,
}) {
    //
    return (
        <React.Fragment>
            {IS_MOBILE ? (
                <div className="pos-fixed-100per" onClick={handleClose}></div>
            ) : null}

            <div
                ref={ref_pos_elm}
                className={`${IS_MOBILE ? 'pos-abs top-100per w-100per' : ''}`}
            >
                <div
                    ref={ref_main_elm}
                    className={`${class_main} ${
                        IS_MOBILE ? 'ModelAppearMb' : ''
                    } pos-rel padding-8px bg-primary box-shadow-fb overflow-y-auto`}
                >
                    {children}
                </div>
            </div>
        </React.Fragment>
    );
}

export default ModelAppearMb;

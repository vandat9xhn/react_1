import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

//
FbSearchInputItemLayout.propTypes = {};

//
function FbSearchInputItemLayout({ link_to, left_elm, center_elm, right_elm }) {
    //
    return (
        <div className="FbSearchInputItemLayout pos-rel padding-8px">
            <Link
                className="pos-abs-100 brs-6px cursor-pointer hv-bg-hv"
                to={link_to}
            ></Link>

            <div className="display-flex align-items-center">
                <div className="pos-rel z-index-1 pointer-events-none">
                    {left_elm}
                </div>

                <div className="flex-grow-1 flex-between-center margin-left-12px">
                    <div>{center_elm}</div>

                    <div>{right_elm}</div>
                </div>
            </div>
        </div>
    );
}

export default FbSearchInputItemLayout;

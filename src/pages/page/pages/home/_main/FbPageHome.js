import React from 'react';
import PropTypes from 'prop-types';
//
import FbPageHomeRight from '../right/_main/FbPageHomeRight';
import FPHomeLeft from '../left/_main/FPHomeLeft';

//
FbPageHome.propTypes = {};

//
function FbPageHome({ page_id }) {
    //
    return (
        <div className="FbPageHome">
            <div className="display-flex justify-content-center">
                <div className="w-360px margin-right-15px">
                    <FPHomeLeft page_id={page_id} />
                </div>

                <div>
                    <FbPageHomeRight page_id={page_id} />
                </div>
            </div>
        </div>
    );
}

export default FbPageHome;

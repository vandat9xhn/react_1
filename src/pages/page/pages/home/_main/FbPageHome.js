import React from 'react';
import PropTypes from 'prop-types';
//
import { IS_MOBILE } from '../../../../../_constant/Constant';
//
import FbPageHomeRight from '../right/_main/FbPageHomeRight';
import FPHomeLeft from '../left/_main/FPHomeLeft';
//
import './FbPageHome.scss';
import './FbPageHomeRes.scss';

//
FbPageHome.propTypes = {};

//
function FbPageHome({ page_id }) {
    //
    return (
        <div className="FbPageHome">
            <div className="FbPageHome_row display-flex justify-content-center">
                {IS_MOBILE ? null : (
                    <div className="FbPageHome_left w-360px margin-right-15px">
                        <FPHomeLeft page_id={page_id} />
                    </div>
                )}

                <div className="FbPageHome_right w-500px max-w-100per">
                    <FbPageHomeRight page_id={page_id} />
                </div>
            </div>
        </div>
    );
}

export default FbPageHome;

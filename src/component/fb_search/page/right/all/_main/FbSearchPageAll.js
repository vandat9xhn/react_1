import React from 'react';
import PropTypes from 'prop-types';
//
import FbSearchPageLayout from '../../../_components/_layout/FbSearchPageLayout';
import FbSearchPageRelated from '../related/_main/FbSearchPageRelated';
//
import './FbSearchPageAll.scss';

//
FbSearchPageAll.propTypes = {};

//
function FbSearchPageAll(props) {
    //
    return (
        <div className="FbSearchPageAll">
            <FbSearchPageLayout
                right_elm={
                    <div className="FbSearchPageAll_contain display-flex-center">
                        <div className="w-680px">
                            <FbSearchPageRelated />
                        </div>
                    </div>
                }
            />
        </div>
    );
}

export default FbSearchPageAll;

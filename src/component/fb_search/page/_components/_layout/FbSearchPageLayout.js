import React from 'react';
import PropTypes from 'prop-types';
//
import FbSearchPageLeft from '../../left/_main/FbSearchPageLeft';
//
import './FbSearchPageLayout.scss';

//
FbSearchPageLayout.propTypes = {};

//
function FbSearchPageLayout({ right_elm, no_result }) {
    //
    return (
        <div className="FbSearchPageLayout">
            <div className="FbSearchPageLayout_row display-flex">
                <div className="FbSearchPageLayout_left pos-sticky flex-shrink-0 w-360px bg-primary">
                    <FbSearchPageLeft />
                </div>

                <div className="flex-grow-1 overflow-hidden">
                    <div className={`${no_result ? 'display-none' : ''}`}>
                        {right_elm}
                    </div>

                    {no_result ? (
                        <div className="FbSearchPageLayout_no_results display-flex-center">
                            <div className="w-500px text-align-center text-555">
                                <div className="font-20px font-700">
                                    We didn't find any results
                                </div>

                                <div className="font-17px">
                                    Make sure that everything is spelt correctly
                                    or try different keywords.
                                </div>
                            </div>
                        </div>
                    ) : null}
                </div>
            </div>
        </div>
    );
}

export default FbSearchPageLayout;

import React from 'react';
import PropTypes from 'prop-types';
//
import BtnActions from '../../../../../../../../component/button/actions/BtnActions';

//
PrPtAnAbInfoHeadView.propTypes = {};

//
function PrPtAnAbInfoHeadView({ mode_view, changeModeView }) {
    //
    function changeGridView() {
        changeModeView('grid');
    }

    //
    function changeFeedView() {
        changeModeView('feed');
    }

    //
    return (
        <div className="PrPtAnAbInfoHeadView">
            <div className="display-flex align-items-center">
                <div>
                    <BtnActions
                        className={`${
                            mode_view == 'grid'
                                ? 'bg-fb-active text-blue'
                                : 'bg-ccc'
                        }`}
                        title="Grid View"
                        handleClick={changeGridView}
                    />
                </div>

                <div className="margin-left-8px">
                    <BtnActions
                        className={`${
                            mode_view == 'feed'
                                ? 'bg-fb-active text-blue'
                                : 'bg-ccc'
                        }`}
                        title="Feed View"
                        handleClick={changeFeedView}
                    />
                </div>
            </div>
        </div>
    );
}

export default PrPtAnAbInfoHeadView;

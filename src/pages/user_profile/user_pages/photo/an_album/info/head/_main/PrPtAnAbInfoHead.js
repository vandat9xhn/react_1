import React from 'react';
import PropTypes from 'prop-types';
//
import { IS_MOBILE } from '../../../../../../../../_constant/Constant';
//
import BtnActionsOther from '../../../../../../../../component/button/actions_other/BtnActionsOther';
//
import PrPtAnAbInfoHeadView from '../view/PrPtAnAbInfoHeadView';
//
import './PrPtAnAbInfoHead.scss';

//
PrPtAnAbInfoHead.propTypes = {};

//
function PrPtAnAbInfoHead({
    album_name,
    mode_view,

    changeModeView,
    handle_API_Other_L,
    handleActionOther,
}) {
    //
    return (
        <div className="PrPtAnAbInfoHead">
            <div className="flex-between-center">
                <h2 className="PrPtAnAbInfoHead_title font-24px font-700">
                    {album_name}
                </h2>

                <div className="display-flex align-items-center">
                    {IS_MOBILE ? null : (
                        <div className="margin-right-8px">
                            <PrPtAnAbInfoHeadView
                                mode_view={mode_view}
                                changeModeView={changeModeView}
                            />
                        </div>
                    )}

                    <div>
                        <BtnActionsOther
                            handle_API_L={handle_API_Other_L}
                            handleAction={handleActionOther}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PrPtAnAbInfoHead;

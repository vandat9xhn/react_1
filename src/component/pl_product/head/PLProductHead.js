import React from 'react';
import PropTypes from 'prop-types';
//
import VidPicObserve from '../../vid_pic/observe/VidPicObserve';
//
import image_loading from '../../../../image/image_loading.svg';
//
import './PLProductHead.scss';

//
const CLASS_IMG = 'pos-abs left-0 bottom-0 wh-100 brs-5px object-fit-cover';

//
PLProductHead.propTypes = {};

//
function PLProductHead({ img, installment, has_fetched }) {
    //
    return (
        <div className="PLProductHead pos-rel padding-top-100per">
            {has_fetched ? (
                <VidPicObserve
                    vid_pic={img}
                    type="img"
                    img_props={{
                        className: `PLProductHead_img ${CLASS_IMG}`,
                    }}
                />
            ) : (
                <img className={`${CLASS_IMG}`} src={image_loading} alt="" />
            )}

            {installment !== undefined && (
                <div className="PLProductHead_installment pos-abs left-0 top-0">
                    <div className="padding-x-4px brs-2px bg-f1 font-11px">
                        Trả góp {installment}%
                    </div>
                </div>
            )}
        </div>
    );
}

export default PLProductHead;

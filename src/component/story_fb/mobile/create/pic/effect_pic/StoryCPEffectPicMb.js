import React from 'react';
import PropTypes from 'prop-types';
//
import PicEffectList from '../../../../../input/pic_effect/_main/PicEffectList';

//
StoryCPEffectPicMb.propTypes = {};

//
function StoryCPEffectPicMb({
    pic,
    effect_arr,
    effect_ix,
    handleChangeEffectPic,
}) {
    //
    return (
        <div className="pos-abs bottom-0 w-100per">
            <div className="w-100per overflow-x-auto scroll-height-0">
                <PicEffectList
                    pic={pic}
                    effect_arr={effect_arr}
                    effect_ix={effect_ix}
                    handleChangeEffect={handleChangeEffectPic}
                />
            </div>
        </div>
    );
}

export default StoryCPEffectPicMb;

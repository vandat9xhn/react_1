import React from 'react';
import PropTypes from 'prop-types';
//
import PicEffectItem from '../item/PicEffectItem';

//
PicEffectList.propTypes = {};

//
function PicEffectList({ effect_arr, effect_ix, pic, handleChangeEffect }) {
    //
    return (
        <div className="PicEffectList padding-4px">
            <div className="display-flex">
                {effect_arr.map((item, ix) => (
                    <div key={`${ix}`}>
                        <PicEffectItem
                            ix={ix}
                            is_active={effect_ix == ix}
                            effect={item}
                            pic={pic}
                            handleChangeEffect={handleChangeEffect}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default PicEffectList;

import React from 'react';
import PropTypes from 'prop-types';
//
import './PicEffectItem.scss';

//
PicEffectItem.propTypes = {};

//
function PicEffectItem({ ix, is_active, pic, effect, handleChangeEffect }) {
    //
    function onChangeEffect() {
        handleChangeEffect(ix);
    }

    //
    return (
        <div className="PicEffectItem padding-4px" onClick={onChangeEffect}>
            <img
                className={`wh-100 brs-8px ${
                    is_active ? 'PicEffectItem-active' : ''
                }`}
                src={pic}
                alt=""
                style={{ filter: effect }}
            />
        </div>
    );
}

export default PicEffectItem;

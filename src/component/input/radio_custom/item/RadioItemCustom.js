import React from 'react';
import PropTypes from 'prop-types';
//
import FlexDiv from '../../../some_div/flex_div/FlexDiv';
//
import RadioCustom from '../RadioCustom';

//
RadioItemCustom.propTypes = {
    title: PropTypes.string,
    ix: PropTypes.number,
    active_ix: PropTypes.number,
    handleChoose: PropTypes.func,
};

//
function RadioItemCustom({ title, ix, active_ix, handleChoose }) {
    //
    function onChoose() {
        handleChoose(ix);
    }

    //
    return (
        <div
            className="RadioItemCustom cursor-pointer hv-bg-blur"
            onClick={onChoose}
        >
            <FlexDiv
                ComponentLeft={<RadioCustom is_active={ix == active_ix} />}
                ComponentRight={title}
            />
        </div>
    );
}

export default RadioItemCustom;

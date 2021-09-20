import React from 'react';
import PropTypes from 'prop-types';
//
import FsPVoucherItem from '../../item/_main/FsPVoucherItem';
import FsPVcIFsLeft from '../left/FsPVcIFsLeft';

//
FsPVcItemFs.propTypes = {};

//
function FsPVcItemFs({
    img,
    img_text,

    title_center_1,
    title_center_2,
    title_center_3,

    used_count,
    end_time,
    
    can_use,
    title_side
}) {
    //
    return (
        <div className="FsPVcItemFs h-100per">
            <FsPVoucherItem
                left_elm={<FsPVcIFsLeft img={img} img_text={img_text} />}
                title_center_1={title_center_1}
                title_center_2={title_center_2}
                title_center_3={title_center_3}
                used_count={used_count}
                end_time={end_time}
                can_use={can_use}
                title_side={title_side}
            />
        </div>
    );
}

export default FsPVcItemFs;

import React from 'react';
import PropTypes from 'prop-types';
// 
import UnitTime from '../../../../../_some_function/UnitTime';

//
PicNameImgOnline.propTypes = {};

//
function PicNameImgOnline({time_online}) {
    //
    return time_online == 0 ? (
        <div className="padding-2px brs-50 bg-primary">
            <div className="padding-3px brs-50 bg-green"></div>
        </div>
    ) : (
        <div className="padding-y-2px padding-x-3px brs-8px bg-primary">
            <div className="line-8px text-green font-8px font-500">
                {UnitTime(time_online, '1p')}
            </div>
        </div>
    );
}

export default PicNameImgOnline;

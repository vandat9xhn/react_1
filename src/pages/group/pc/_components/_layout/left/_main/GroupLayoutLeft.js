import React, { useRef } from 'react';
import PropTypes from 'prop-types';
//
import GroupLayoutLeftHead from '../head/_main/GroupLayoutLeftHead';
import GroupLayoutLeftNav from '../nav/GroupLayoutLeftNav';
import GroupLeftJoined from '../joined/_main/GroupLeftJoined';

//
GroupLayoutLeft.propTypes = {};

//
function GroupLayoutLeft(props) {
    //
    const ref_scroll = useRef(null);

    //
    return (
        <div className="GroupLayoutLeft display-flex flex-col h-100per">
            <div>
                <GroupLayoutLeftHead />
            </div>

            <div
                ref={ref_scroll}
                className="flex-grow-1 flex-basis-1rem overflow-y-auto scroll-thin"
            >
                <div>
                    <GroupLayoutLeftNav />
                </div>

                <div>
                    <GroupLeftJoined ref_scroll={ref_scroll} />
                </div>
            </div>
        </div>
    );
}

export default GroupLayoutLeft;

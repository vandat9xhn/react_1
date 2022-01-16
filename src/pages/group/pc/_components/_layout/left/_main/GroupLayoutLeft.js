import React from 'react';
import PropTypes from 'prop-types';
//
import GroupLayoutLeftHead from '../head/_main/GroupLayoutLeftHead';
import GroupLayoutLeftNav from '../nav/GroupLayoutLeftNav';
import GroupLeftJoined from '../joined/_main/GroupLeftJoined';
import GroupLeftManage from '../manage/_main/GroupLeftManage';
import SeparateLineScrollToggle from '../../../../../../../component/separate_line_scroll_toggle/SeparateLineScrollToggle';

//
GroupLayoutLeft.propTypes = {};

//
function GroupLayoutLeft({ ref_scroll }) {
    //
    return (
        <div className="GroupLayoutLeft display-flex flex-col h-100per">
            <div>
                <GroupLayoutLeftHead />
            </div>

            <div className="padding-x-8px">
                <SeparateLineScrollToggle ref_scroll_elm={ref_scroll} />
            </div>

            <div
                ref={ref_scroll}
                className="flex-grow-1 flex-basis-1rem overflow-y-auto scroll-thin"
            >
                <div>
                    <GroupLayoutLeftNav ref_scroll_elm={ref_scroll} />
                </div>

                <div>
                    <GroupLeftManage ref_scroll={ref_scroll} />
                </div>

                <div>
                    <GroupLeftJoined ref_scroll={ref_scroll} />
                </div>
            </div>
        </div>
    );
}

export default GroupLayoutLeft;

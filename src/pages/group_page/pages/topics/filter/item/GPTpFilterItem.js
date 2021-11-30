import React from 'react';
import PropTypes from 'prop-types';
//
import IconSent from '../../../../../../_icons_svg/icons_status_message/icon_sent/IconSent';

//
GPTpFilterItem.propTypes = {};

//
function GPTpFilterItem({ title, ix, is_active, chooseFilter }) {
    //
    function handleClick() {
        chooseFilter(ix);
    }

    //
    return (
        <div
            className={`GPTpFilterItem h-36px padding-x-8px brs-6px font-600 cursor-pointer hv-bg-blur ${
                is_active ? 'border-blue bg-blur' : ''
            }`}
            onClick={handleClick}
        >
            <div className="flex-between-center h-100per">
                <div>{title}</div>

                <div>
                    {is_active ? (
                        <IconSent stroke="var(--blue)" size_icon="17px" />
                    ) : null}
                </div>
            </div>
        </div>
    );
}

export default GPTpFilterItem;

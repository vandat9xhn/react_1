import React from 'react';
import PropTypes from 'prop-types';
//
import FsPVoucherMenuItem from '../item/FsPVoucherMenuItem';

//
FsPVoucherMenu.propTypes = {};

//
function FsPVoucherMenu({ menu_arr, menu_ix, handleChangeMenu }) {
    //
    return (
        <div className="FsPVoucherMenu">
            <ul className="FsPVoucherMenu_row flex-between-center list-none">
                {menu_arr.map((item, ix) => (
                    <li key={ix} className="FsPVoucherMenu_item flex-grow-1">
                        <FsPVoucherMenuItem
                            title={item}
                            ix={ix}
                            is_active={ix == menu_ix}
                            handleChangeMenu={handleChangeMenu}
                        />
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default FsPVoucherMenu;

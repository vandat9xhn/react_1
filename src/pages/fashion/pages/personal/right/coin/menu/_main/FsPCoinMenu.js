import React from 'react';
import PropTypes from 'prop-types';
//
import FsPCoinMenuItem from '../item/FsPCoinMenuItem';

//
FsPCoinMenu.propTypes = {};

//
function FsPCoinMenu({ menu_arr, menu_ix, handleChangeMenu }) {
    //
    return (
        <div className="FsPCoinMenu">
            <div className="FsPCoinMenu_row flex-between-center">
                {menu_arr.map((item, ix) => (
                    <div key={ix} className="FsPCoinMenu_item flex-grow-1">
                        <FsPCoinMenuItem
                            title={item}
                            ix={ix}
                            is_active={ix == menu_ix}
                            handleChangeMenu={handleChangeMenu}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default FsPCoinMenu;

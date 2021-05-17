import React from 'react';
import PropTypes from 'prop-types';

import './PaginationItem.scss';

//
PaginationItem.propTypes = {
    
};

//
function PaginationItem(props) {
    const {num_page, is_active, handleChangePage} = props;
    //
    function onChangePage(){
        if (!is_active) {
            handleChangePage(num_page)
        }
    }

    //
    return (
        <div className="PaginationItem">
            <div
                className={`PaginationItem_contain brs-5px ${is_active ? 'PaginationItem_contain-active' : ''}`}
                onClick={onChangePage}
            >
                {num_page}
            </div>
        </div>
    );
}

export default PaginationItem;
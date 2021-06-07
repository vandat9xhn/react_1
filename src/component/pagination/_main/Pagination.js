import React from 'react';
import PropTypes from 'prop-types';
//
import { FuncPagination } from '../func_page/FuncPagination';
import PaginationItem from '../page_item/PaginationItem';
//
import './Pagination.scss';

//
Pagination.propTypes = {
    count: PropTypes.number,
    num_side_center: PropTypes.number,
    current: PropTypes.number,
    is_fetching: PropTypes.bool,
    handleChangePage: PropTypes.func,
};

Pagination.defaultProps = {
    is_fetching: false,
};

/**
 * num_center = num_side_center * 2 + 1
 */
function Pagination({
    count,
    num_side_center,
    current,
    is_fetching,
    handleChangePage,
}) {
    //
    const [arr_center, more_left, more_right] = FuncPagination(
        count,
        num_side_center,
        current
    );

    //
    return (
        <div
            className={`Pagination ${
                is_fetching ? 'pointer-events-none opacity-5' : ''
            }`}
        >
            <div className="Pagination_row display-flex">
                <PaginationItem
                    num_page={1}
                    is_active={1 == current}
                    handleChangePage={handleChangePage}
                />

                <div>
                    <div className={more_left ? '' : 'display-none'}>...</div>
                </div>

                {arr_center.map((num_page) => (
                    <PaginationItem
                        key={`Pagination_${num_page}`}
                        num_page={num_page}
                        is_active={num_page == current}
                        handleChangePage={handleChangePage}
                    />
                ))}

                <div>
                    <div className={more_right ? '' : 'display-none'}>...</div>
                </div>

                {count > 1 && (
                    <PaginationItem
                        num_page={count}
                        is_active={count == current}
                        handleChangePage={handleChangePage}
                    />
                )}
            </div>
        </div>
    );
}

export default Pagination;

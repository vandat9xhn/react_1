import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Pagination from '../../../component/pagination/_main/Pagination';

TestPagination.propTypes = {
    
};

function TestPagination(props) {
    //
    const [current_page, setCurrentPage] = useState(1)
    //
    function handleChangePage(new_page){
        setCurrentPage(new_page)
    }


    //
    return (
        <div>
            <Pagination
                count={8}
                num_side_center={1}
                current={current_page}
                handleChangePage={handleChangePage}
            />
        </div>
    );
}

export default TestPagination;
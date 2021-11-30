import React from 'react';
import PropTypes from 'prop-types';
//
import GPTpFilterItem from '../item/GPTpFilterItem';

//
GPTpFilterContain.propTypes = {};

//
function GPTpFilterContain({ filter_arr, filter_ix, chooseFilter }) {
    return (
        <div className="GPTpFilterContain padding-8px brs-8px bg-primary box-shadow-fb">
            {filter_arr.map((item, ix) => (
                <div key={ix}>
                    <GPTpFilterItem
                        title={item.title}
                        ix={ix}
                        is_active={filter_ix == ix}
                        chooseFilter={chooseFilter}
                    />
                </div>
            ))}
        </div>
    );
}

export default GPTpFilterContain;

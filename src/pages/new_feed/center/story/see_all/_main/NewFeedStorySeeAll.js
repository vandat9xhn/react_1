import React from 'react';
import PropTypes from 'prop-types';
//
import { IS_MOBILE } from '../../../../../../_constant/Constant';
//
import NewFeedStorySeeAllMobile from '../mobile/NewFeedStorySeeAllMobile';
import NewFeedStorySeeAllPc from '../pc/NewFeedStorySeeAllPc';
// 
import './NewFeedStorySeeAll.scss'

//
NewFeedStorySeeAll.propTypes = {};

//
function NewFeedStorySeeAll({
    count,
    data_length,

    has_fetched,
    handleSeeMenuMobile,
    handleSeeAllPc,
}) {
    return IS_MOBILE ? (
        (count <= data_length || data_length > 6) && has_fetched ? (
            <div className="NewFeedStorySeeAll_mobile">
                <NewFeedStorySeeAllMobile
                    handleSeeMenuMobile={handleSeeMenuMobile}
                />
            </div>
        ) : null
    ) : (
        <div
            className={`NewFeedStorySeeAll_pc ${
                data_length < 4 ? 'display-none' : ''
            }`}
        >
            <NewFeedStorySeeAllPc handleSeeAllPc={handleSeeAllPc} />
        </div>
    );
}

export default NewFeedStorySeeAll;

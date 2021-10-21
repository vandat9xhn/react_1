import React from 'react';
import PropTypes from 'prop-types';
//
import { UnitNumber } from '../../../../../../../_some_function/UnitNumber';
//
import { type_likes } from '../../../../../../like/list_type_like/type_likes/TypeLikes';
//
import './CmtReactedTitle.scss';

//
CmtReactedTitle.propTypes = {};

//
function CmtReactedTitle({ reacted_ix_arr, reacted_count }) {
    //
    return (
        <div className="CmtReactedTitle bg-primary padding-x-3px padding-y-1px">
            <div className="display-flex-center">
                <div className="display-flex-center">
                    {reacted_ix_arr.map((item, ix) => (
                        <div key={ix} className="display-flex-center">
                            {type_likes[item].component}
                        </div>
                    ))}
                </div>

                <div className="margin-left-3px">
                    {UnitNumber(reacted_count)}
                </div>
            </div>
        </div>
    );
}

export default CmtReactedTitle;

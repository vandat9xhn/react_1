import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
//
import IconsInput from '../../../../../../../_icons_svg/Icons_input/IconsInput';

//
FbSearchPageRelatedItem.propTypes = {};

//
function FbSearchPageRelatedItem({ search_value }) {
    //
    return (
        <Link
            className="FbSearchPageRelatedItem text-333 font-500"
            to={`/fb-search?q=${search_value}`}
        >
            <div className="display-flex align-items-center padding-8px brs-6px hv-bg-hv">
                <div className="margin-right-12px">
                    <IconsInput y={200} size_icon="24px" />
                </div>

                <div>{search_value}</div>
            </div>
        </Link>
    );
}

export default FbSearchPageRelatedItem;

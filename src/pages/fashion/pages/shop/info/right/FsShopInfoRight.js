import React from 'react';
import PropTypes from 'prop-types';
//
import './FsShopInfoRight.scss';

//
FsShopInfoRight.propTypes = {
    name: PropTypes.string,
    description: PropTypes.string,
};

//
function FsShopInfoRight({ name, description }) {
    //
    return (
        <div className="FsShopInfoRight wh-100">
            <div className="FsShopInfoRight_contain padding-20px overflow-y-auto">
                <div className="FsShopInfoRight_name margin-bottom-10px text-cap color-fashion font-16px">
                    {name}
                </div>

                <div className="FsShopInfoRight_description">{description}</div>
            </div>
        </div>
    );
}

export default FsShopInfoRight;

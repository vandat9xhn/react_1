import React from 'react';
import PropTypes from 'prop-types';
//
import './FsCIImgName.scss';

//
FsCIImgName.propTypes = {
    img: PropTypes.string,
    name: PropTypes.string,
};

//
function FsCIImgName({ img, name }) {
    //
    return (
        <div className="FsCIImgName">
            <div className="display-flex">
                <div className="FsCIImgName_img">
                    <img
                        className="object-fit-cover"
                        src={img}
                        alt=""
                        width="80"
                        height="80"
                    />
                </div>

                <div className="FsCIImgName_name text-secondary overflow-hidden">
                    {name}
                </div>
            </div>
        </div>
    );
}

export default FsCIImgName;

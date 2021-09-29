import React, { useRef } from 'react';
import PropTypes from 'prop-types';
//
import white_person from '../../../../../../../../../../image/white_person.svg';
//
import './FsPProfilePic.scss';

//
FsPProfilePic.propTypes = {
    picture: PropTypes.string,
};

FsPProfilePic.defaultProps = {
    picture: white_person,
};

//
function FsPProfilePic({ picture, handleChangePic }) {
    //
    const ref_input = useRef(null);

    //
    function clickInput() {
        ref_input.current.click();
    }

    //
    return (
        <div className="FsPProfilePic display-flex justify-content-center text-third font-14px">
            <div className="FsPProfilePic_row display-flex flex-col align-items-center">
                <img
                    className="FsPProfilePic_img margin-x-20px brs-50 object-fit-cover"
                    src={picture}
                    alt=""
                    width="100"
                    height="100"
                />

                <div className="FsPProfilePic_input margin-bottom-20px">
                    <input
                        ref={ref_input}
                        className="display-none"
                        type="file"
                        accept="image/*"
                        multiple={false}
                        onChange={handleChangePic}
                    />

                    <button
                        className="FsPProfilePic_btn padding-x-15px padding-y-10px brs-3px border-blur hv-bg-blur text-third cursor-pointer"
                        type="button"
                        onClick={clickInput}
                    >
                        Chọn ảnh
                    </button>
                </div>

                <div className="FsPProfilePic_note">
                    Dụng lượng file tối đa 1 MB Định dạng: .JPEG, .PNG
                </div>
            </div>
        </div>
    );
}

export default FsPProfilePic;

import React from 'react';
import PropTypes from 'prop-types';
//
import IconsArrow from '../../../../../../../../_icons_svg/icons_arrow/IconsArrow';
//
import './CUPFPLeftTagUser.scss';

//
CUPFPLeftTagUser.propTypes = {};

//
function CUPFPLeftTagUser({ user_tag_arr, handleDelTag }) {
    //
    return (
        <div className="CUPFPLeftTagUser padding-top-15px padding-bottom-10px brs-6px border-blur">
            <div className="padding-x-15px font-12px text-third">
                Tagged in photo
            </div>

            <div className="display-flex flex-wrap">
                {user_tag_arr.map((item, ix) => (
                    <div
                        key={item.id}
                        className="CUPFPLeftTagUser_item display-flex-center margin-5px padding-y-6px padding-x-10px brs-6px bg-fb-active text-blue font-600"
                    >
                        <div className="margin-right-10px">
                            {item.first_name} {item.last_name}
                        </div>

                        <div
                            className="CUPFPLeftTagUser_icon display-flex-center brs-50 cursor-pointer hv-bg-hv"
                            onClick={() => {
                                handleDelTag(ix);
                            }}
                        >
                            <IconsArrow y={400} size_icon="15px" />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default CUPFPLeftTagUser;

import React from 'react';
import PropTypes from 'prop-types';
//
import IconsArrow from '../../../../../../../_icons_svg/icons_arrow/IconsArrow';
//
import PLHMNavLinksMb from '../nav_links/PLHMNavLinksMb';
import PLHMGroupsMb from '../groups/_main/PLHMGroupsMb';
import PLHMFootMb from '../foot/PLHMFootMb';
// 
import './PLHeadMenuMb.scss';

//
PLHeadMenuMb.propTypes = {};

//
function PLHeadMenuMb({ handleCloseMenu }) {
    //
    return (
        <div className="PLHeadMenuMb pos-rel h-100per padding-bottom-20px overflow-y-auto font-for-phone">
            <div className="pos-sticky top-0 left-0 font-12px">
                <div className="flex-end padding-10px bg-primary">
                    <button
                        className="display-flex align-items-center border-blur brs-4px padding-7px"
                        type="button"
                        onClick={handleCloseMenu}
                    >
                        <IconsArrow y={400} size_icon="14px" />

                        <span className="margin-left-3px">Đóng</span>
                    </button>
                </div>
            </div>

            <div className="margin-top-5px margin-bottom-15px font-12px">
                <PLHMNavLinksMb />
            </div>

            <div className="margin-bottom-5px">
                <PLHMGroupsMb />
            </div>

            <div className="padding-y-2px bg-fb"></div>

            <div className="margin-top-5px">
                <PLHMFootMb />
            </div>
        </div>
    );
}

export default PLHeadMenuMb;

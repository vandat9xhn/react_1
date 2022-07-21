import React from "react";
import PropTypes from "prop-types";

import { default_video_arr } from "../../../_default/_common/default_image";
import { default_content_arr } from "../../../_default/_common/default_content";

import ShortVideoFullPc from "../../../component/short_video_fb/full/pc/_main/ShortVideoFullPc";

import thumb from "../../../../image/Aa.png";
import picture from "../../../../image/banner_phone.jpg";

//
ShortVideoFullPg.propTypes = {};

//
function ShortVideoFullPg(props) {
    //
    const handleAction = (icon_name = "") => {
        console.log(icon_name);
    };

    //
    const closeScreenTitle = () => {
        console.log("Close");
    };

    //
    const handleNext = () => {
        console.log("Next");
    };

    //
    const handlePrev = () => {
        console.log("prev");
    };

    //
    return (
        <div>
            <ShortVideoFullPc
                video={default_video_arr[0]}
                thumb={thumb}
                interacts={[
                    {
                        icon_name: "like",
                        count_str: "20K",
                    },
                    {
                        icon_name: "comment",
                        count_str: "500",
                    },
                    {
                        icon_name: "share",
                        count_str: "1K",
                    },
                ]}
                name="Nguyen Nam"
                picture={picture}
                content={default_content_arr[0]}
                link_to={`/profile/1`}
                //
                show_screen_title={true}
                is_has_next={true}
                is_has_prev={true}
                //
                handleAction={handleAction}
                closeScreenTitle={closeScreenTitle}
                handleNext={handleNext}
                handlePrev={handlePrev}
            />
        </div>
    );
}

export default ShortVideoFullPg;

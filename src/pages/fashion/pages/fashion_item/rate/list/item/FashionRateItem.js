import React from 'react';
import PropTypes from 'prop-types';
//
import IconsStar from '../../../../../../../_icons_svg/icons_star/IconsStar';
// 
import { handle_API_FashionUserContentRate_R } from '../../../../../../../_handle_api/fashion/FashionItemRateHandleAPI';
//
import PictureName from '../../../../../../../component/picture_name/pic_name/PictureName';
import ContentMore from '../../../../../../../component/content_more/Content_more';

//
FashionRateItem.propTypes = {};

//
function FashionRateItem({ id, rate_user, rate_num, content_obj }) {
    //
    function on_API_FashionUserContentRate_R() {
        handle_API_FashionUserContentRate_R({ rate_model: id });
    }

    //
    return (
        <div>
            <div className="display-flex">
                <PictureName
                    user={rate_user}
                    content={
                        <div className="inline-flex align-items-center">
                            <span>{rate_num}</span>

                            <span>
                                <IconsStar size_icon="1.25rem" />
                            </span>
                        </div>
                    }
                />
            </div>

            <div>
                <ContentMore
                    content_obj={content_obj}
                    seeMoreContent={on_API_FashionUserContentRate_R}
                />
            </div>
        </div>
    );
}

export default FashionRateItem;

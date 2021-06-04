import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
//
import { context_api } from '../../../../_context/ContextAPI';
//
import FlexDiv from '../../../../component/some_div/flex_div/FlexDiv';
import PictureName from '../../../../component/picture_name/pic_name/PictureName';
//
import { common_left_head_link_arr } from '../../__common/NewFeedCommon';
//
import './NewFeedLeftHead.scss';

//
NewFeedLeftHead.propTypes = {};

//
function NewFeedLeftHead(props) {
    //
    const { user } = useContext(context_api);

    //
    return (
        <div className="NewFeedLeftHead scroll-thin">
            <div>
                <div className="NewFeed_side_item">
                    <PictureName user={user} align_center={false} />
                </div>

                {common_left_head_link_arr.map((item, ix) => (
                    <div
                        className="NewFeed_side_item"
                        key={`NewFeedLeftHead_item_${ix}`}
                    >
                        <Link
                            to={item.link_to}
                            className="normal-text hv-cl-blue w-100per"
                        >
                            <FlexDiv
                                ComponentLeft={item.Icon}
                                ComponentRight={
                                    <div>
                                        <div className="text-secondary label-field">
                                            {item.title}
                                        </div>

                                        <div
                                            className={`font-12px text-blue ${
                                                item.count_new
                                                    ? ''
                                                    : 'display-none'
                                            }`}
                                        >
                                            * {item.count_new} {item.title_new}
                                        </div>
                                    </div>
                                }
                                align_center={false}
                            />
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default NewFeedLeftHead;

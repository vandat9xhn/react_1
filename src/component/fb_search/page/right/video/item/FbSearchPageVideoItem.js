import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
//
import { UnitNumber } from '../../../../../../_some_function/UnitNumber';
//
import ActionsMultiList from '../../../../../actions_multi_list/_main/ActionsMultiList';
//
import './FbSearchPageVideoItem.scss';

//
FbSearchPageVideoItem.propTypes = {};

//
function FbSearchPageVideoItem({ video_obj }) {
    //
    const {
        id,
        title,
        img,
        description,

        total_time_str,
        count_view,

        page_name,
        page_link,

        created_time,
    } = video_obj;

    //
    return (
        <div className="FbSearchPageVideoItem fb-search-page-right-item-contain pos-rel padding-16px brs-8px bg-primary box-shadow-1">
            <Link
                className="FbSearchPageVideoItem_link display-block pos-abs-100 z-index-1 brs-8px-pc cursor-pointer hv-bg-hv"
                to={`/watch?id=${id}`}
            ></Link>

            <div className="display-flex">
                <div className=" margin-right-12px">
                    <div className="pos-rel">
                        <img
                            className="FbSearchPageVideoItem_thumbnail border-blur brs-8px object-fit-cover"
                            src={img}
                            alt=""
                            width="200"
                            height="112"
                        />

                        <div className="FbSearchPageVideoItem_time pos-abs right-0 bottom-0 padding-8px">
                            <div className="padding-x-8px padding-y-4px brs-4px bg-shadow-5 line-16px text-white font-13px font-600">
                                {total_time_str}
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex-grow-1 space-between">
                    <div>
                        <div className="wk-box-vertical line-clamp-2 overflow-hidden line-20px font-600">
                            {title}
                        </div>

                        <div className="wk-box-vertical line-clamp-2 overflow-hidden font-13px">
                            {description}
                        </div>

                        <div className="display-flex font-13px text-secondary">
                            <Link
                                className="color-inherit hv-underline"
                                to={`${page_link}`}
                            >
                                <div className="pos-rel z-index-1">
                                    {page_name}
                                </div>
                            </Link>
                        </div>

                        <div className="font-13px text-secondary">
                            <span>{created_time}</span>
                            {' · '}
                            <span>
                                {UnitNumber(count_view)} view
                                {count_view >= 2 ? 's' : ''}
                            </span>
                        </div>
                    </div>

                    <div>{/* <ActionsMultiList /> */}</div>
                </div>
            </div>
        </div>
    );
}

export default FbSearchPageVideoItem;

import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
//
import ProfileLayoutHomePreview from '../home_preview/ProfileLayoutHomePreview';
// 
import './PrLayoutHomePreviewPics.scss';

//
PrLayoutHomePreviewPics.propTypes = {};

//
function PrLayoutHomePreviewPics({
    title,
    link_to,
    is_fetching,
    ProfilePrSkeleton,

    pic_arr,
    item_props,
    ItemComponent,
}) {
    //
    return (
        <div>
            <ProfileLayoutHomePreview
                title={title}
                link_to={link_to}
                is_fetching={is_fetching}
                ProfilePrSkeleton={<ProfilePrSkeleton />}
            >
                <div className="PrLayoutHomePreviewPics brs-8px overflow-hidden">
                    <div className="PrLayoutHomePreviewPics_row display-flex flex-wrap space-between">
                        {pic_arr.map((item, ix) => (
                            <div
                                className="PrLayoutHomePreviewPics_item"
                                key={ix}
                            >
                                {(
                                    <ItemComponent
                                        ix={ix}
                                        item={item}
                                        {...item_props}
                                    />
                                ) || (
                                    <Link className="pos-rel display-block padding-top-100per">
                                        <img
                                            className="pos-abs-100"
                                            src={item.img}
                                            alt=""
                                        />
                                    </Link>
                                )}
                            </div>
                        ))}
                    </div>

                    {pic_arr.length ? null : <div>No video, image</div>}
                </div>
            </ProfileLayoutHomePreview>
        </div>
    );
}

export default PrLayoutHomePreviewPics;

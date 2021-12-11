import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
//
import { handle_API_FbSearchPhoto_L } from '../../../../../../../../_handle_api/fb_search/photos';
//
import { useDataShowMore } from '../../../../../../../../_hooks/useDataShowMore';
//
import FbSearchPagePhotoItem from '../../item/FbSearchPagePhotoItem';
//
import './FbSearchPagePhotoList.scss';

//
FbSearchPagePhotoList.propTypes = {};

//
function FbSearchPagePhotoList({
    title,
    type,
    search_value,

    use_see_all = true,
    title_no_results,
}) {
    //
    const { data_state, data_count, refreshData_API } = useDataShowMore({
        handle_API_L: (c_count) =>
            handle_API_FbSearchPhoto_L({
                c_count: c_count,
                search: search_value,
                params: {
                    type: type,
                },
            }),
    });

    const { data_arr, has_fetched } = data_state;

    //
    useEffect(() => {
        refreshData_API();
    }, [location.search]);

    //
    return (
        <div
            className={`FbSearchPagePhotoList fb-search-page-right-item-contain padding-16px brs-8px bg-primary box-shadow-1 ${
                has_fetched ? '' : 'display-none'
            }`}
        >
            <div className={`${data_count.current > 0 ? '' : 'display-none'}`}>
                <h2 className="FbSearchPagePhotoList_title font-20px font-700">
                    {title}
                </h2>

                <div className="margin-y-10px">
                    <div className="display-flex flex-wrap">
                        {data_arr.slice(0, 9).map((item, ix) => (
                            <div
                                key={ix}
                                className="FbSearchPagePhotoList_item"
                            >
                                <div className="padding-top-100per">
                                    <FbSearchPagePhotoItem item={item} />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {use_see_all ? (
                    <div>
                        <Link
                            className="color-inherit"
                            to={`/fb-search/photos/all${location.search}&type=${type}`}
                        >
                            <div className="padding-y-8px brs-6px bg-fb line-20px text-align-center font-500 hv-bg-s-through">
                                See all
                            </div>
                        </Link>
                    </div>
                ) : null}
            </div>

            {data_count.current == 0 && title_no_results ? (
                <div className="text-align-center">{title_no_results}</div>
            ) : null}
        </div>
    );
}

export default FbSearchPagePhotoList;

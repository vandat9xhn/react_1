import React from 'react';
import PropTypes from 'prop-types';
//
import { ParseLocationSearch } from '../../../../../../../_some_function/ParseLocationSearch';
//
import { handle_API_FbSearchPhoto_L } from '../../../../../../../_handle_api/fb_search/photos';
//
import { useObserverMoreSearch } from '../../../../../../../_hooks/search/useObserverMoreSearch';
//
import FbSearchPagePhotoItem from '../../_components/item/FbSearchPagePhotoItem';
import FbSearchPageLayout from '../../../../_components/_layout/FbSearchPageLayout';
//
import './FbSearchPagePhotoAll.scss';

//
FbSearchPagePhotoAll.propTypes = {};

//
function FbSearchPagePhotoAll({}) {
    //
    const { ref_fake_elm, data_state, data_count } = useObserverMoreSearch({
        handle_API_L: (c_count) =>
            handle_API_FbSearchPhoto_L({
                c_count: c_count,
                params: ParseLocationSearch(),
            }),
    });

    const { data_arr, has_fetched } = data_state;

    //
    return (
        <div className="FbSearchPagePhotoAll">
            <FbSearchPageLayout
                right_elm={
                    <div className="FbSearchPagePhotoAll_contain">
                        <div className="FbSearchPagePhotoAll_list display-flex flex-wrap">
                            {data_arr.map((item, ix) => (
                                <div
                                    key={ix}
                                    className="FbSearchPagePhotoAll_item"
                                >
                                    <FbSearchPagePhotoItem item={item} />
                                </div>
                            ))}
                        </div>

                        <div ref={ref_fake_elm} className="padding-1px"></div>
                    </div>
                }
                no_result={has_fetched && data_count.current == 0}
            />
        </div>
    );
}

export default FbSearchPagePhotoAll;

import React from 'react';
import PropTypes from 'prop-types';
//
import { ParseLocationSearch } from '../../../../../../../_some_function/ParseLocationSearch';
//
import FbSearchPagePhotoList from '../../_components/list/_main/FbSearchPagePhotoList';
import FbSearchPageLayout from '../../../../_components/_layout/FbSearchPageLayout';
//
import './FbSearchPagePhotoHome.scss';

//
FbSearchPagePhotoHome.propTypes = {};

//
function FbSearchPagePhotoHome(props) {
    //
    const search_value = ParseLocationSearch()['q'];

    //
    return (
        <div className="FbSearchPagePhotoHome">
            <FbSearchPageLayout
                right_elm={
                    <div className="fb-search-page-right-contain display-flex-center">
                        <div className="w-680px">
                            <div className="margin-bottom-20px">
                                <FbSearchPagePhotoList
                                    title="Photos from friends and groups"
                                    title_no_results="No photos from friends and groups"
                                    search_value={search_value}
                                    type="friends_groups"
                                />
                            </div>

                            <div>
                                <FbSearchPagePhotoList
                                    title="Public photos"
                                    title_no_results="No photos from public"
                                    search_value={search_value}
                                    type="public"
                                />
                            </div>
                        </div>
                    </div>
                }
                title="Photos"
            />
        </div>
    );
}

export default FbSearchPagePhotoHome;

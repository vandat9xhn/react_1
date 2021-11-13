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
    const search_key = ParseLocationSearch()['q'];

    //
    return (
        <div className="FbSearchPagePhotoHome">
            <FbSearchPageLayout
                right_elm={
                    <div className="FbSearchPagePhotoHome_contain display-flex-center">
                        <div className="w-680px">
                            <div className="margin-bottom-20px">
                                <FbSearchPagePhotoList
                                    title="Photos from friends and groups"
                                    title_no_results="No photos from friends and groups"
                                    search_key={search_key}
                                    type="friends_groups"
                                />
                            </div>

                            <div>
                                <FbSearchPagePhotoList
                                    title="Public photos"
                                    title_no_results="No photos from public"
                                    search_key={search_key}
                                    type="public"
                                />
                            </div>
                        </div>
                    </div>
                }
            />
        </div>
    );
}

export default FbSearchPagePhotoHome;

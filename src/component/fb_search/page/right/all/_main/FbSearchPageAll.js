import React, { useLayoutEffect } from 'react';
import PropTypes from 'prop-types';
//
import FbSearchPageLayout from '../../../_components/_layout/FbSearchPageLayout';
import FbSearchPageRelated from '../related/_main/FbSearchPageRelated';
import FsSearchPageAllPhotos from '../photos/FsSearchPageAllPhotos';
import FsSearchPageAllPeople from '../people/FsSearchPageAllPeople';
import FsSearchPageAllGroups from '../groups/FsSearchPageAllGroups';
import FsSearchPageAllPosts from '../posts/FsSearchPageAllPosts';
import FsSearchPageAllPages from '../pages/FsSearchPageAllPages';
//
import './FbSearchPageAll.scss';

//
FbSearchPageAll.propTypes = {};

//
function FbSearchPageAll(props) {
    //
    useLayoutEffect(() => {
        window.scrollTo(0, 0);
    }, [location.search]);

    //
    return (
        <div key={location.search} className="FbSearchPageAll">
            <FbSearchPageLayout
                right_elm={
                    <div className="display-flex-center fb-search-page-right-contain">
                        <div className="w-680px">
                            <div className="FbSearchPageAll_part fb-search-page-right-item">
                                <FsSearchPageAllPeople />
                            </div>

                            <div className="FbSearchPageAll_part fb-search-page-right-item">
                                <FsSearchPageAllGroups />
                            </div>

                            <div className="FbSearchPageAll_part fb-search-page-right-item">
                                <FsSearchPageAllPosts />
                            </div>

                            <div className="FbSearchPageAll_part fb-search-page-right-item">
                                <FbSearchPageRelated />
                            </div>

                            <div className="FbSearchPageAll_part fb-search-page-right-item">
                                <FsSearchPageAllPages />
                            </div>

                            <div className="FbSearchPageAll_part fb-search-page-right-item">
                                <FsSearchPageAllPhotos />
                            </div>
                        </div>
                    </div>
                }
                title="All"
            />
        </div>
    );
}

export default FbSearchPageAll;

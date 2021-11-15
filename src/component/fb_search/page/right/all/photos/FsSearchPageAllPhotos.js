import React from 'react';
import PropTypes from 'prop-types';
//
import { ParseLocationSearch } from '../../../../../../_some_function/ParseLocationSearch';
//
import FbSearchPagePhotoList from '../../photo/_components/list/_main/FbSearchPagePhotoList';

//
FsSearchPageAllPhotos.propTypes = {};

//
function FsSearchPageAllPhotos(props) {
    //
    return (
        <div>
            <FbSearchPagePhotoList
                title="Photos"
                title_no_results=""
                type=""
                search_value={ParseLocationSearch()['q']}
                use_see_all={false}
            />
        </div>
    );
}

export default FsSearchPageAllPhotos;

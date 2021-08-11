import React from 'react';
import PropTypes from 'prop-types';
//
import ListTypeLike from '../../../../../../like/list_type_like/_main/ListTypeLike';
//
import './StoryLike.scss';

//
StoryLike.propTypes = {};

//
function StoryLike({ open_type_like, chooseListTypeLike }) {
    //
    return (
        <div className="StoryLike">
            <ListTypeLike
                chooseListTypeLike={chooseListTypeLike}
                open_type_like={open_type_like}
            />
        </div>
    );
}

export default StoryLike;

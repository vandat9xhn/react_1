import React from 'react';
import PropTypes from 'prop-types';
//
import ListTypeLike from '../../../../../like/list_type_like/_main/ListTypeLike';

//
StoryLike.propTypes = {};

//
function StoryLike({ can_like, chooseListTypeLike }) {
    return (
        <div>
            <ListTypeLike
                chooseListTypeLike={chooseListTypeLike}
                open_type_like={can_like}
            />
        </div>
    );
}

export default StoryLike;

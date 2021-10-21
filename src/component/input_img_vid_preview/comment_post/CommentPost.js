import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
//
import { context_api } from '../../../_context/ContextAPI';
//
import CommentInput from '../comment_input/CommentInput';
//
import white_person from '../../../../image/white_person.svg';
import './CommentPost.scss';

//
CommentPost.propTypes = {
    handleSend: PropTypes.func,
    is_sub: PropTypes.bool,
};
CommentPost.defaultProps = {
    is_sub: false,
};

//
function CommentPost({ is_sub, placeholder, handleSend }) {
    //
    const { user } = useContext(context_api);

    //
    if (!user.id) {
        return null;
    }

    //
    return (
        <div
            className={`CommentPost pos-rel ${
                is_sub ? 'CommentPost-sub' : 'CommentPost-cmt'
            }`}
        >
            <Link
                className="CommentPost_pic pos-abs left-0"
                to={`/profile/${user.id}`}
            >
                <img
                    className="brs-50 object-fit-cover"
                    src={user.picture || white_person}
                    alt=""
                />
            </Link>

            <div>
                <CommentInput
                    placeholder={placeholder}
                    handleSend={handleSend}
                />
            </div>
        </div>
    );
}

export default CommentPost;

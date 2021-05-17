import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
//
import { context_api } from '../../../_context/ContextAPI';
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
}

//
function CommentPost(props) {
    const { is_sub, handleSend } = props;
    //
    const {user} = useContext(context_api)

    //
    return (
        user.id ? (
            <div className={`CommentPost ${is_sub ? 'CommentPost_sub' : ''}`}>
                <div className="CommentPost_user">
                    <Link to={`/profile/${user.id}`}>
                        <img
                            className="brs-50"
                            src={user.picture || white_person}
                            alt=""
                            width="30"
                            height="30"
                        />
                    </Link>
                </div>
                <CommentInput placeholder={is_sub ? 'Type...' : undefined} handleSend={handleSend} />
            </div>
        ) : (
            <div></div>
        )
    );
}

export default CommentPost;

import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
//
import { formatNum } from '../../../../../../_some_function/FormatNum';
//
import PostInputSearch from '../../../../../../component/posts/common/input_search/PostInputSearch';

//
GPMemHead.propTypes = {};

//
function GPMemHead({ member_count, value_search, changeSearch }) {
    //
    return (
        <div className="GPMemHead">
            <div className="margin-bottom-10px">
                <h2 className="font-17px font-600">
                    Members
                    <span className="text-secondary">
                        {' '}
                        · {formatNum(member_count)}
                    </span>
                </h2>

                <div>
                    <span className="text-secondary">
                        New people and Pages that join this group will appear
                        here.
                    </span>{' '}
                    <Link
                        className="font-500 color-inherit hv-underline"
                        to={'/group/help'}
                    >
                        Learn more
                    </Link>
                </div>
            </div>

            <div>
                <PostInputSearch
                    value={value_search}
                    changeSearch={changeSearch}
                    placeholder="Find a member"
                    hide_key_when_focus={false}
                />
            </div>
        </div>
    );
}

export default GPMemHead;

import React from 'react';
import PropTypes from 'prop-types';
//
import GPMemsPartTitle from '../../part_title/GPMemsPartTitle';
import GPMemUserPage from '../../user_page/_main/GPMemUserPage';
import GroupPageAboutSeeAll from '../../../../../_components/about_see_all/GroupPageAboutSeeAll';

//
GPMemPartList.propTypes = {};

//
function GPMemPartList({
    group_id,

    title,
    show_count_on_title = true,
    info,
    has_learn_more,
    link_learn_more,

    user_page_arr,
    user_page_count,
    link_all,
}) {
    //
    function handleAction(params) {
        console.log(params);
    }

    //
    return (
        <div className="GPMemPartList">
            <div>
                <GPMemsPartTitle
                    title={title}
                    count={user_page_count}
                    show_count={show_count_on_title}
                    info={info}
                    // 
                    has_learn_more={has_learn_more}
                    link_learn_more={link_learn_more}
                />
            </div>

            <div className="margin-top-10px">
                {user_page_arr.map((item, ix) => (
                    <div key={item.id}>
                        <GPMemUserPage
                            group_id={group_id}
                            has_action_other={true}
                            item={item}
                            handleAction={handleAction}
                        />
                    </div>
                ))}
            </div>

            {user_page_count > user_page_arr.length ? (
                <div className="margin-top-10px">
                    <GroupPageAboutSeeAll link_to={link_all} />
                </div>
            ) : null}
        </div>
    );
}

export default GPMemPartList;

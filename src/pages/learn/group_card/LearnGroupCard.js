import React from 'react';
import PropTypes from 'prop-types';
//
import GroupCard from '../../group/_components/group_card/_main/GroupCard';

//
import { getRandomVidPic } from '../../../_default/_common/default_image';
import { getRandomNumber } from '../../../_default/_common/default_id';

//
LearnGroupCard.propTypes = {};

//
function LearnGroupCard(props) {
    //
    return (
        <div className="LearnGroupCard display-flex-center">
            <div className="LearnGroupCard_contain w-360px">
                <GroupCard
                    id={1}
                    name={'Group Name'}
                    picture={getRandomVidPic()}
                    //
                    member_count={50000}
                    post_count={50}
                    post_unit={'day'}
                    //
                    friend_arr={[]}
                    friend_count={getRandomNumber(0, 4)}
                    has_more_friend={false}
                    //
                    BtnElm={
                        <div className="display-flex-center wh-100 bg-blue text-white">
                            Join Group
                        </div>
                    }
                    removeGroupCard={() => {}}
                />
            </div>
        </div>
    );
}

export default LearnGroupCard;

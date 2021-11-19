import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
//
import GroupRowCardsFit from '../../../../../_components/row_cards/fit/GroupRowCardsFit';
//
import './GroupDiscoverRow.scss';

//
GroupDiscoverRow.propTypes = {};

//
function GroupDiscoverRow({ title, info, link_all, params_api }) {
    //
    const [has_fetched, setHasFetched] = useState(false);

    // ----

    //
    function handleFetched() {
        setHasFetched(true);
    }

    //
    return (
        <div className="GroupDiscoverRow">
            <div className="margin-bottom-16px">
                <div className="flex-between-center">
                    <h2 className="font-20px font-700">{title}</h2>

                    <Link to={link_all}>See all</Link>
                </div>

                <div className="text-secondary font-17px">{info}</div>
            </div>

            <div className={`${has_fetched ? '' : 'display-none'}`}>
                <GroupRowCardsFit
                    params_api={params_api}
                    BtnElm={
                        <div className="display-flex-center wh-100 bg-ccc">
                            Join Group
                        </div>
                    }
                    handleFetched={handleFetched}
                />
            </div>

            {has_fetched ? null : (
                <div className="GroupDiscoverRow_not_fetched"></div>
            )}
        </div>
    );
}

export default GroupDiscoverRow;

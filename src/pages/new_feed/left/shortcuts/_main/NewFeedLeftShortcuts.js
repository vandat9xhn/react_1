import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
//
import { handle_API_GroupJoined_L } from '../../../../../_handle_api/fb_group/joined';
//
import { useDataShowMore } from '../../../../../_hooks/useDataShowMore';
import { useBool } from '../../../../../_hooks/useBool';
//
import NFLShortcutsTitle from '../title/NFLShortcutsTitle';
import NewFeedLeftShortcutsItem from '../item/NewFeedLeftShortcutsItem';
import NFLShortcutsToggleMore from '../toggle_more/NFLShortcutsToggleMore';
//
import './NewFeedLeftShortcuts.scss';

//
NewFeedLeftShortcuts.propTypes = {};

//
function NewFeedLeftShortcuts({ openEditShortcuts }) {
    //
    const ref_has_get_more = useRef(false);

    //
    const { is_true, toggleBool } = useBool();

    //
    const { data_state, is_max, getData_API } = useDataShowMore({
        handle_API_L: (c_count) =>
            handle_API_GroupJoined_L({ c_count: c_count }),
    });

    const { data_arr, is_fetching, has_fetched } = data_state;

    //
    useEffect(() => {
        getData_API();
    }, []);

    // ----

    //
    async function toggleSeeMore() {
        if (is_fetching) {
            return;
        }

        if (!ref_has_get_more.current) {
            await getData_API();

            ref_has_get_more.current = true;
        }

        toggleBool();
    }

    // -----

    //
    if (data_arr.length == 0 && is_max.current) {
        return null;
    }

    //
    return (
        <div
            className={`NewFeedLeftShortcuts padding-8px ${
                has_fetched ? '' : 'display-none'
            }`}
        >
            <div>
                <NFLShortcutsTitle openEditShortcuts={openEditShortcuts} />
            </div>

            <div>
                <ul className="list-none">
                    {data_arr
                        .slice(
                            0,
                            ref_has_get_more.current && !is_true
                                ? Math.floor(data_arr.length / 2)
                                : undefined
                        )
                        .map((item, ix) => (
                            <li key={item.id}>
                                <NewFeedLeftShortcutsItem
                                    id={item.id}
                                    name={item.name}
                                    picture={item.picture}
                                />
                            </li>
                        ))}
                </ul>
            </div>

            {has_fetched ? (
                <NFLShortcutsToggleMore
                    show_more={is_true}
                    is_fetching={is_fetching}
                    toggleSeeMore={toggleSeeMore}
                />
            ) : null}
        </div>
    );
}

export default NewFeedLeftShortcuts;

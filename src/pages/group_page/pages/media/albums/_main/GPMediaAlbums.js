import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
//
import { handle_API_FbGroupMediaAlbum_L } from '../../../../../../_handle_api/fb_group/page_media_albums';
//
import { useObserverShowMore } from '../../../../../../_hooks/useObserverShowMore';
//
import GPMediaPicsItem from '../../../../_components/media_pics/item/GPMediaPicsItem';
//
import './GPMediaAlbums.scss';

//
GPMediaAlbums.propTypes = {};

//
function GPMediaAlbums({ group_id }) {
    //
    const ref_fake_elm = useRef(null);

    //
    const { data_state, is_max, getData_API, observerShowMore } =
        useObserverShowMore({ handle_API_L: handle_API_L });

    const { data_arr, has_fetched } = data_state;

    //
    useEffect(() => {
        getData_API();

        observerShowMore({
            fake_elm_end: ref_fake_elm.current,
            rootMargin: '0px',
            way_scroll: 'to_bottom',
            margin: 0,
        });
    }, []);

    //
    function handle_API_L(c_count) {
        return handle_API_FbGroupMediaAlbum_L({
            c_count: c_count,
            group_id: group_id,
        });
    }

    //
    return (
        <div className="GPMediaAlbums">
            <ul className="display-flex flex-wrap list-none">
                {data_arr.map((item, ix) => (
                    <li key={item.id} className="GPMediaAlbums_item">
                        <GPMediaPicsItem img={item.img} link_to={item.link_to}>
                            <div className="GPMediaAlbums_item_title line-20px">
                                <div className="font-600">{item.title}</div>

                                <div className="font-13px line-16px text-secondary">
                                    {item.video_count
                                        ? `${item.video_count} video${
                                              item.video_count >= 2 ? 's' : ''
                                          }`
                                        : null}

                                    {item.video_count && item.photo_count
                                        ? ' · '
                                        : null}

                                    {item.photo_count
                                        ? `${item.photo_count} photo${
                                              item.photo_count >= 2 ? 's' : ''
                                          }`
                                        : null}
                                </div>
                            </div>
                        </GPMediaPicsItem>
                    </li>
                ))}
            </ul>

            <div ref={ref_fake_elm} className="h-1px"></div>

            {is_max.current ? null : <div className="h-250px"></div>}
        </div>
    );
}

export default GPMediaAlbums;

import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
//
import { useObserverShowMore } from '../../../../../_hooks/useObserverShowMore';
//
import GPMediaPicsItem from '../item/GPMediaPicsItem';
//
import './GPMediaPics.scss';

//
GPMediaPics.propTypes = {};

//
function GPMediaPics({ handle_API_L }) {
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

    // ------

    //
    return (
        <div className="GPMediaPics">
            <ul className="display-flex flex-wrap list-none">
                {data_arr.map((item, ix) => (
                    <li key={item.id} className="GPMediaPics_item">
                        <GPMediaPicsItem
                            img={item.img}
                            link_to={item.link_to}
                        />
                    </li>
                ))}
            </ul>

            <div ref={ref_fake_elm} className="h-1px"></div>

            {is_max.current ? null : <div className="h-250px"></div>}
        </div>
    );
}

export default GPMediaPics;

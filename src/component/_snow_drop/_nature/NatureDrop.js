import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
//
import {
    makeAnimateNatureDrop,
    startNatureDrop,
} from '../_func/makeAnimateNatureDrop';
//
import './NatureDrop.scss';

//
NatureDrop.propTypes = {};

//
function NatureDrop({ nature_arr, num_arr, callbackNatureDrop }) {
    //
    const ref_nature_elm = useRef(null);
    const intervals = useRef([]);
    const mounted = useRef(true)

    //
    useEffect(() => {
        startNatureDrop(num_arr, intervals, makeNatureDrop);

        return () => {
            clearIntervalNature();
            mounted.current = false
        };
    }, []);

    //
    function clearIntervalNature() {
        for (const interval of intervals.current) {
            clearInterval(interval);
        }
    }

    //
    function makeNatureDrop(ix) {
        if (!mounted.current) {
            return
        }

        makeAnimateNatureDrop(
            ref_nature_elm.current.children[ix],
            nature_arr.length,
            callbackNatureDrop, 
        );
    }

    //
    return (
        <div ref={ref_nature_elm} className="NatureDrop">
            {num_arr.map((num_ix) => (
                <div key={`${num_ix}`}>
                    {nature_arr.map((item, ix) => (
                        <div
                            key={`${ix}`}
                            className={`NatureDrop_ball NatureDrop_ball${num_ix}`}
                        >
                            {item}
                        </div>
                    ))}
                </div>
            ))}
        </div>
    );
}

export default NatureDrop;

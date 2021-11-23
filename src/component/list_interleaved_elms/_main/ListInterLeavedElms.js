import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
//
import { useForceUpdate } from '../../../_hooks/UseForceUpdate';

//
ListInterLeavedElms.propTypes = {
    data_arr: PropTypes.array,
    ItemComponent: PropTypes.func,
    item_props: PropTypes.object,

    interleaved_elm_arr: PropTypes.arrayOf(
        PropTypes.shape({
            elm: PropTypes.element,
            interleaved_ix: PropTypes.number,
        })
    ),

    getItemKey: PropTypes.func,
};

ListInterLeavedElms.defaultProps = {
    item_props: {},
    interleaved_elm_arr: [],
    getItemKey: (item, ix) => item.id || ix,
};

//
function ListInterLeavedElms({
    data_arr,
    ItemComponent,
    item_props,

    interleaved_elm_arr,
    elm_class,

    getItemKey,
}) {
    //
    const ref_interleaved_ix_arr = useRef([] || [0]);

    //
    const forceUpdate = useForceUpdate();

    //
    useEffect(() => {
        addInterleavedElms();
    }, [data_arr.length]);

    // -----

    //
    function addInterleavedElms() {
        const count_interleaved = interleaved_elm_arr.length;

        if (count_interleaved <= ref_interleaved_ix_arr.current.length) {
            return;
        }

        const data_c_count = data_arr.length;
        const c_count_interleaved = ref_interleaved_ix_arr.current.length;
        const { interleaved_ix } = interleaved_elm_arr[c_count_interleaved];

        if (interleaved_ix > data_c_count) {
            return;
        }

        ref_interleaved_ix_arr.current.push(data_c_count);
        forceUpdate();
    }

    //
    return (
        <React.Fragment>
            {ref_interleaved_ix_arr.current.map((interleaved_ix, ix) => (
                <React.Fragment key={ix}>
                    {data_arr
                        .slice(
                            ix == 0
                                ? 0
                                : ref_interleaved_ix_arr.current[ix - 1],
                            interleaved_ix
                        )
                        .map((item, ix) => (
                            <ItemComponent
                                key={getItemKey(item, ix)}
                                item={item}
                                ix={ix}
                                {...item_props}
                            />
                        ))}

                    <div className={elm_class}>
                        {interleaved_elm_arr[ix].elm}
                    </div>
                </React.Fragment>
            ))}

            {data_arr
                .slice(
                    interleaved_elm_arr.length == 0
                        ? 0
                        : ref_interleaved_ix_arr.current.slice(-1)[0]
                )
                .map((item, ix) => (
                    <ItemComponent
                        key={getItemKey(item, ix)}
                        item={item}
                        ix={ix}
                        {...item_props}
                    />
                ))}
        </React.Fragment>
    );
}

export default ListInterLeavedElms;

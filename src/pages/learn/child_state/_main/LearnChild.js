import React, { useState } from 'react';
import PropTypes from 'prop-types';
//
import LearnChild0 from '../child_0/_main/LearnChild0';

//
LearnChild.propTypes = {};

//
function LearnChild(props) {
    //
    const [arr, setArr] = useState([0, 1, 2, 3, 4, 5, 6, 7]);

    //
    function closeItem(ix) {
        console.log(arr, ix);
        const new_arr = [...arr];
        new_arr.splice(ix, 1);

        setArr(new_arr);
    }

    //
    function addNewItem() {
        const new_ix = prompt();

        const new_arr = [...arr];
        new_arr.push(parseInt(new_ix));

        setArr(new_arr);
    }

    //
    return (
        <div>
            <div>PARENT</div>

            <div className="cursor-pointer" onClick={addNewItem}>
                Add
            </div>

            <div>
                {arr.map((item, ix) => (
                    <div key={`${ix}`}>
                        <LearnChild0
                            item={item}
                            ix={ix}
                            closeItem={closeItem}
                        />
                        <br />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default LearnChild;

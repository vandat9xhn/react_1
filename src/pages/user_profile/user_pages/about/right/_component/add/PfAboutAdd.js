import React, { useState } from 'react';
import PropTypes from 'prop-types';
//
import { useScreenFetching } from '../../../../../../../_custom_hooks/UseScreenFetching';
// 
import AddDiv from '../../../../../../../component/some_div/add_div/AddDiv';

//
PfAboutAdd.propTypes = {};

//
function PfAboutAdd(props) {
    //
    const {
        title_add,
        item_obj,

        ComponentEdit,
        handleCreate,
        handle_API_C,
    } = props;

    //
    const [is_adding, setIsAdding] = useState(false);

    //
    const handleScreenFetching = useScreenFetching();

    //
    function openAdding() {
        setIsAdding(true);
    }

    //
    function closeAdding() {
        setIsAdding(false);
    }

    //
    function handleCancel() {
        closeAdding();
    }

    //
    async function handleSave(data) {
        await handleScreenFetching(() => handle_API_C(data));

        handleCreate(data);
        closeAdding();
    }

    //
    return (
        <div className="PfAbout_add">
            <div>
                <div
                    className={`PfAboutAdd_add-contain ${
                        is_adding ? 'display-none' : ''
                    }`}
                    onClick={openAdding}
                >
                    <AddDiv>{title_add}</AddDiv>
                </div>
            </div>

            {is_adding && (
                <div>
                    <ComponentEdit
                        item_obj={item_obj}
                        handleCancel={handleCancel}
                        handleSave={handleSave}
                    />
                </div>
            )}
        </div>
    );
}

export default PfAboutAdd;

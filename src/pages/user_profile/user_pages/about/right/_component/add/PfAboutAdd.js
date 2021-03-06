import React, { useContext, useRef, useState } from 'react';
import PropTypes from 'prop-types';
//
import { context_api } from '../../../../../../../_context/ContextAPI';
//
import { useScreenFetching } from '../../../../../../../_hooks/UseScreenFetching';
import { useMounted } from '../../../../../../../_hooks/useMounted';
//
import { GetIdSlug } from '../../../../../../../_some_function/GetIdSlug';
//
import AddDiv from '../../../../../../../component/some_div/add_div/AddDiv';

//
PfAboutAdd.propTypes = {};

//
function PfAboutAdd({
    title_add,
    item_obj,

    ComponentEdit,
    handleCreate,
    handle_API_C,
}) {
    //
    const { user } = useContext(context_api);

    // 
    const is_user = user.id == GetIdSlug();

    //
    const [is_adding, setIsAdding] = useState(false);

    //
    ;

    //
    const handleScreenFetching = useScreenFetching();
    const mounted = useMounted();

    //
    function openAdding() {
        setIsAdding(true);
    }

    //
    function closeAdding() {
        mounted && setIsAdding(false);
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
        is_user && (
            <div className="PfAbout_add">
                <div>
                    <div
                        className={`PfAboutAdd_add_contain ${
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
        )
    );
}

export default PfAboutAdd;

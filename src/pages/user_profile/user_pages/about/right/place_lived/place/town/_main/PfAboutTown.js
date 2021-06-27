import React from 'react';
import PropTypes from 'prop-types';
//
import { useForceUpdate } from '../../../../../../../../../_hooks/UseForceUpdate';
//
import { handle_API_Town_C } from '../../../../../../../__handle_api/ProfileHandleAPI';

import PfAboutAdd from '../../../../_component/add/PfAboutAdd';

import PfAboutTownEdit from '../edit/PfAboutTownEdit';
import PfAboutTownItem from '../item/PfAboutTownItem';
import AboutNoItem from '../../../../_component/no_item/AboutNoItem';

//
PfAboutTown.propTypes = {
    town_arr: PropTypes.array,
};

//
function PfAboutTown({ town_arr, has_fetched }) {
    //
    const forceUpdate = useForceUpdate();

    //
    function handleCreate(data) {
        const { town, permission } = data;

        town_arr.push({
            id: 101 + town_arr.length,
            title: town,
            town: town,
            permission: permission,
        });
        forceUpdate();
    }

    //
    const no_item = !town_arr.length;

    //
    return (
        <div>
            <h3 className="PfAbout_title">Town</h3>

            <div>
                <AboutNoItem
                    has_fetched={has_fetched}
                    no_item={no_item}
                    title="No town to show"
                >
                    <div>
                        <div className="PfAbout_add">
                            <PfAboutAdd
                                title_add="Add a Town"
                                item_obj={{
                                    town: '',
                                    permission: 0,
                                }}
                                ComponentEdit={PfAboutTownEdit}
                                handleCreate={handleCreate}
                                handle_API_C={handle_API_Town_C}
                            />
                        </div>

                        <div>
                            {town_arr.map((town_obj) => (
                                <div key={`PfAboutTown_${town_obj.id}`}>
                                    <PfAboutTownItem town_obj={town_obj} />
                                </div>
                            ))}
                        </div>
                    </div>
                </AboutNoItem>
            </div>
        </div>
    );
}

export default PfAboutTown;

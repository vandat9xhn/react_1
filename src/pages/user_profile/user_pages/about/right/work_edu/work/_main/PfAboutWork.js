import React from 'react';
import PropTypes from 'prop-types';
//
import { useForceUpdate } from '../../../../../../../../_hooks/UseForceUpdate';
//
import { handle_API_Work_C } from '../../../../../../__handle_api/ProfileHandleAPI';

import PfAboutAdd from '../../../_component/add/PfAboutAdd';

import PfAboutWorkEdit from '../edit/PfAboutWorkEdit';
import PfAboutWorkItem from '../item/PfAboutWorkItem';
import AboutNoItem from '../../../_component/no_item/AboutNoItem';

//
PfAboutWork.propTypes = {
    work_arr: PropTypes.array,
};

//
function PfAboutWork({ work_arr, has_fetched }) {
    //
    const forceUpdate = useForceUpdate();

    //
    function handleCreate(data) {
        const { work, permission } = data;

        work_arr.push({
            id: 101 + work_arr.length,
            title: work,
            work: work,
            permission: permission,
        });
        forceUpdate();
    }

    //
    const no_item = !work_arr.length;

    //
    return (
        <div>
            <h3 className="PfAbout_title">Work</h3>

            <div>
                <AboutNoItem
                    has_fetched={has_fetched}
                    no_item={no_item}
                    title="No work to show"
                >
                    <div>
                        <div className="PfAbout_add">
                            <PfAboutAdd
                                title_add="Add a Work"
                                item_obj={{
                                    work: '',
                                    permission: 0,
                                }}
                                ComponentEdit={PfAboutWorkEdit}
                                handleCreate={handleCreate}
                                handle_API_C={handle_API_Work_C}
                            />
                        </div>

                        <div>
                            {work_arr.map((work_obj) => (
                                <div key={`PfAboutWork_${work_obj.id}`}>
                                    <PfAboutWorkItem work_obj={work_obj} />
                                </div>
                            ))}
                        </div>
                    </div>
                </AboutNoItem>
            </div>
        </div>
    );
}

export default PfAboutWork;

import React from 'react';
import PropTypes from 'prop-types';
//
import { useForceUpdate } from '../../../../../../../../_custom_hooks/UseForceUpdate';
//
import { handle_API_School_C } from '../../../../../../__handle_api/ProfileHandleAPI';

import PfAboutAdd from '../../../_component/add/PfAboutAdd';

import PfAboutSchoolEdit from '../edit/PfAboutSchoolEdit';
import PfAboutSchoolItem from '../item/PfAboutSchoolItem';
import AboutNoItem from '../../../_component/no_item/AboutNoItem';

//
PfAboutSchool.propTypes = {
    school_arr: PropTypes.array,
};

//
function PfAboutSchool({ school_arr, has_fetched }) {
    //
    const forceUpdate = useForceUpdate();

    //
    function handleCreate(data) {
        const { school, permission } = data;

        school_arr.push({
            id: 101 + school_arr.length,
            title: school,
            school: school,
            permission: permission,
        });
        forceUpdate();
    }

    // 
    const no_item = !school_arr.length

    //
    return (
        <div>
            <h3 className="PfAbout_title">High School</h3>

            <div>
                <AboutNoItem
                    has_fetched={has_fetched}
                    no_item={no_item}
                    title="No relationship"
                >
                    <div>
                        <div className="PfAbout_add">
                            <PfAboutAdd
                                title_add="Add a high school"
                                item_obj={{
                                    school: '',
                                    permission: 0,
                                }}
                                ComponentEdit={PfAboutSchoolEdit}
                                handleCreate={handleCreate}
                                handle_API_C={handle_API_School_C}
                            />
                        </div>

                        <div>
                            {school_arr.map((school_obj) => (
                                <div key={`PfAboutSchool_${school_obj.id}`}>
                                    <PfAboutSchoolItem
                                        school_obj={school_obj}
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                </AboutNoItem>
            </div>
        </div>
    );
}

export default PfAboutSchool;

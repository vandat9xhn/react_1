import React from 'react';
import PropTypes from 'prop-types';
//
import { useForceUpdate } from '../../../../../../../../_hooks/UseForceUpdate';
//
import { handle_API_University_C } from '../../../../../../../../_handle_api/profile/ProfileHandleAPI';

import PfAboutAdd from '../../../_component/add/PfAboutAdd';

import PfAboutUniversityEdit from '../edit/PfAboutUniversityEdit';
import PfAboutUniversityItem from '../item/PfAboutUniversityItem';
import AboutNoItem from '../../../_component/no_item/AboutNoItem';

//
PfAboutUniversity.propTypes = {
    university_arr: PropTypes.array,
};

//
function PfAboutUniversity({ university_arr, has_fetched }) {
    //
    const forceUpdate = useForceUpdate();

    //
    function handleCreate(data) {
        const { university, permission } = data;

        university_arr.push({
            id: 101 + university_arr.length,
            title: university,
            university: university,
            permission: permission,
        });
        forceUpdate();
    }

    // 
    const no_item = !university_arr.length

    //
    return (
        <div>
            <h3 className="PfAbout_title">University</h3>

            <div>
                <AboutNoItem
                    has_fetched={has_fetched}
                    no_item={no_item}
                    title="No university to show"
                >
                    <div>
                        <div className="PfAbout_add">
                            <PfAboutAdd
                                title_add="Add a University"
                                item_obj={{
                                    university: '',
                                    permission: 0,
                                }}
                                ComponentEdit={PfAboutUniversityEdit}
                                handleCreate={handleCreate}
                                handle_API_C={handle_API_University_C}
                            />
                        </div>

                        <div>
                            {university_arr.map((university_obj) => (
                                <div
                                    key={`PfAboutUniversity_${university_obj.id}`}
                                >
                                    <PfAboutUniversityItem
                                        university_obj={university_obj}
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

export default PfAboutUniversity;

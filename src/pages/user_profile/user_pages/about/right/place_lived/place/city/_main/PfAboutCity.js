import React from 'react';
import PropTypes from 'prop-types';
//
import { useForceUpdate } from '../../../../../../../../../_custom_hooks/UseForceUpdate';
//
import { handle_API_City_C } from '../../../../../../../__handle_api/ProfileHandleAPI';

import PfAboutAdd from '../../../../_component/add/PfAboutAdd';

import PfAboutCityEdit from '../edit/PfAboutCityEdit';
import PfAboutCityItem from '../item/PfAboutCityItem';
import AboutNoItem from '../../../../_component/no_item/AboutNoItem';

//
PfAboutCity.propTypes = {
    city_arr: PropTypes.array,
};

//
function PfAboutCity({ city_arr, has_fetched }) {
    //
    const forceUpdate = useForceUpdate();

    //
    function handleCreate(data) {
        const { city, permission } = data;

        city_arr.push({
            id: 101 + city_arr.length,
            title: city,
            city: city,
            permission: permission,
        });
        forceUpdate();
    }

    //
    const no_item = !city_arr.length;

    //
    return (
        <div>
            <h3 className="PfAbout_title">City</h3>

            <div>
                <AboutNoItem
                    has_fetched={has_fetched}
                    no_item={no_item}
                    title="No city to show"
                >
                    <div>
                        <div className="PfAbout_add">
                            <PfAboutAdd
                                title_add="Add a City"
                                item_obj={{
                                    city: '',
                                    permission: 0,
                                }}
                                ComponentEdit={PfAboutCityEdit}
                                handleCreate={handleCreate}
                                handle_API_C={handle_API_City_C}
                            />
                        </div>

                        <div>
                            {city_arr.map((city_obj) => (
                                <div key={`PfAboutCity_${city_obj.id}`}>
                                    <PfAboutCityItem city_obj={city_obj} />
                                </div>
                            ))}
                        </div>
                    </div>
                </AboutNoItem>
            </div>
        </div>
    );
}

export default PfAboutCity;

import React, { Suspense } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
//
import { GroupPageMediaRoutes } from '../_route/_main';
//
import './GroupPageMediaCommon.scss';
// 
import GPMediaHead from '../head/GPMediaHead';
import GPMediaNav from '../nav/GPMediaNav';
// 
import './GroupPageMedia.scss';

//
GroupPageMedia.propTypes = {};

//
function GroupPageMedia({ group_id }) {
    //
    return (
        <div className="GroupPageMedia padding-y-20px">
            <div className="GroupPageMedia_contain fb-profile-width-contain padding-16px brs-8px-pc bg-primary box-shadow-1">
                <div className="margin-bottom-10px">
                    <GPMediaHead group_id={group_id} />
                </div>

                <div className="margin-bottom-10px">
                    <GPMediaNav group_id={group_id} />
                </div>

                <div>
                    <Suspense fallback={null}>
                        <Switch>
                            {GroupPageMediaRoutes.map((item, ix) => (
                                <Route
                                    key={ix}
                                    // component={item.component}
                                    path={item.path}
                                    render={(props) => (
                                        <item.component
                                            {...props}
                                            group_id={group_id}
                                        />
                                    )}
                                />
                            ))}

                            <Redirect  to={`/group/${group_id}/media/photos`} />
                        </Switch>
                    </Suspense>
                </div>
            </div>
        </div>
    );
}

export default GroupPageMedia;

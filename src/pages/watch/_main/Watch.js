import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
//
import { watchRoutes } from '../_routes/_main';
//
import WatchLayout from '../_components/layout/_main/WatchLayout';

//
Watch.propTypes = {};

//
function Watch(props) {
    //
    return (
        <div className="Watch">
            <WatchLayout>
                <Switch>
                    {watchRoutes.map((item, ix) => (
                        <Route
                            key={ix}
                            path={item.path}
                            component={item.component}
                        />
                    ))}

                    <Redirect to={'/watch/home'} />
                </Switch>
            </WatchLayout>
        </div>
    );
}

export default Watch;

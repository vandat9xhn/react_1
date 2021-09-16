import React, { Suspense } from 'react';
import PropTypes from 'prop-types';
import { Route, Switch, Redirect } from 'react-router-dom';
//
import { FashionRoutes } from '../../routes/FashionRoutes';

//
FsPersonalRight.propTypes = {};

//
function FsPersonalRight(props) {
    //
    return (
        <div className="FsPersonalRight h-100per">
            <Suspense fallback={null}>
                <Switch>
                    {FashionRoutes.map((item, ix) => (
                        <Route
                            key={ix}
                            component={item.component}
                            path={item.pathname}
                            exact
                        />
                    ))}

                    <Redirect to="/fashion/user/account/profile" />
                </Switch>
            </Suspense>
        </div>
    );
}

export default FsPersonalRight;

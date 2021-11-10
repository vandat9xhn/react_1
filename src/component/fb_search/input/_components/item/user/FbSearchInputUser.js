import React from 'react';
import PropTypes from 'prop-types';

//
FbSearchInputUser.propTypes = {};

//
function FbSearchInputUser({ LayoutComponent, user }) {
    //
    return (
        <div className="FbSearchInputUser">
            <LayoutComponent
                link_to={`/profile/${user.id}`}
                left_elm={
                    <img
                        className="brs-50 object-fit-cover"
                        src={user.picture}
                        alt=""
                        width="36"
                        height="36"
                    />
                }
                center_elm={
                    <div className="font-400">
                        {user.first_name} {user.last_name}
                    </div>
                }
            />
        </div>
    );
}

export default FbSearchInputUser;

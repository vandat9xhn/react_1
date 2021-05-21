import React from 'react';
import PropTypes from 'prop-types';
//
import { Link } from 'react-router-dom';
//
import './ProfilePrCommon.scss';

//
ProfilePrCommon.propTypes = {
    children: PropTypes.oneOfType([PropTypes.element, PropTypes.string]),
    title: PropTypes.string,
    sk: PropTypes.string,
    is_fetching: PropTypes.bool,

    onClickSk: PropTypes.func,
    ProfileSkeleton: PropTypes.func,
};

ProfilePrCommon.defaultProps = {
    ProfileSkeleton: () => <div></div>
}

//
function ProfilePrCommon(props) {
    const { children, title, sk, is_fetching, ProfileSkeleton, onClickSk } =
        props;

    //
    function onClick() {
        onClickSk(sk);
    }

    //
    return (
        <div className="ProfilePrCommon bg-primary box-shadow-1 brs-5px">
            <div className={is_fetching ? 'display-none' : ''}>
                <h2 className="ProfilePrCommon_title">
                    <Link
                        to={location.pathname + '?sk=' + sk}
                        className="normal-text hv-cl-blue"
                        replace={true}
                        onClick={onClick}
                    >
                        {title}
                    </Link>
                </h2>

                <div>{children}</div>
            </div>

            <div className={is_fetching ? '' : 'display-none'}>
                <ProfileSkeleton />
            </div>
        </div>
    );
}

export default ProfilePrCommon;

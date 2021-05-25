import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
//
import ComponentSkeleton from '../../../../../../../component/skeleton/component_skeleton/ComponentSkeleton';
//
import './ProfilePrCommon.scss';

//
ProfilePrCommon.propTypes = {
    children: PropTypes.oneOfType([PropTypes.element, PropTypes.string]),
    title: PropTypes.string,
    sk: PropTypes.string,
    is_fetching: PropTypes.bool,

    ProfilePrSkeleton: PropTypes.func,
};

ProfilePrCommon.defaultProps = {
    ProfilePrSkeleton: () => <div></div>,
};

//
function ProfilePrCommon(props) {
    const { children, title, sk, is_fetching, ProfilePrSkeleton } = props;

    //
    return (
        <div className="ProfilePrCommon bg-primary box-shadow-1 brs-5px">
            <div className={is_fetching ? 'display-none' : ''}>
                <h2 className="ProfilePrCommon_title">
                    <Link
                        to={location.pathname + '?sk=' + sk}
                        className="normal-text hv-cl-blue"
                        replace
                    >
                        {title}
                    </Link>
                </h2>

                <div>{children}</div>
            </div>

            <ComponentSkeleton
                component={<ProfilePrSkeleton />}
                has_fetched={!is_fetching}
            />
        </div>
    );
}

export default ProfilePrCommon;

import React, { useContext } from 'react';
import PropTypes from 'prop-types';
//
import { context_api } from '../../../../../../../_context/ContextAPI';
//
import { GetIdSlug } from '../../../../../../../_some_function/GetIdSlug';
//
import IconsProfile from '../../../../../../../_icons_svg/icons_profile/IconsProfile';
//
import FlexDiv from '../../../../../../../component/some_div/flex_div/FlexDiv';
import NoItemHasFetched from '../../../../../../../component/some_div/no_item/NoItemHasFetched';

//
AboutNoItem.propTypes = {
    ...NoItemHasFetched.propTypes,
    children: PropTypes.element,
    ComponentLeft: PropTypes.element,
};

AboutNoItem.defaultProps = {
    ComponentLeft: <IconsProfile size_icon="1.5rem" />,
};

//
function AboutNoItem({ has_fetched, no_item, title, ComponentLeft, children }) {
    //
    const { user } = useContext(context_api);

    const is_user = user.id == GetIdSlug();

    //
    return (
        <div>
            <div className="text-secondary label-field">
                <NoItemHasFetched
                    has_fetched={has_fetched && !is_user}
                    no_item={no_item}
                    title={
                        <FlexDiv
                            ComponentLeft={ComponentLeft}
                            ComponentRight={title}
                        />
                    }
                />
            </div>

            <div
                className={`${
                    has_fetched && !is_user && no_item ? 'display-none' : ''
                }`}
            >
                {children}
            </div>
        </div>
    );
}

export default AboutNoItem;

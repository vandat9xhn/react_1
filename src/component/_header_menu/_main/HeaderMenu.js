import React, { useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import PropTypes from 'prop-types';
//
import { context_api } from '../../../_context/ContextAPI';
//
import { toggleAppHiddenTemp } from '../../../_some_function/AppHiddenTemp';
//
import { useBool } from '../../../_hooks/useBool';
//
import IconsMenu from '../../../_icons_svg/icons_menu/IconsMenu';
//
import { DATA_HEADER_MENU } from '../_data/HeaderLeftData';
//
import HeaderHorizontalLink from '../../_header_pc/_components/link/HeaderHorizontalLink';
//
import './HeaderMenu.scss';

const getMenuUser = ({ user }) =>
    user.id <= 0
        ? []
        : [
              {
                  title: `${user.first_name} ${user.last_name}`,
                  link_to: `/profile/${user.id}`,
                  Icon: (
                      <img
                          className="brs-50 object-fit-cover"
                          src={user.picture}
                          alt=""
                          width="24"
                          height="24"
                      />
                  ),
              },
          ];

//
HeaderMenu.propTypes = {};

//
function HeaderMenu(props) {
    //
    useParams();

    //
    const { user } = useContext(context_api);

    //
    const { is_true, setIsTrue, toggleBool } = useBool();

    //
    useEffect(() => {
        handleClose();
    }, [location.href]);

    //
    useEffect(() => {
        toggleAppHiddenTemp({ is_hidden: is_true });

        return () => {
            toggleAppHiddenTemp({ is_hidden: false });
        };
    }, [is_true]);

    // ----

    //
    function handleClose() {
        setIsTrue(false);
    }

    //
    return (
        <div className="HeaderMenu pos-rel z-index-1 h-100per padding-y-3px">
            <div
                className={`HeaderMenu_icon display-flex-center h-100per padding-x-16px brs-6px cursor-pointer hv-bg-s-through ${
                    is_true ? 'HeaderMenu_icon-active nav-active text-blue' : ''
                }`}
                onClick={toggleBool}
            >
                <IconsMenu size_icon="24px" />
            </div>

            <div className="HeaderMenu_border_bottom display-none pos-abs bottom-0 left-0 w-100per bg-blue"></div>

            <div
                className={`HeaderMenu_hidden pos-fixed left-0 z-index-1 w-100per padding-8px border-top-blur bg-primary overflow-y-auto scroll-thin ${
                    is_true ? '' : 'display-none'
                }`}
            >
                <ul className="list-none">
                    {[...getMenuUser({ user: user }), ...DATA_HEADER_MENU].map(
                        (item, ix) => (
                            <li key={ix} className="HeaderMenu_item">
                                <HeaderHorizontalLink
                                    title={item.title}
                                    link_to={item.link_to}
                                    Icon={item.Icon}
                                />
                            </li>
                        )
                    )}
                </ul>
            </div>
        </div>
    );
}

export default HeaderMenu;

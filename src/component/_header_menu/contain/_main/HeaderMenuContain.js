import React, { useContext } from 'react';
import PropTypes from 'prop-types';
//
import { context_api } from '../../../../_context/ContextAPI';
//
import { DATA_HEADER_MENU } from '../../_data/HeaderLeftData';
//
import HeaderHorizontalLink from '../../../_header_pc/_components/link/HeaderHorizontalLink';
import HeaderAccountMode from '../../../_header_pc/header_right/account/mode/HeaderAccountMode';
import ActionsAccountLog from '../../../_header_pc/header_right/account/log/ActionsAccountLog';

//
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
HeaderMenuContain.propTypes = {
    handleClose: PropTypes.func,
};

HeaderMenuContain.defaultProps = {
    handleClose: () => {},
};

//
function HeaderMenuContain({ handleClose }) {
    //
    const { user } = useContext(context_api);

    //
    return (
        <div className="HeaderMenuContain">
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

                <li className="HeaderMenu_item">
                    <HeaderAccountMode />
                </li>

                <li className="HeaderMenu_item">
                    <ActionsAccountLog closeAccount={handleClose} />
                </li>
            </ul>
        </div>
    );
}

export default HeaderMenuContain;

import React from 'react';
import PropTypes from 'prop-types';
//
import PLLinks from '../../../../components/links/PLLinks';
//
import './PLHBestLaptopsLinks.scss';
import { IS_MOBILE } from '../../../../../../_constant/Constant';

//
PLHBestLaptopsLinks.propTypes = {};

//
function PLHBestLaptopsLinks({ link_arr, count_laptop, count_tablet }) {
    //
    return (
        <div className="PLHBestLaptopsLinks">
            <PLLinks
                link_arr={[
                    ...link_arr,

                    ...(IS_MOBILE
                        ? []
                        : [
                              {
                                  link_to: '/phone-laptop-phones',
                                  name: (
                                      <span>
                                          Xem tất cả <b>{count_laptop}</b>{' '}
                                          laptop
                                      </span>
                                  ),
                              },
                              {
                                  link_to: '/phone-laptop-phones',
                                  name: (
                                      <span>
                                          Xem tất cả <b>{count_tablet}</b>{' '}
                                          tablet
                                      </span>
                                  ),
                              },
                          ]),
                ]}
                class_item="PLHBestLaptopsLinks_item margin-left-10px"
            />
        </div>
    );
}

export default PLHBestLaptopsLinks;

import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
//
import { IS_MOBILE } from '../../../../../_constant/Constant';
//
import { ParseLocationSearch } from '../../../../../_some_function/ParseLocationSearch';
//
import FbSearchPageMenuAll from '../all/FbSearchPageMenuAll';
import FbSearchPageMenuPost from '../post/_main/FbSearchPageMenuPost';
import FbSearchPageMenuPeople from '../people/_main/FbSearchPageMenuPeople';
import FbSearchPageMenuPhoto from '../photo/_main/FbSearchPageMenuPhoto';
import FbSearchPageMenuVideo from '../video/_main/FbSearchPageMenuVideo';
import FbSearchPageMenuPages from '../pages/_main/FbSearchPageMenuPages';
import FbSearchPageMenuGroups from '../groups/_main/FbSearchPageMenuGroups';
import FbSearchInput from '../../../input/_main/FbSearchInput';
//
import './FbSearchPageLeft.scss';

//
FbSearchPageLeft.propTypes = {};

//
function FbSearchPageLeft({}) {
    //
    const search_obj = ParseLocationSearch();

    const search_value = search_obj['q'];

    //
    return (
        <div className="FbSearchPageLeft h-100per display-flex flex-col">
            <div className="FbSearchPageLeft_head pos-rel margin-x-16px border-bottom-blur">
                {IS_MOBILE ? (
                    <div key={search_value} className="">
                        <FbSearchInput
                            initial_value={search_value}
                            initial_open={IS_MOBILE}
                        />
                    </div>
                ) : (
                    <h1 className="FbSearchPageLeft_head_title padding-top-17px padding-bottom-20px bg-primary line-20px font-24px font-700">
                        Search results
                    </h1>
                )}
            </div>

            <div
                className={`flex-1 overflow-y-auto scroll-thin ${
                    search_value ? '' : 'display-none'
                }`}
            >
                <div className="FbSearchPageLeft_filter_title flex-between-center padding-x-16px line-18px">
                    <h2 className="font-17px font-600">Filters</h2>

                    <div>
                        {Object.keys(search_obj).length >= 2 ? (
                            <Link to={`${location.pathname}?q=${search_value}`}>
                                <div className="padding-8px brs-6px hv-bg-fb">
                                    Reset
                                </div>
                            </Link>
                        ) : null}
                    </div>
                </div>

                <div className="FbSearchPageLeft_contain padding-x-8px padding-bottom-20px">
                    <div>
                        <FbSearchPageMenuAll search_value={search_value} />
                    </div>

                    <div>
                        <FbSearchPageMenuPost search_value={search_value} />
                    </div>

                    <div>
                        <FbSearchPageMenuPeople search_value={search_value} />
                    </div>

                    <div>
                        <FbSearchPageMenuPhoto search_value={search_value} />
                    </div>

                    <div>
                        <FbSearchPageMenuVideo search_value={search_value} />
                    </div>

                    <div>
                        <FbSearchPageMenuPages search_value={search_value} />
                    </div>

                    <div>
                        <FbSearchPageMenuGroups search_value={search_value} />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default FbSearchPageLeft;

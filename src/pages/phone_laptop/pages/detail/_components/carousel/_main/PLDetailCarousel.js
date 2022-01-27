import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
//
import { useMultiDataKey } from '../../../../../../../_hooks/useMultiDataKey';
//
import Carousel from '../../../../../../../component/carousel/_main/Carousel';
//
import PLDCarouselChoices from '../choices/_main/PLDCarouselChoices';

//
import { getDefaultArr } from '../../../../../../../_default/_common/getDefaultArr';
import { getRandomImg } from '../../../../../../../_default/_common/default_image';

//
PLDetailCarousel.propTypes = {};

//
function PLDetailCarousel({
    choice_arr,
    specific_vid_pics,

    has_link_more,
    link_more_to,
    link_more_name,

    openDetailCarousel,
}) {
    //
    const { state_obj, setStateObj, getData_API, handleChangeKey } =
        useMultiDataKey({
            initial_key: 'specific',
            initial_data_arr: specific_vid_pics,
            initial_count: specific_vid_pics.length,

            handle_API_L: handle_API_PLDetailVidPic_L,
            other_state: {
                vid_pic_ix_obj: {
                    specific: 0,
                },
            },
        });

    const { obj, c_key, vid_pic_ix_obj, is_fetching } = state_obj;

    const choice_ix = choice_arr.findIndex((item) => item.name == c_key);

    // -----

    //
    function handle_API_PLDetailVidPic_L() {
        const data = getDefaultArr(getRandomImg, 3, 15);
        return {
            data: data,
            count: data.length,
            pages: 1,
        };
    }

    // -----

    //
    function handleCarouselMove(carousel_ix) {
        if (carousel_ix == 0 || carousel_ix > obj[c_key].data_arr.length) {
            return;
        }

        setStateObj((state_obj) => {
            return {
                ...state_obj,
                vid_pic_ix_obj: {
                    ...state_obj.vid_pic_ix_obj,
                    [c_key]: carousel_ix,
                },
            };
        });
    }

    //
    function handleChoose(ix) {
        const choice_obj = choice_arr[ix];

        if (choice_obj.only_screen) {
            openDetailCarousel(choice_obj);

            return;
        }

        const new_key = choice_obj.name;

        vid_pic_ix_obj[new_key] = vid_pic_ix_obj[new_key] || 1;
        handleChangeKey(new_key);
    }

    //
    function onOpenDetailCarousel() {
        const choice_obj = choice_arr[vid_pic_ix_obj[c_key]];

        openDetailCarousel(choice_obj);
    }

    //
    return (
        <div className="PLDetailCarousel">
            <div className="PLDetailCarousel_carousel pos-rel margin-bottom-15px padding-top-50per text-white">
                {choice_arr.map((item, ix) =>
                    item.only_screen || !obj[item.name] ? null : (
                        <div
                            key={ix}
                            className={`pos-abs-100 ${
                                item.name == c_key ? '' : 'display-none'
                            }`}
                        >
                            <Carousel
                                vid_pics={[
                                    obj[item.name].data_arr.slice(-1)[0],
                                    ...obj[item.name].data_arr,
                                    obj[item.name].data_arr[0],
                                ]}
                                has_fetched={obj[item.name].has_fetched}
                                use_auto_next={false}
                                use_dot={false}
                                handleClick={onOpenDetailCarousel}
                                handleCarouselMove={handleCarouselMove}
                            />
                        </div>
                    )
                )}
            </div>

            <div className="display-flex-center margin-bottom-15px">
                <div>
                    <span
                        className="text-blue cursor-pointer"
                        onClick={onOpenDetailCarousel}
                    >
                        {choice_arr[choice_ix].title_see_all}
                    </span>

                    <span className="margin-left-10px">
                        ({vid_pic_ix_obj[c_key]}/{obj[c_key].data_arr.length})
                    </span>
                </div>

                {has_link_more ? (
                    <div className="margin-left-10px">
                        <span>Tìm hiểu</span>

                        <Link to={link_more_to}>{link_more_name}</Link>
                    </div>
                ) : null}
            </div>

            <div>
                <PLDCarouselChoices
                    choice_arr={choice_arr}
                    choice_ix={choice_ix}
                    handleChoose={handleChoose}
                />
            </div>
        </div>
    );
}

export default PLDetailCarousel;

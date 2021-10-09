import PropTypes from 'prop-types';

//
export const CUPost_propTypes = {
    main_content: PropTypes.string,
    vid_pics: PropTypes.arrayOf(
        PropTypes.oneOfType([
            PropTypes.shape({
                id: PropTypes.number,
                vid_pic: PropTypes.string,
                content: PropTypes.string,
                type: PropTypes.string,
                alt: PropTypes.string,
                user_tag_arr: PropTypes.array,
            }),
            PropTypes.shape({
                vid_pic: PropTypes.string,
                content: PropTypes.string,
                thumbnail: PropTypes.string,
                srt_file: PropTypes.object,
                type: PropTypes.string,
            }),
        ])
    ),
    permission: PropTypes.number,

    title: PropTypes.string,
    title_action: PropTypes.string,
    chosen_vid_pic: PropTypes.bool,

    handleCUPost: PropTypes.func,
};

export const CUPost_defaultProps = {
    main_content: '',
    vid_pics: [],
    permission: 0,

    title: '',
    title_action: 'Post',
    chosen_vid_pic: false,
};
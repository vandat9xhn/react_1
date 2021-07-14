import { getRandomBool } from "./default_bool";

//
const content_1 =
    'Bạn cần sức mạnh, nghị lực nên cuộc sống đã đặt ra những khó khăn nghịch cảnh để bạn vượt qua và trở nên mạnh mẽ hơnCuộc sống của bạn chỉ thật sự ý nghĩa và trọn vẹn khi bạn biết giữ gìn và nuôi dưỡng ước mơ, biết ghi nhận, biết tin vào những lời hứa';
const content_2 =
    'Bạn có lẽ chiến thắng người khác bằng tranh cãi. Nhưng sẽ hay hơn khi đánh bại họ bằng nụ cười của bạn. Bởi lẽ những con người muốn tranh cãi với bạn họ không thể chịu đựng được sự im lặng của bạn cùng nụ cười ấy.';

const content_3 =
    'Người khác nói tới cách sống của bạn, cũng chẳng ảnh hưởng gì tới bạn. Bạn có sống thế nào, cũng chẳng có liên quan gì đến người ta. Nếu bạn muốn có một cuộc sống tốt đẹp thì đừng để tâm tới họ.';

const content_4 = '9a0d 0asd 9asd8 am sdl aa8d sak 90asd0 a0 aam dasmdk 54df4';
const content_5 =
    'Có những lúc, không có lần sau, không có cơ hội bắt đầu lại. Có những lúc, bỏ lỡ hiện tại, vĩnh viễn không còn cơ hội nữa.';
const content_6 =
    'Đôi khi, rõ ràng chúng ta đã tha thứ cho người ta, song lại không thể thực lòng vui vẻ, đó là bởi vì, chúng ta quên tha thứ cho bản thân mình.';
const content_7 =
    'Đừng bao giờ cau mày hay nhăn mặt thậm chí khi bạn đang buồn, chắc chắn sẽ có ai đó yêu bạn chỉ vì nụ cười của bạn thôi. Với thế giới bạn chỉ là một cá nhân nhưng đối với một ai đó, bạn là cả thế giới';

//
const content_more_1 =
    'he way to get started is to quit talking and begin doing. -Walt Disney';
const content_more_2 =
    "Your time is limited, so don't waste it living someone else's life. Don't be trapped by dogma – which is living with the results of other people's thinking. -Steve Jobs";
const content_more_3 =
    'If life were predictable it would cease to be life, and be without flavor. -Eleanor Roosevelt';
const content_more_4 =
    "If you look at what you have in life, you'll always have more. If you look at what you don't have in life, you'll never have enough. -Oprah Winfrey";
const content_more_5 =
    "If you set your goals ridiculously high and it's a failure, you will fail above everyone else's success. -James Cameron";
const content_more_6 =
    "Life is what happens when you're busy making other plans. -John Lennon";
const content_more_7 =
    "Even the world's most successful individuals have experienced their fair share of setbacks and hardships.";
const content_more_8 =
    'Whoever is happy will make others happy too. -Anne Frank';
const content_more_9 =
    'When you reach the end of your rope, tie a knot in it and hang on';

//
export const default_content_arr = [
    content_1,
    content_2,
    content_3,
    content_4,
    content_5,
    content_6,
    content_7,
];

export const default_content_more_arr = [
    content_more_1,
    content_more_2,
    content_more_3,
    content_more_4,
    content_more_5,
    content_more_6,
    content_more_7,
    content_more_8,
    content_more_9,
];

//
export const getRandomContent = () =>
    '"CONTENT:" (' +
    Math.round(Math.random() * 1000) +
    ') ' +
    default_content_arr[
        Math.round(Math.random() * (default_content_arr.length - 1))
    ];

//
export const getRandomContentMore = () =>
    '"CONTENT MORE:" (' +
    Math.round(Math.random() * 1000) +
    ') ' +
    default_content_more_arr[
        Math.round(Math.random() * (default_content_more_arr.length - 1))
    ];

//
export const getRandomContentObj = () => ({
    content_obj: {
        content_more: '',
        has_more_content: getRandomBool(),
        content: getRandomContent(),
    },
});

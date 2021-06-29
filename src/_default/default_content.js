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
export const default_content_arr = [
    content_1,
    content_2,
    content_3,
    content_4,
    content_5,
    content_6,
    content_7,
];

//
export const getRandomContent = () =>
    default_content_arr[
        Math.round(Math.random() * (default_content_arr.length - 1))
    ];

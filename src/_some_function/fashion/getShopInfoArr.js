import { IS_MOBILE } from '../../_constant/Constant';
import { UnitNumber } from '../UnitNumber';
//
import UnitTime from '../UnitTime';

//
export const getShopInfoArr = ({
    products = 0,
    rating = 0,
    reply_chat = '',
    time_joined = '',
    reply_time = 0,
    followed = 0,
}) =>
    IS_MOBILE
        ? [
              {
                  title: 'Sản Phẩm',
                  value: products,
              },
              {
                  title: 'Đánh Giá',
                  value: rating,
              },
              {
                  title: 'Phản Hồi Chat',
                  value: reply_chat,
              },
          ]
        : [
              {
                  title: 'Đánh Giá',
                  value: rating,
              },
              {
                  title: 'Tỉ Lệ Phản Hồi',
                  value: reply_chat,
              },
              {
                  title: 'Tham Gia',
                  value: `${UnitTime(
                      new Date().getTime() - new Date(time_joined).getTime(),
                      undefined,
                      true
                  )} trước`,
              },
              {
                  title: 'Sản Phẩm',
                  value: products,
              },
              {
                  title: 'Thời Gian Phản Hồi',
                  value: `trong ${UnitTime(reply_time, '1 Phút', true)}`,
              },
              {
                  title: 'Người Theo Dõi',
                  value: followed,
              },
          ];

//
export const getShopInfoArrInShop = ({
    rating = 0,
    rate_count = 0,
    products = 0,
    reply_chat = '',
    time_joined = '',
    reply_time = 0,
    followed = 0,
    following = 0,
}) =>
    IS_MOBILE
        ? [
              {
                  title: 'Sản Phẩm',
                  value: products,
              },
              {
                  title: 'Đánh Giá',
                  value: rating,
              },
              {
                  title: 'Phản Hồi Chat',
                  value: reply_chat,
              },
          ]
        : [
              {
                  title: 'Sản Phẩm',
                  value: products,
              },
              {
                  title: 'Đang theo dõi',
                  value: UnitNumber(following),
              },
              {
                  title: 'Tỉ Lệ Phản Hồi',
                  value: `${reply_chat} (trong ${UnitTime(
                      reply_time,
                      '1 Phút',
                      true
                  )})`,
              },
              {
                  title: 'Người Theo Dõi',
                  value: UnitNumber(followed),
              },
              {
                  title: 'Đánh Giá',
                  value: `${rating} (${UnitNumber(rate_count)} Đánh giá)`,
              },

              {
                  title: 'Tham Gia',
                  value: `${UnitTime(
                      new Date().getTime() - new Date(time_joined).getTime(),
                      undefined,
                      true
                  )} trước`,
              },
          ];

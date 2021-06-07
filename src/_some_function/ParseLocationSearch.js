import { parse } from 'query-string';

//
export const ParseLocationSearch = (key_options = {}) => {
    const parse_str = parse(location.search);
    return parse_str;
};
// location.search
//     ? JSON.parse(
//           decodeURI(location.search)
//               .replace('?', '{"')
//               .replace(/=/g, '":"')
//               .replace(/&/g, '","') + '"}'
//       )
//     : {};

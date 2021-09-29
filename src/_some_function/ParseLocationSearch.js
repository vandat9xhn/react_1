import { parse } from 'query-string';

//
export const ParseLocationSearch = (key_options = {}) => {
    const parse_str = parse(location.search, key_options);
    
    return parse_str;
};

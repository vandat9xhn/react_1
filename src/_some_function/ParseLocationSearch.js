//
export const ParseLocationSearch = () =>
    location.search
        ? JSON.parse(
              decodeURI(location.search)
                  .replace('?', '{"')
                  .replace(/=/g, '":"')
                  .replace(/&/g, '","') + '"}'
          )
        : {};

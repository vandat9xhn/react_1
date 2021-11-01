//
export function testRegexProfile(profile_pathname = location.pathname) {
    return /^\/profile\/\d+/.test(profile_pathname);
}

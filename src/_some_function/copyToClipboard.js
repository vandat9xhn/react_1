//
export function copyTextToClipboard(text = '') {
    navigator.clipboard.writeText(text);
}

//
export function getPluralSingularNoun({ noun = '', count = 1 }) {
    if (count <= 1) {
        return noun;
    }

    const last_letter = noun.slice(-1);
    const last_second_letter = noun.slice(-2, -1);

    if (last_letter != 'y' || 'aeiouy'.includes(last_second_letter)) {
        return `${noun}s`;
    }

    return `${noun.slice(0, noun.length - 2)}ies`;
}

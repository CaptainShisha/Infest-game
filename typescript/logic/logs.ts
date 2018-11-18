export const log: Function = (changes: string): void => {
    const changesLabel: JQuery = $('#logContainer');
    if (changesLabel.children().length === 6) {
        changesLabel.children()[0].remove();
    }
    changesLabel.append(`<p>${changes}</p>`);
};

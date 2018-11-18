export const log: Function = (changes: string): void => {
    const changesLabel: JQuery = $('#logContainer');
    console.log(changesLabel.children().length);
    if(changesLabel.children().length === 6) {
        changesLabel.children()[0].remove();
    }
    changesLabel.append(`<p>${changes}</p>`);
};

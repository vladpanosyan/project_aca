export function UTCtimeCreator(date: any, time: string) {
    const datePart = [date.year, date.month, date.day];
    const timePart = time.split(":");
    return new Date(date.year, date.month - 1, date.day, +timePart[0], +timePart[1]);
}
export function isValidDate(date, time) {
    const dateNOw = UTCtimeCreator(date, time).getTime();
    if (dateNOw - (1000 * 60 * 2) < Date.now()) {  // half day
        return;
    }
    return true;
}



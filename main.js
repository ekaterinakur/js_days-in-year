function daysInYear(year) {
    try {
        if (!Number.isInteger(year)) {
            throw new Error("Incorrect data: year is not a positive integer");
        }

        const firstDay = new Date(year, 0, 1);
        const lastDay = new Date(year, 11, 31, 23, 59, 59);
        const msInYear = lastDay - firstDay;
        const msInDay = 1000 * 60 * 60 * 24;

        return Math.ceil(msInYear / msInDay);
    } catch(error) {
        return error.message;
    }
}

daysInYear(2019); // 365
daysInYear('2019'); // exception
daysInYear(2020); // 366
daysInYear(2020.2); // exception
daysInYear(2100); // 365
daysInYear({year: 2100}); // exception
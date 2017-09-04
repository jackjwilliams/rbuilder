export const Minutes = (ms) => (ms/1000/60) << 0;
export const Seconds = (ms) => (ms/1000) % 60;

export const DiffInSeconds = (fromDate, toDate, defaultReturnValue) => fromDate && toDate ? (toDate - fromDate) / 1000 : defaultReturnValue;
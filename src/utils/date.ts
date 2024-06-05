/**
 * Formats a date in 'MM/YYYY' format.
 * 
 * `null` dates are formatted as 'Present'.
 */
export function formatDate(date: Date | null) {
    if (!date) {
        return 'Present';
    }
    return date.toLocaleDateString(undefined, {month: '2-digit', year: 'numeric'});
}

function accessibleDate(date: Date | null) {
    if (!date) {
        return 'Present';
    }
    return date.toLocaleDateString(undefined, {month: 'long', year: 'numeric'});
}

/**
 * Formats a date range in 'MM/YYYY - MM/YYYY' format.
 * 
 * `null` dates are formatted as 'Present'.
 */
export function formatDateRange(start: Date, end: Date | null) {
    return `${formatDate(start)} - ${formatDate(end)}`;
}

export function accessibleDateRange(start: Date, end: Date | null) {
    return `From ${accessibleDate(start)} to ${accessibleDate(end)}`;
}

/**
 * Converts number of millis to `Y years, M months` format.
 */
function millisToDuration(millis: number, isStillActive = false): string {
    const seconds = millis / 1000;
    const minutes = seconds / 60;
    const hours = minutes / 60;
    const days = hours / 24;
    const months = days / 30;
    const years = (months / 12).toFixed(0);

    const durations: string[] = [];

    if (years !== '0') {
        durations.push(`${years} yrs`);
    }
    
    const monthsRemainder = months % 12;
    const monthsNormalized = monthsRemainder < 1 ? 0 : monthsRemainder;

    if (monthsNormalized !== 0) {
        durations.push(`${monthsNormalized.toFixed(0)} mo`);
    }

    const andCounting = isStillActive ? '+' : '';

    return `${durations.join(', ')}${andCounting}`;
}

export function formatDateDuration(start: Date, end: Date | null) {
    const isStillActive = !end;
    end ||= new Date();
    
    const durationMillis = end.getTime() - start.getTime();
    return millisToDuration(durationMillis, isStillActive);
}
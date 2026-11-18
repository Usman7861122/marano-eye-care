// Office hours in New Jersey time. Index 0 = Sunday. [open, close] in 24h, null = closed.
export type Hours = ([number, number] | null)[];
export const hoursBy: Record<string, Hours> = {
  Denville: [null, [9, 17], [9, 17], [9, 17], [9, 17], [8, 16], null],
  Livingston: [null, [9, 17], [8, 17], [12, 20], [9, 17], [8, 16], null],
  Newark: [null, [9, 17], [9, 17], [9, 17], [9, 17], [9, 17], null],
};
const DAYS = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
export const t12 = (h: number) => `${((h + 11) % 12) + 1}:00 ${h >= 12 ? 'pm' : 'am'}`;

/** Which offices are open right now, and when the practice opens next. */
export function practiceStatus(date = new Date()) {
  const nj = new Date(date.toLocaleString('en-US', { timeZone: 'America/New_York' }));
  const day = nj.getDay();
  const mins = nj.getHours() * 60 + nj.getMinutes();
  const open = Object.entries(hoursBy).filter(([, h]) => { const t = h[day]; return t && mins >= t[0] * 60 && mins < t[1] * 60; }).map(([c]) => c);
  if (open.length) return { isOpen: true, open, label: 'Open Now' };
  for (let i = 0; i <= 7; i++) {
    const d = (day + i) % 7;
    const starts = Object.values(hoursBy).map((h) => h[d]).filter((t): t is [number, number] => !!t && (i > 0 || mins < t[0] * 60)).map((t) => t[0]);
    if (starts.length) return { isOpen: false, open, label: 'Closed', next: `Opens ${i === 0 ? 'today' : i === 1 ? 'tomorrow' : DAYS[d]} at ${t12(Math.min(...starts))}` };
  }
  return { isOpen: false, open, label: 'Closed', next: '' };
}

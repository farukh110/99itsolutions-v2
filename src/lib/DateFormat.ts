export default function DateFormat(
  currentDate: string | number | Date
): string {
  const provideDate = new Date(currentDate);

  const date: number = provideDate.getDate();

  const month: string = provideDate.toDateString();
  const monthFormat: string[] = month.split(" ");
  const year: number = provideDate.getFullYear();

  return `${date} ${monthFormat[1]} ${year}`;
}

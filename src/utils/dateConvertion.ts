/**
 *
 * @param date Formato: yyyy-mm-dd Ex: 2000-01-31
 * @returns Data
 */
export default function DateConvertion(
  date: string | undefined
): Date | undefined {
  if (date === undefined) {
    return undefined;
  }
  if (date == "0000-00-00") {
    return undefined;
  }
  const splittedDate = date.split("-");
  const year = Number(splittedDate[0]);
  const month = Number(splittedDate[1]);
  const day = Number(splittedDate[2]);
  if (Number.isNaN(year) || Number.isNaN(month) || Number.isNaN(day)) {
    throw new Error("Erro ao converter data, formato invalido.");
  } else {
    return new Date(year, month, day);
  }
}

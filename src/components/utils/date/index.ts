import { format } from "date-fns";

export const formatDate = (date: Date | string) => {
  const localizedDate = format(new Date(date), "P");

  return localizedDate;
};

export const formatDateLong = (date: Date | string) => {
  const localizedDate = format(new Date(date), "PPP");

  return localizedDate;
};

export const formatDayOfWeek = (date: Date | string) => {
  const localizedDate = format(new Date(date), "E");

  return localizedDate;
};

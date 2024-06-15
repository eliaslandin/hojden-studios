import { format } from "date-fns";

export const formatDate = (date: Date | string, withYear = false) => {
  const localizedDate = format(new Date(date), "P");

  return withYear
    ? localizedDate.split("/").join(".")
    : localizedDate.slice(0, -5).split("/").join(".");
};

export const formatDateLong = (date: Date | string) => {
  const localizedDate = format(new Date(date), "PPP");

  return localizedDate;
};

export const formatDayOfWeek = (date: Date | string) => {
  const localizedDate = format(new Date(date), "E");

  return localizedDate;
};

import Cookies from "js-cookie";
export const setCookieWithExpiryHour = (
  name: string,
  value: string,
  hours: number
) => {
  const date = new Date();
  date.setTime(date.getTime() + hours * 60 * 60 * 1000);
  const expires = date;
  Cookies.set(name, value, { expires });
};

export const setCookieWithExpiryMinute = (
  name: string,
  value: string,
  hours: number
) => {
  const date = new Date();
  date.setTime(date.getTime() + hours * 60 * 1000);
  const expires = date;
  Cookies.set(name, value, { expires });
};

export const setCookieWithExpiryDays = (
  name: string,
  value: string,
  days: number
) => {
  Cookies.set(name, value, { expires: days });
};

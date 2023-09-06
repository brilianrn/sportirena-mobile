export const isPhone = (phone: string) => {
  const regex = /^(\+91-|\+91|0)?\d{11}$/; // eslint-disable-line
  return regex.test(phone);
};

export const isIncludeNumber = (str: string) => {
  const regex = /\d/; // eslint-disable-line
  return regex.test(str);
};

export const isIncludeCapital = (str: string) => {
  const regex = /[A-Z]/; // eslint-disable-line
  return regex.test(str);
};

export const isIncludeSpecialChar = (str: string) => {
  const regex = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/; // eslint-disable-line
  return regex.test(str);
};

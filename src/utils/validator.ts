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

export const isNumber = (str: string) => {
  const regex = /^\d+$/;
  return regex.test(str);
};

export const isBase64 = (str: string) => {
  const regex =
    /^([0-9a-zA-Z+/]{4})*(([0-9a-zA-Z+/]{2}==)|([0-9a-zA-Z+/]{3}=))?$/;
  return regex.test(str);
};

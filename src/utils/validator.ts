export const isPhone = (phone: string) => {
  const regex = /^(\+91-|\+91|0)?\d{11}$/; // eslint-disable-line
  return regex.test(phone);
};

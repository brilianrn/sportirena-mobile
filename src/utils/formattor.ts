export const subStringLongText = (text: string, limit: number) => {
  return text.length > limit ? text.substring(0, limit - 3) + "..." : text;
};

export const IDRFormat = (num: number, prefix?: string) => {
  if (!num) return "0";
  const number_string = num
    .toString()
    .replace(/[^,\d]/g, "")
    .toString();
  const split = number_string.split(",");
  const sisa = split[0].length % 3;
  let rupiah = split[0].substr(0, sisa);
  const ribuan = split[0].substr(sisa).match(/\d{3}/gi);
  let separator = "";

  if (ribuan) {
    separator = sisa ? "." : "";
    rupiah += separator + ribuan.join(".");
  }

  rupiah = split[1] !== undefined ? `${rupiah},${split[1]}` : rupiah;
  return prefix === undefined ? rupiah : rupiah ? `Rp. ${rupiah}` : "";
};

// eslint-disable-next-line
export const serializeParam = (obj: Record<string, any>): string => {
  let resolveObj = {};
  Object.entries(obj).forEach(([key, value]) => {
    if (obj[key]) {
      resolveObj = { ...resolveObj, [key]: value };
    }
  });

  const params = new URLSearchParams(resolveObj);
  return params.toString();
};

// eslint-disable-next-line
export const deserializeParam = (str: string): Record<string, any> => {
  const params = new URLSearchParams(str);
  // eslint-disable-next-line
  const obj: Record<string, any> = {};

  params.forEach((value, key) => {
    obj[key] = value;
  });

  return obj;
};

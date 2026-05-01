export const toEnglishDigits = (str: string) => {
  const persian = "۰۱۲۳۴۵۶۷۸۹";
  const arabic = "٠١٢٣٤٥٦٧٨٩";

  return str
    .split("")
    .map((ch) => {
      const pIndex = persian.indexOf(ch);
      if (pIndex !== -1) return pIndex.toString();

      const aIndex = arabic.indexOf(ch);
      if (aIndex !== -1) return aIndex.toString();

      return ch;
    })
    .join("");
};

export const isValidNumber = (value: string) => /^-?\d*\.?\d*$/.test(value);

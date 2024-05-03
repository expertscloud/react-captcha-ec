export const backGroundColors = {
  buttonText: "Background Color",
  values: [
    { value: "grey", label: "Grey" },
    { value: "red", label: "Red" },
    { value: "silver", label: "Silver" },
    { value: "blue", label: "Blue" },
    { value: "green", label: "Green" },
    { value: "white", label: "White", default: true },
  ],
};

export const fontColors = {
  buttonText: "Font Color",
  values: [
    { value: "white", label: "White" },
    { value: "grey", label: "Grey" },
    { value: "red", label: "Red" },
    { value: "silver", label: "Silver" },
    { value: "green", label: "Green" },
    { value: "blue", label: "Blue", default: true },
  ],
};
export const captchaTypes = {
  buttonText: "Captcha Type",
  values: [
    { value: "upper", label: "Uppercase Letters" },
    { value: "lower", label: "Lowercase Letters" },
    { value: "numbers", label: "Numbers" },
    { value: "special_char", label: "Special Characters", default: true },
  ],
};

export const lengthOfCaptcha = {
  buttonText: "Length of Captcha",
  values: [
    { value: 4, label: "4 Characters" },
    { value: 6, label: "6 Characters" },
    { value: 8, label: "8 Characters" },
    { value: 10, label: "10 Characters", default: true },
  ],
};

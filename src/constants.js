export const captchaOptions = {
  backGroundColor: [
    { value: "grey", label: "Grey" },
    { value: "red", label: "Red" },
    { value: "silver", label: "Silver" },
    { value: "blue", label: "Blue" },
    { value: "green", label: "Green" },
    { value: "white", label: "White", default: true },
  ],
  fontColor: [
    { value: "white", label: "White" },
    { value: "grey", label: "Grey" },
    { value: "red", label: "Red" },
    { value: "silver", label: "Silver" },
    { value: "green", label: "Green" },
    { value: "blue", label: "Blue", default: true },
  ],
  captchaType: [
    { value: "upper", label: "Uppercase Letters" },
    { value: "lower", label: "Lowercase Letters" },
    { value: "numbers", label: "Numbers" },
    { value: "special_char", label: "Special Characters", default: true },
  ],
  numberOfChars: [
    { value: 4, label: "4 Characters" },
    { value: 6, label: "6 Characters" },
    { value: 8, label: "8 Characters" },
    { value: 10, label: "10 Characters", default: true },
  ],
};

export const buttonTexts = {
  backGroundColor: "Background Color",
  fontColor: "Font Color",
  captchaType: "Captcha Type",
  numberOfChars: "Length of Captcha",
};

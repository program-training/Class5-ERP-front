export interface inputs {
  email: string;
  password: string;
}
export const Password_validation = {
  required: "This field is required.",
  pattern: {
    value:
      /((?=.*\d{1})(?=.*[A-Z]{1})(?=.*[a-z]{1})(?=.*[!@#$%^&*-]{1}).{7,20})/,
    message: "password must contain a capital letter number and spacial marks ",
  },
  minLength: {
    value: 8,
    message: "This input is lower from the min length(8)",
  },
};
export const Email_validation = {
  required: "This field is required.",
  pattern: {
    value: /(?=.*[@]{1})(?=.*[.]{1})/,
    message: "invalid email ",
  },
};

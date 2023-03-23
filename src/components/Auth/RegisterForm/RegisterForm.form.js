import * as Yup from "yup";

export function initialValues() {
  return {
    email: "",
    username: "",
    name: "",
    password: "",
  };
}

export function validateSchema() {
  return Yup.object({
    email: Yup.string().email(true).required(true),
    username: Yup.string().required(true),
    name: Yup.string().required(true),
    password: Yup.string().required(true),
  });
}

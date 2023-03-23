import * as Yup from "yup";

export function initialValues() {
  return {
    identifier: "",
    password: "",
  };
}

export function validateSchema() {
  return Yup.object({
    identifier: Yup.string().required(true),
    password: Yup.string().required(true),
  });
}

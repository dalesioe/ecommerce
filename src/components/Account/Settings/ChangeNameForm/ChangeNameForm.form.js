import * as Yup from "yup";

export function initalValues(name) {
  return { name };
}

export function validationSchema() {
  return Yup.object({
    name: Yup.string().required(true),
  });
}

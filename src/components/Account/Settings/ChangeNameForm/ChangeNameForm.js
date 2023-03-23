import { Form } from "semantic-ui-react";
import { useFormik } from "formik";
import { initalValues, validationSchema } from "./ChangeNameForm.form";
import styles from "./ChangeNameForm.module.scss";

export function ChangeNameForm() {
  const formik = useFormik({
    initialValues: initalValues("Emi"),
    validationSchema: validationSchema(),
    validateOnChange: false,
    onSubmit: async (formValue) => {
      try {
        console.log(formValue);
      } catch (error) {
        console.error(error);
      }
    },
  });

  return (
    <Form>
      <label>Nombre y Apellido</label>
      <div className={styles.content}>
        <Form.Input
          name="name"
          placeholder="Nombre y apellido"
          values={formik.values.name}
          onChange={formik.handleChange}
          error={formik.errors.name}
        />
        <Form.Button type="submit" loading={formik.isSubmitting}>
          Enviar
        </Form.Button>
      </div>
    </Form>
  );
}

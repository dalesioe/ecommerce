import { Form, FormGroup } from "semantic-ui-react";
import { useFormik } from "formik";
import { initialValues, validateSchema } from "./RegisterForm.form";
import { Auth } from "@/api";
import { useRouter } from "next/router";

const authCrtl = new Auth();

export function RegisterForm() {
  const router = useRouter();
  const formik = useFormik({
    initialValues: initialValues(),
    validationSchema: validateSchema(),
    validateOnChange: false,
    onSubmit: async (formValue) => {
      try {
        await authCrtl.register(formValue);
        router.push("/join/sign-in");
      } catch (error) {
        console.error(error);
      }
    },
  });
  return (
    <Form onSubmit={formik.handleSubmit}>
      <Form.Group widths="equal">
        <Form.Input
          name="email"
          type="text"
          placeholder="Correo Electronico"
          value={formik.values.email}
          onChange={formik.handleChange}
          error={formik.errors.email}
        />
        <Form.Input
          name="username"
          type="text"
          placeholder="Nombre de usuario"
          value={formik.values.username}
          onChange={formik.handleChange}
          error={formik.errors.username}
        />
      </Form.Group>

      <Form.Group widths="equal">
        <Form.Input
          name="name"
          type="text"
          placeholder="Nombre y Apellido"
          value={formik.values.name}
          onChange={formik.handleChange}
          error={formik.errors.name}
        />
        <Form.Input
          name="password"
          type="password"
          placeholder="Password"
          value={formik.values.password}
          onChange={formik.handleChange}
          error={formik.errors.password}
        />
      </Form.Group>

      <Form.Button type="submit" fluid loading={formik.isSubmitting}>
        Registrarse
      </Form.Button>
    </Form>
  );
}

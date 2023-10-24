import { useEffect } from "react";
import { Formik, Field, Form } from "formik";
import * as Yup from "yup";
import gsap from "gsap";
import { LoginTypes } from "../../types/login.types";
import Loader from "../Loader/Loader";

interface IProps {
  onSubmit: (userValues: LoginTypes) => void;
  isLoading: boolean;
}

const SignupSchema = Yup.object().shape({
  username: Yup.string()
    .min(1, "Минимально 1 символ")
    .max(150, "Максимально 150 символов")
    .required("Заполните это поле"),
  password: Yup.string()
    .min(1, "Минимально 1 символ")
    .max(150, "Максимально 150 символов")
    .required("Заполните это поле"),
});

const ErrorMessage = ({ message }: { message: string }) => {
  useEffect(() => {
    gsap.fromTo(".error-message", { opacity: 0 }, { opacity: 1 });
  }, [message]);
  return <div className="error-message">{message}</div>;
};

export default function LoginForm({ onSubmit, isLoading }: IProps) {
  return (
    <div className="login-form">
      <h1>Signup</h1>
      <Formik
        initialValues={{
          username: "",
          password: "",
        }}
        onSubmit={(userValues: LoginTypes) => onSubmit(userValues)}
        validationSchema={SignupSchema}
      >
        {({ errors, touched }: { errors: any; touched: any }) => (
          <Form>
            <div className="input-wrapper">
              <label htmlFor="username">First Name</label>
              <Field id="username" name="username" placeholder="John" />
            </div>
            {errors.username && touched.username ? (
              <ErrorMessage message={errors.username} />
            ) : null}

            <div className="input-wrapper">
              <label htmlFor="password">Password</label>
              <Field id="password" name="password" placeholder="Password" />
            </div>
            {errors.password && touched.password ? (
              <ErrorMessage message={errors.password} />
            ) : null}

            {isLoading ? <Loader /> : <button type="submit">Submit</button>}
          </Form>
        )}
      </Formik>
    </div>
  );
}

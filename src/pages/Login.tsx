import { useEffect, useState } from "react";
import "react-app-polyfill/ie11";
import "./login-page.scss";
import LoginForm from "../components/LoginForm/LoginForm";
import { LoginTypes } from "../types/login.types";
import { signUp } from "../api/login";
import { toast } from "react-toastify";

export default function Login() {
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {}, []);

  const onSubmit = async (userValues: LoginTypes) => {
    setIsLoading(true);
    try {
      const user = await signUp(userValues);
      console.log(user);
    } catch (error) {
      console.log(error);
      toast.error("Пароль или логин не верный");
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <div className="login-page">
      <LoginForm onSubmit={onSubmit} isLoading={isLoading} />
    </div>
  );
}

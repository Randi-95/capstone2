import Input from "../component/elements/input.jsx";
import DarkModeToggle from "../component/elements/darkMode.jsx";
import { Link } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import { register } from "../services/auth.js";

function Registrasi() {
  const [successRegister, setSuccessRegister] = useState("");
  const [errorRegister, setErrorRegister] = useState("")

  const handleRegister = (event) => {
    event.preventDefault();
    const data = {
      username: usernameRef.current.value,
      email: emailRef.current.value,
      password: passwordRef.current.value,
    };
    register(data, (status, res) => {
      if (status) {
        setSuccessRegister(res);
      } else {
        setErrorRegister(res)
      }
    });

    usernameRef.current.value = "";
    emailRef.current.value = "";
    passwordRef.current.value = "";
  };

  const usernameRef = useRef(null);
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  useEffect(() => {
    usernameRef.current.focus();
  }, []);

  return (
    <div className="login h-screen dark:bg-[#0D1117]  flex flex-col justify-center lg:flex-row lg:items-center">
      <div className="container-login grid lg:grid-cols-2  items-center px-2 lg:px-10 ">
        <div className="login lg:px-15">
          <div className="absolute top-4 left-4 ">
            <DarkModeToggle />
          </div>
          <img src="/img/logo-capstone.png" alt="" className="w-[60px]" />
          <h1 className="font-bold text-primary text-4xl">Registrasi</h1>
          <p className="text-[#434343] dark:text-white font-medium">
            Buat akun dan mulai menikmati fitur-fitur kami
          </p>
          <form action="" onSubmit={handleRegister}>
            <Input ref={usernameRef} nama="username" type="text"></Input>
            <Input ref={emailRef} nama="email" type="email"></Input>
            <Input ref={passwordRef} nama="password" type="password"></Input>
            <button
              type="submit"
              className="bg-primary mt-4 w-full h-10 font-bold text-white rounded-lg"
            >
              Daftar
            </button>
          </form>
          {successRegister && (
            <div
              role="alert"
              className="border-s-4 border-green-700 bg-green-50 p-4 mt-4"
            >
              <div className="flex items-center gap-2 text-green-700 text-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="size-5"
                >
                  <path
                    fillRule="evenodd"
                    d="M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 3.003zM12 8.25a.75.75 0 01.75.75v3.75a.75.75 0 01-1.5 0V9a.75.75 0 01.75-.75zm0 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z"
                    clipRule="evenodd"
                  />
                </svg>

                <strong className="font-medium text-center">
                    {successRegister}
                </strong>
              </div>
            </div>
          )}
          {errorRegister && (
            <div
              role="alert"
              className="border-s-4 border-red-700 bg-red-50 p-4 mt-4"
            >
              <div className="flex items-center gap-2 text-red-700 text-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="size-5"
                >
                  <path
                    fillRule="evenodd"
                    d="M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 3.003zM12 8.25a.75.75 0 01.75.75v3.75a.75.75 0 01-1.5 0V9a.75.75 0 01.75-.75zm0 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z"
                    clipRule="evenodd"
                  />
                </svg>

                <strong className="font-medium text-center">
                    {errorRegister}
                </strong>
              </div>
            </div>
          )}
          <p className="text-center font-normal mt-4  dark:text-white">
            Kamu sudah memiliki akun?{" "}
            <Link to="/login" className="font-bold text-primary">
              Masuk
            </Link>
          </p>
        </div>
        <div className="foto hidden lg:block">
          <img src="/img/login-image.png" alt="" />
        </div>
      </div>
    </div>
  );
}

export default Registrasi;

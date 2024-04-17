import React from "react";
import { AuthContext } from "../auth/AuthContext";
import { useNavigate } from "react-router-dom";
import { Input } from "@nextui-org/react";
import { useForm } from "react-hook-form";
import { useState } from "react";

function loginForm() {
  const { login } = React.useContext(AuthContext);
  // const { setIsAuthenticated } = React.useContext(AuthContext);
  const [error, setError] = useState(false);
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => validar(data);

  async function validar(data) {
    if (data.user != "" && data.password != "") {
      const response = await login(data.user, data.password);
      // console.log(response);
      if (response) {
        // setIsAuthenticated(true);
        navigate("/admin/dashboard");
        setError(false);
      } else setError(true);
    }
  }

  return (
    <div className="h-full">
      <div
        className="
      p-0
      w-full
      h-fit
      "
      >
        <div
          className=" 
          px-10
          py-24
        md:w-[400px]
        md:max-sm 
        m-auto
        "
        >
          <img
            height={100}
            src="./images/logos/promedia/promedia_full_gray.svg"
            className="m-auto p-10"
          />

          <h1 className="py-3 text-center font-Bebas-Neue text-2xl">
            Iniciar sesión
          </h1>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-3">
            <Input
              {...register("user", { required: "Usuario requerido" })}
              type="text"
              label="Nombre de usuario"
              defaultValue=""
            />
            <p className="text-sm">{errors.user?.message}</p>
            <Input
              {...register("password", { required: "Clave requerida" })}
              type="password"
              label="Clave de acceso"
              defaultValue=""
            />
            <p className="text-sm">{errors.password?.message}</p>
            <button className="btn w-full bg-cyan-800 hover:bg-cyan-950">
              Iniciar sesión
            </button>
          </form>
          {error && (
            <p className="text-center text-warning py-5">
              Verifica el nombre de usuario y la contraseña
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

export default loginForm;

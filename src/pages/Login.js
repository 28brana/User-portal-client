import React, { useState } from "react";
import CustomInput from "../component/CustomInput";

function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className="container mx-auto max-w-lg  p-6 bg-white">
      <h1 className="text-4xl font-semibold text-center">Login Now</h1>
      <p className="text-sm text-center font-semibold text-gray-400 mb-8">
        Start Your Journey with Us
      </p>
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col gap-4 mb-4">
          <CustomInput
            name={"email"}
            type="email"
            value={formData.email}
            onChange={handleChange}
            label={"Email"}
          />
          <CustomInput
            name={"password"}
            value={formData.password}
            onChange={handleChange}
            label={"Password"}
          />
        </div>

        <button type="submit" className="styled-button w-full mb-4">
          Login
        </button>
        <p className="text-sm text-center ">
          Don't have any account ?{" "}
          <a href="/auth/signup" className=" font-semibold text-blue-500">
            Create New account
          </a>{" "}
        </p>
        <hr className="my-4"/>
        <p className="text-sm text-center ">
         
          <a href="/auth/forget" className=" font-semibold text-blue-500">
            Forget Password
          </a>{" "}
        </p>
      </form>
    </div>
  );
}

export default Login;

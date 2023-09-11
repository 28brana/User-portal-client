import React, { useState } from "react";
import CustomInput from "../component/CustomInput";
import { useMutation } from "react-query";
import { toast } from "react-toastify";
import { login } from "../service/api";
import { registerReducer } from "../redux/userReducer";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

function Login() {
  const navagation = useNavigate();
  const dispatch=useDispatch();
  const { mutate } = useMutation(( value ) => login(value), {
    onSuccess: (data) => {
      toast("Login Successfull", { type: "success" });
      dispatch(registerReducer(data.data.user))
      navagation('/');
    },
    onError: (err) => {
      console.log(err.response.data.message)
      toast(`${err.response.data.message}`, { type: "error" });
    },
  });
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
    
    mutate(formData)
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

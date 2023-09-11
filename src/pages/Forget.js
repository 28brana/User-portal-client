import React, { useState } from "react";
import CustomInput from "../component/CustomInput";

function Forget() {
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
    // Handle form submission here (e.g., send data to the server)
    console.log(formData);
  };

  return (
    <div className="container mx-auto max-w-lg  p-6 bg-white">
      <h1 className="text-4xl font-semibold text-center mb-4">
        Forget Password
      </h1>

      <form onSubmit={handleSubmit}>
        <div className=" mb-4">
          <CustomInput
            name={"email"}
            value={formData.email}
            onChange={handleChange}
            label={"Email"}
          />
        </div>

        <button type="submit" className="styled-button w-full mb-4">
          Login
        </button>
        <p className="text-sm text-center ">
          Don't have any account ?{" "}
          <a href="/signup" className=" font-semibold text-blue-500">
            Create New account
          </a>{" "}
        </p>
      </form>
    </div>
  );
}

export default Forget;

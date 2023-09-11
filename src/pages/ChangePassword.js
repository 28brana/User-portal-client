import React, { useState } from "react";
import CustomInput from "../component/CustomInput";
import Header from "../component/Header";

function ChangePassword() {
  const [formData, setFormData] = useState({
    password: "",
    confirmPassword: "",
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
    <div>
      <Header />
      <form
        onSubmit={handleSubmit}
        className="container mx-auto max-w-4xl mt-10"
      >
        <div className=" mb-4">
          <CustomInput
            name={"password"}
            value={formData.password}
            onChange={handleChange}
            label={"password"}
          />
          <CustomInput
            name={"confirmPassword"}
            value={formData.confirmPassword}
            onChange={handleChange}
            label={"confirmPassword"}
          />
        </div>

        <button type="submit" className="styled-button w-full mb-4">
          Change Password
        </button>
      </form>
    </div>
  );
}

export default ChangePassword;

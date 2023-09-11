import React, { useState } from "react";
import { useMutation } from "react-query";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import CustomInput from "../component/CustomInput";
import Header from "../component/Header";
import { changePassword } from "../service/api";

function ChangePassword() {
  const data = useSelector((state) => state.userReducer);

  const { mutate, isLoading } = useMutation((value) => changePassword(value), {
    onSuccess: () => {
      toast("Update Successfull", { type: "success" });
    },
    onError: (err) => {
      toast(`${err.response.data.message}`, { type: "error" });
    },
  });
  const [formData, setFormData] = useState({
    email: data.email,
    oldPassword: "",
    newPassword: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    mutate(formData);
  };

  return (
    <div>
      <Header />
      <form
        onSubmit={handleSubmit}
        className="container mx-auto max-w-4xl mt-10"
      >
        <div className="mb-4">
          <CustomInput
            name={"oldPassword"}
            value={formData.oldPassword}
            onChange={handleChange}
            label={"Old Password"}
          />
          <CustomInput
            name={"newPassword"}
            value={formData.newPassword}
            onChange={handleChange}
            label={"New Password"}
          />
        </div>

        <button
          type="submit"
          disabled={isLoading}
          className="styled-button w-full mb-4"
        >
          Change Password
        </button>
      </form>
    </div>
  );
}

export default ChangePassword;

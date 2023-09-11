import React, { useState } from "react";
import CustomInput from "../component/CustomInput";
import CustomCheckBox from "../component/CustomCheckBox";
import CustomRadioButton from "../component/CustomRadioButton";
import { toast } from "react-toastify";
import Header from "../component/Header";

function EditData() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    contactNo: "",
    dob: "",
    gender: "male",
    qualification: "",
    hobbies: [],
    profileImage: null,
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    const { name, value, type, checked, files } = e.target;
    if (type === "checkbox") {
      const updatedHobbies = checked
        ? [...formData.hobbies, value]
        : formData.hobbies.filter((hobby) => hobby !== value);
      setFormData({ ...formData, hobbies: updatedHobbies });
    } else if (type === "file") {
      setFormData({ ...formData, [name]: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    toast("Submit", { type: "success" });
    console.log(formData);
  };

  return (
    <div>
            <Header/>

      <form onSubmit={handleSubmit} className="container mx-auto max-w-4xl mt-10">
        <div className="flex gap-4 mb-4">
          <CustomInput
            name={"firstName"}
            value={formData.firstName}
            onChange={handleChange}
            label={"First Name"}
          />
          <CustomInput
            name={"lastName"}
            value={formData.lastName}
            onChange={handleChange}
            label={"Last Name"}
          />
        </div>
        <div className="flex gap-4 mb-4">
          <CustomInput
            name={"email"}
            type="email"
            value={formData.email}
            onChange={handleChange}
            label={"Email"}
          />
          <CustomInput
            name={"contactNo"}
            value={formData.contactNo}
            onChange={handleChange}
            label={"Contact No."}
            pattern="^\d{10}$"
            title="Please Enter 10 Digit"
          />
        </div>
        <div className="flex gap-4 mb-4">
          <CustomInput
            name={"dob"}
            value={formData.dob}
            onChange={handleChange}
            label={"DOB"}
            type="date"
          />
          <div className="w-full">
            <label htmlFor="qualification" className="styled-label">
              Qualification
            </label>
            <select
              id="qualification"
              name="qualification"
              value={formData.qualification}
              onChange={handleChange}
              className="styled-input"
              required
            >
              <option value="" disabled>
                Select your qualification
              </option>
              <option value="high_school">High School</option>
              <option value="bachelors">Bachelor's Degree</option>
              <option value="masters">Master's Degree</option>
            </select>
          </div>
        </div>
        <div className="flex gap-4 mb-4">
          <div className="w-full">
            <label className="styled-label">Hobbies</label>
            <div className="space-y-2">
              {["gym", "coding", "cooking", "others"].map((value) => (
                <CustomCheckBox
                  key={value}
                  name={"hobbies"}
                  value={value}
                  onChange={handleChange}
                  label={value}
                  isChecked={formData.hobbies.includes(value)}
                />
              ))}
            </div>
          </div>
          <div className="w-full">
            <label className="styled-label">Gender</label>
            <div className="space-y-2">
              {["male", "female", "others"].map((value) => (
                <CustomRadioButton
                  key={value}
                  name={"gender"}
                  value={value}
                  onChange={handleChange}
                  label={value}
                  isChecked={formData.gender === value}
                />
              ))}
            </div>
          </div>
        </div>
        <div className="mb-4">
          <label htmlFor="profileImage" className="styled-label">
            Profile Image
          </label>
          <input
            type="file"
            id="profileImage"
            name="profileImage"
            accept="image/*"
            onChange={handleChange}
            className="styled-input"
          />
        </div>
        <button type="submit" className="styled-button w-full ">
          Save
        </button>
      </form>
    </div>
  );
}

export default EditData;

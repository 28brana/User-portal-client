import { createSlice } from "@reduxjs/toolkit";

// Define your initial state here
const initialState = {
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
};

const user = createSlice({
  name: "user",
  initialState,
  reducers: {
    register(state, action) {
      const {
        firstName,
        lastName,
        email,
        contactNo,
        dob,
        gender,
        qualification,
        hobbies,
        profileImage,
        password,
        confirmPassword,
      } = action.payload;

      state.firstName = firstName;
      state.lastName = lastName;
      state.email = email;
      state.contactNo = contactNo;
      state.dob = dob;
      state.gender = gender;
      state.qualification = qualification;
      state.hobbies = hobbies;
      state.profileImage = profileImage;
      state.password = password;
      state.confirmPassword = confirmPassword;
    },
  },
});

export const { register } = user.actions;
export default user.reducer;

// export const { loadActualData, setCurrentIndex, setUserEmail, setUserAnswer } =
//   quiz.actions;
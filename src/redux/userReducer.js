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
};

const user = createSlice({
  name: "user",
  initialState,
  reducers: {
    registerReducer(state, action) {
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
      
    },
    logoutReducer(state) {
      // Clear the user data when logging out
      state.firstName = "";
      state.lastName = "";
      state.email = "";
      state.contactNo = "";
      state.dob = "";
      state.gender = "male";
      state.qualification = "";
      state.hobbies = [];
      state.profileImage = null;
    },
  },
});

export const { registerReducer,logoutReducer } = user.actions;
export default user.reducer;

// export const { loadActualData, setCurrentIndex, setUserEmail, setUserAnswer } =
//   quiz.actions;
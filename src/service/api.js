import axios from "axios";

const instance = axios.create({
  baseURL: "https://user-portal-server.onrender.com/",
});

export const register = async (body) => {
  return await instance.post("/user/register",  body );
};
export const changePassword = async (body) => {
  return await instance.put("/user/change-password", body);
};

export const updateUser = async ( body) => {
  return await instance.put(`/user/update`, body);
};
export const login = async (body) => {
  return await instance.post(`/user/login/`, body);
};

const apiKey = "16a4825a1826e51403d6e482f3ca6148";
export const uploadImage = async (imageBase64) => {
  const formData = new FormData();
  formData.append("key", apiKey);
  formData.append("image", imageBase64);

  const response = await axios.post(
    "https://api.imgbb.com/1/upload",
    formData,
    {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    }
  );
  return response.data;
};

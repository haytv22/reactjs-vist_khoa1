import axios from "./axiot.cusstum";

const CreateUser = (fullName, email, password, phone) => {
  const URLBACKEND = "api/v1/user";
  const data = {
    fullName: fullName,
    email: email,
    password: password,
    phone: phone,
  };
  return axios.post(URLBACKEND, data);
};
const UpdataUser = (_id, fullName, phone) => {
  const URLBACKEND = "api/v1/user";
  const data = {
    _id: _id,
    fullName: fullName,
    phone: phone,
  };
  return axios.put(URLBACKEND, data);
};
const DeleteUser = (_id) => {
  const URLBACKEND = `api/v1/user/${_id}`;
  return axios.delete(URLBACKEND);
};

const FetchAllUserAPI = (current, pageSize) => {
  const URLBACKEND = `api/v1/user?current=${current}&pageSize=${pageSize}`;
  return axios.get(URLBACKEND);
};

const handelUploadFile = (file, folder) => {
  let config = {
    headers: {
      "upload-type": folder,
      "Content-Type": "multipart/form-data",
    },
  };
  const bodyFormData = new FormData();
  bodyFormData.append("fileImg", file);
  const URLBACKEND = "api/v1/file/upload";
  return axios.post(URLBACKEND, bodyFormData, config);
};

const UpdataUserAvatar = (avatar, _id, fullName, phone) => {
  const URLBACKEND = "api/v1/user";
  const data = {
    _id: _id,
    avatar: avatar,
    fullName: fullName,
    phone: phone,
  };
  return axios.put(URLBACKEND, data);
};
const registerUserAPI = (fullName, email, password, phone) => {
  const URL_BACKEND = "/api/v1/user/register";
  const data = {
    fullName: fullName,
    email: email,
    password: password,
    phone: phone,
  };
  return axios.post(URL_BACKEND, data);
};
const LoginAPI = (email, password) => {
  const URL_BACKEND = "/api/v1/auth/login";
  const data = {
    username: email,
    password: password,
  };
  return axios.post(URL_BACKEND, data);
};

export {
  CreateUser,
  FetchAllUserAPI,
  UpdataUser,
  DeleteUser,
  handelUploadFile,
  UpdataUserAvatar,
  registerUserAPI,
  LoginAPI,
};

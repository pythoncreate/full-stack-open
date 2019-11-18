import axios from "axios";
const baseUrl = "/api/users";

let token = null;

const setToken = newToken => {
  token = `bearer ${newToken}`;
};

const getAll = () => {
  const request = axios.get(baseUrl);
  return request.then(response => response.data);
};

const create = async newObject => {
  const config = {
    headers: { Authorization: token }
  };
  const response = await axios.post(baseUrl, newObject, config);
  return response.data;
};

const remove = blog => {
  const config = {
    headers: { Authorization: token }
  };
  const request = axios.delete(`${baseUrl}/${blog.id}`, config);
  return request.then(response => response.data);
};

const update = async blog => {
  const response = await axios.put(`${baseUrl}/${blog.id}`, blog);
  return response.data;
};

export default { getAll, create, update, remove, setToken };

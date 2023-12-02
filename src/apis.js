import axios from "axios";

const baseURL = "https://railway.bulletinboard.techtrain.dev";

export const getThreadsData = async () => {
  return axios.get(`${baseURL}/threads`).then((res) => {
    return res.data;
  });
};

export const postThreadsData = async (data) => {
  // console.log("🚀 ~ file: apis.js:13 ~ postThreadsData ~ data:", data);
  return axios.post(`${baseURL}/threads`, data).then((res) => {
    return res.data;
  });
};

export const getThreadPostsData = async (id) => {
  return axios.get(`${baseURL}/threads/${id}/posts`).then((res) => {
    return res.data;
  });
};

export const postThreadPostData = async (id, data) => {
  console.log("🚀 ~ file: apis.js:25 ~ postThreadPostData ~ id:", id);
  console.log("🚀 ~ file: apis.js:25 ~ postThreadPostData ~ data:", data);
  return axios.post(`${baseURL}/threads/${id}/posts`, data).then((res) => {
    return res.data;
  });
};

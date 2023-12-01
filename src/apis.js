import axios from "axios";

const baseURL = "https://railway.bulletinboard.techtrain.dev";

export const getThreadsData = async () => {
  return axios.get(`${baseURL}/threads`).then((res) => {
    // console.log(res.data);
    return res.data;
  });
};

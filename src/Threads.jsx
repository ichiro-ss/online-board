import { useState, useEffect } from "react";
import axios from "axios";

const baseURL = "https://railway.bulletinboard.techtrain.dev";

export const Threads = () => {
  const [threadTitles, setThreadTitles] = useState([""]);
  let threadIds = [];
  let threadTitleStrs = [];

  useEffect(() => {
    getThreads();
  }, []);

  async function getThreads() {
    axios.get(`${baseURL}/threads`).then((res) => {
      setThreadTitles(res.data.map((item) => item.title));
    });
  }
  const threadList = threadTitles.map((thread) => <li>{thread}</li>);

  return <ul>{threadList}</ul>;
};

export default Threads;

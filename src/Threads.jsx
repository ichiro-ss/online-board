import { useState, useEffect } from "react";
import { getThreadsData } from "./apis";

export const Threads = () => {
  const [threadTitles, setThreadTitles] = useState([""]);
  let threadIds = [];
  let threadTitleStrs = [];

  useEffect(() => {
    getThreads();
  }, []);

  async function getThreads() {
    getThreadsData().then((data) => {
      console.log(data);
      setThreadTitles(data.map((item) => item.title));
    });
  }
  const threadList = threadTitles.map((thread) => <li>{thread}</li>);

  return <ul>{threadList}</ul>;
};

export default Threads;

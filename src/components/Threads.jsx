import { useState, useEffect } from "react";
import { getThreadsData } from "../Apis";

export const Threads = () => {
  const [threadTitles, setThreadTitles] = useState([""]);

  useEffect(() => {
    getThreads();
  }, []);

  async function getThreads() {
    getThreadsData().then((data) => {
      // console.log(data);
      setThreadTitles(data.map((item) => item.title));
    });
  }
  const threadList = threadTitles.map((thread) => <li>{thread}</li>);

  return <ul>{threadList}</ul>;
};

export default Threads;

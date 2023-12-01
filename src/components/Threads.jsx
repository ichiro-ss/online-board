import "./Threads.css";
import { useState, useEffect } from "react";
import { getThreadsData } from "../Apis";
import { Link } from "react-router-dom";

export const Threads = () => {
  const [threads, setThreads] = useState([""]);

  useEffect(() => {
    getThreads();
  }, []);

  async function getThreads() {
    getThreadsData().then((data) => {
      // console.log(data);
      setThreads(data);
    });
  }
  const threadList = threads.map((thread) => (
    <Link
      className="thread"
      state={{ id: thread.id, title: thread.title }}
      to={`thread/${thread.id}`}
    >
      {thread.title}
    </Link>
  ));

  return <div className="threadLists">{threadList}</div>;
};

export default Threads;

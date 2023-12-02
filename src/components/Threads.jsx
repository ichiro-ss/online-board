import "./Threads.css";
import { useState, useEffect } from "react";
import { getThreadsData } from "../Apis";
import { Link } from "react-router-dom";

export const Threads = () => {
  const [threads, setThreads] = useState([""]);

  useEffect(() => {
    getThreads();
  }, []);

  //* get Threads {title} from api
  async function getThreads() {
    getThreadsData().then((data) => {
      // console.log("🚀 ~ file: Threads.jsx:15 ~ getThreadsData ~ data:", data)
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

  return <div className="threadList">{threadList}</div>;
};

export default Threads;

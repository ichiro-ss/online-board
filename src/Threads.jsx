import { useState, useEffect } from "react";

export const Threads = () => {
  //   const [threadUrl, setThreadUrl] = useState(
  //     "https://railway.bulletinboard.techtrain.dev/threads"
  //   );

  const [threadTitles, setThreadTitles] = useState([""]);
  let threadIds = [];
  let threadTitleStrs = [];

  useEffect(() => {
    getThreads();
  }, []);

  async function getThreads() {
    const res = await fetch(
      "https://railway.bulletinboard.techtrain.dev/threads"
    );
    const data = await res.json();
    for (let i = 0; i < data.length; i++) {
      threadIds.push(data[i].id);
      threadTitleStrs.push(data[i].title);
    }
    setThreadTitles(threadTitleStrs);
  }
  const threadList = threadTitles.map((thread) => <li>{thread}</li>);

  return <ul>{threadList}</ul>;
};

export default Threads;

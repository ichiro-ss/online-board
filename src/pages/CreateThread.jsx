import { Link, useNavigate } from "react-router-dom";
import Header from "../components/Header";
import { useState } from "react";
import { postThreadsData } from "../Apis";

// const createNewThread = () => {
//   console.log("created new thread");
// };

export const CreateThread = () => {
  let navigate = useNavigate();
  const [newThread, setNewThread] = useState({
    title: "init",
  });

  const handleChange = (e) => {
    const value = e.target.value;
    console.log(value);
    setNewThread({
      ...newThread,
      [e.target.name]: value,
    });
  };

  const handleSubmit = (e) => {
    // without preventDefault, [Error] WebSocket connection to 'ws://localhost:3000/ws' failed: WebSocket is closed due to suspension.
    e.preventDefault();
    e.stopPropagation();
    const threadData = {
      title: newThread.title,
    };
    // console.log(
    //   "🚀 ~ file: CreateThread.jsx:29 ~ handleSubmit ~ threadData:",
    //   threadData
    // );
    // console.log(
    //   "🚀 ~ file: CreateThread.jsx:29 ~ handleSubmit ~ newThread:",
    //   newThread
    // );

    postThreadsData(threadData).then((data) => {
      console.log(
        "🚀 ~ file: CreateThread.jsx:38 ~ postThreadsData ~ data:",
        data
      );
    });
    navigate("/");
    window.location.reload();
  };

  return (
    <>
      <Header />
      <h1>Create A New Thread</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="text">
          <input
            type="text"
            name="title"
            // value={newThread.title}
            onChange={handleChange}
            id="title"
            placeholder="Thread Title"
          />
        </label>
        <p>
          <Link to="/">Home</Link>
        </p>
        <button type="submit">Create</button>
      </form>
    </>
  );
};

export default CreateThread;

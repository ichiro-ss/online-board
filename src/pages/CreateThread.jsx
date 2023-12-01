import { Link } from "react-router-dom";
import Header from "../components/Header";
import { useState } from "react";
import { postThreadsData } from "../Apis";

// const createNewThread = () => {
//   console.log("created new thread");
// };

export const CreateThread = () => {
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
    e.preventDefault();
    const threadData = {
      title: newThread.title,
    };
    // console.log("req:");
    // console.log(newThread);
    // console.log(threadData);
    postThreadsData(threadData).then((data) => {
      console.log(data);
    });
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

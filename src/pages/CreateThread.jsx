import { Link } from "react-router-dom";
import Header from "../components/Header";

const createNewThread = () => {
  console.log("create new thread");
};

export const CreateThread = () => {
  return (
    <>
      <Header />
      <h1>Create A New Thread</h1>
      <input type="text" placeholder="Thread Title" />
      <p>
        <Link to="/">Home</Link>
      </p>
      <button onClick={createNewThread}></button>
    </>
  );
};

export default CreateThread;

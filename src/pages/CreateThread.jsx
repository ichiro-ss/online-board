import { Link } from "react-router-dom";

const createNewThread = () => {
  console.log("create new thread");
};

export const CreateThread = () => {
  return (
    <>
      <header className="Online Board">
        <h1>Create A New Thread</h1>
        <input type="text" placeholder="Thread Title" />
        <p>
          <Link to="/">Home</Link>
        </p>
        <button onClick={createNewThread}></button>
      </header>
    </>
  );
};

export default CreateThread;

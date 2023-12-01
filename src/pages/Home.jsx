import Threads from "../components/Threads";
import { Link } from "react-router-dom";

export const Home = () => {
  return (
    <>
      <header className="Online Board">
        <Link to="/thread/new">Create A New Thread</Link>
        <h1>New Threads</h1>
        <Threads />
      </header>
    </>
  );
};

export default Home;

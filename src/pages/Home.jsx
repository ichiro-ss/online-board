import Threads from "../components/Threads";
import Header from "../components/Header";

export const Home = () => {
  return (
    <>
      <Header />
      <h1>New Threads</h1>
      <Threads />
    </>
  );
};

export default Home;

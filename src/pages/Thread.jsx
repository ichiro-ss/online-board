import { Header } from "../components/Header";
import { ThreadPosts } from "../components/ThreadPosts";
import { PostForm } from "../components/PostForm";
import { useLocation } from "react-router-dom";
import "./Thread.css";

export const Thread = () => {
  const location = useLocation();
  const { id } = location.state;
  const { title } = location.state;

  return (
    <>
      <Header />
      <h1>{title}</h1>
      <div className="thread_page">
        <div className="thread_posts">
          <ThreadPosts id={id} />
        </div>
        <div className="post_form">
          <PostForm id={id} />
        </div>
      </div>
    </>
  );
};

export default Thread;

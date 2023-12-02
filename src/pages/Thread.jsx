import { Header } from "../components/Header";
import { ThreadPosts } from "../components/ThreadPosts";
import { PostForm } from "../components/PostForm";
import { useState } from "react";
import { useLocation } from "react-router-dom";
import "./Thread.css";

export const Thread = () => {
  const location = useLocation();
  const { id } = location.state;
  const { title } = location.state;
  const [updatePosts, setUpdatePosts] = useState(false);

  return (
    <>
      <Header />
      <h1>{title}</h1>
      <div className="thread_page">
        <div className="thread_posts">
          <ThreadPosts id={id} updatePosts={updatePosts} />
        </div>
        <div className="post_comp">
          <PostForm
            id={id}
            updatePosts={updatePosts}
            setUpdatePosts={setUpdatePosts}
          />
        </div>
      </div>
    </>
  );
};

export default Thread;

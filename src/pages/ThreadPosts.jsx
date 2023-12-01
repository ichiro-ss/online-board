import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { getThreadPostsData } from "../Apis";

export const ThreadPosts = () => {
  const location = useLocation();
  const { id } = location.state;
  const { title } = location.state;

  const [posts, setPosts] = useState([]);

  useEffect(() => {
    getPosts();
  }, []);

  async function getPosts() {
    getThreadPostsData(id).then((data) => {
      // console.log(data);
      setPosts(data.posts);
    });
  }

  const postList = posts.map((post) => {
    <div>postList.post</div>;
  });
  return (
    <>
      <h2>{title}</h2>
      <div>{postList}</div>
    </>
  );
};

export default ThreadPosts;

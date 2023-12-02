import { useEffect, useState } from "react";
import { getThreadPostsData } from "../Apis";
import "./ThreadPosts.css";

export const ThreadPosts = (props) => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    getPosts();
  }, [props.updatePosts]);

  async function getPosts() {
    getThreadPostsData(props.id).then((data) => {
      // console.log(
      //   "🚀 ~ file: ThreadPosts.jsx:18 ~ getThreadPostsData ~ data:",
      //   data
      // );
      setPosts(data.posts);
    });
  }

  const postList = posts.map((post) => (
    <a className="each_post">{post.post}</a>
  ));

  return <>{postList}</>;
};

export default ThreadPosts;

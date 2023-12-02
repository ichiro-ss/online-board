import { useState } from "react";
import { postThreadPostData } from "../Apis";
import "./PostForm.css";

export const PostForm = (props) => {
  const [newPost, setNewPost] = useState({
    post: "",
  });

  const handleChange = (e) => {
    const value = e.target.value;
    setNewPost({
      ...newPost,
      [e.target.name]: value,
    });
  };

  const handleSubmit = (e) => {
    // without preventDefault, [Error] WebSocket connection to 'ws://localhost:3000/ws' failed: WebSocket is closed due to suspension.
    e.preventDefault();
    e.stopPropagation();
    const postData = {
      post: newPost.post,
    };

    postThreadPostData(props.id, postData).then((data) => {
      console.log(
        "🚀 ~ file: PostForm.jsx:29 ~ postThreadPostData ~ data:",
        data
      );
      props.setUpdatePosts(!props.updatePosts);
      setNewPost({
        post: "",
      });
    });
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="text">
          <textarea
            type="text"
            name="post"
            value={newPost.post}
            onChange={handleChange}
            id="post"
            placeholder="Post Something..."
            className="post_form"
          ></textarea>
        </label>
        <button type="submit" className="submit_btn">
          Create
        </button>
      </form>
    </>
  );
};

export default PostForm;

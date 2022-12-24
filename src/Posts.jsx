import React from "react";
import "./App.css";
import del from "./images/del.jpg";

const Posts = ({ posts, loading, deleteBlog }) => {
  if (loading) {
    return <h2>Loading...</h2>;
  }

  return (
    <ul className="list-group">
      {posts.map((post) => (
        <nav className="blog">
          <li key={post.id} className="list-group-item">
            {post["Column 1"]}
          </li>
          <img
            className="del"
            src={del}
            alt=""
            onClick={() => deleteBlog(post)}
          />
        </nav>
      ))}
    </ul>
  );
};

export default Posts;

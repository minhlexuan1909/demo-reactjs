import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import handleError from "../utils/handleError";
import CommentWrap from "./CommentWrap";

const urlPost = "http://localhost:3001/posts";
const urlComment = "http://localhost:3001/comments";

const PostDetail = () => {
  const navigate = useNavigate();
  const [post, setPost] = useState({});
  const [comments, setComments] = useState([]);
  const [error, setError] = useState("");
  const { id } = useParams();

  const handleBackClick = () => {
    navigate(-1);
  };

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await Promise.all([
          fetch(`${urlPost}/${id}`),
          fetch(`${urlPost}/${id}/comments`),
        ]);
        const [detailPost, commentList] = response;

        setPost(await detailPost.json());
        setComments(await commentList.json());
      } catch (error) {
        handleError(error.message, setError);
      }
    };

    getData();
  }, [id]);

  const handleDeleteComment = async (commentId) => {
    try {
      await fetch(`${urlComment}/${commentId}`, {
        method: "DELETE",
      });
      setComments(comments.filter((item) => item.id !== commentId));
    } catch (error) {
      handleError(error.message, setError);
    }
  };

  const handleAddComment = async (newComment, callback) => {
    try {
      const response = await fetch(`${urlComment}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          body: newComment,
          postId: post.id,
        }),
      });

      const jsonData = await response.json();
      callback();
      setComments([...comments, jsonData]);
    } catch (error) {
      handleError(error.message, setError);
    }
  };

  return (
    <div className="container">
      <div className="d-flex align-items-center justify-content-between">
        <h3 className="my-4">Chi tiết bài viết</h3>
        <button className="btn btn-outline-secondary" onClick={handleBackClick}>
          Quay lại
        </button>
      </div>
      {error && <p className="text-danger">Lỗi: {error}</p>}
      <div className="content-wrap">
        <div className="">Tiêu đề: {post.title}</div>
        <div className="">Nội dung: {post.body}</div>
        <CommentWrap
          comments={comments}
          handleDelete={handleDeleteComment}
          handleAdd={handleAddComment}
        />
      </div>
    </div>
  );
};

export default PostDetail;

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import handleError from "../utils/handleError";

const url = "http://localhost:3001/posts";

const AddNewPost = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleSaveClick = async (event) => {
    event.preventDefault(); // chặn hành động mặc định của form (hành động submit form)
    if (title.trim() && body.trim()) {
      fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title,
          body,
        }),
      })
        .then((data) => {
          if (data.status >= 400) {
            throw new Error(data.message || "Bad response from server");
          }
          return data.json();
        })
        .then((data) => {
          navigate(-1);
        })
        .catch((error) => {
          handleError(error.message, setError);
        });
    } else {
      handleError("Vui lòng điền đẩy đủ thông tin", setError);
    }
  };

  const handleBackClick = (event) => {
    event.preventDefault(); // chặn hành động mặc định của form (hành động submit form)
    navigate(-1);
  };

  return (
    <div className="container">
      <div className="d-flex align-items-center justify-content-between">
        <h3 className="my-4">Tạo mới bài viết</h3>
      </div>

      {error && <p className="text-danger">Lỗi: {error}</p>}
      <form>
        <div className="form-group">
          <label htmlFor="titleInput">Tiêu đề:</label>
          <input
            value={title}
            onChange={(event) => {
              setTitle(event.target.value);
            }}
            type="text"
            className="form-control"
            id="titleInput"
          />
        </div>
        <div className="form-group">
          <label htmlFor="bodyInput">Nội dung:</label>
          <input
            value={body}
            onChange={(event) => {
              setBody(event.target.value);
            }}
            type="text"
            className="form-control"
            id="bodyInput"
          />
        </div>
        <div className="d-flex justify-content-end align-items-center">
          <button
            className="btn btn-outline-secondary mr-3"
            onClick={handleBackClick}>
            Quay lại
          </button>

          <button className="btn btn-primary" onClick={handleSaveClick}>
            Tạo
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddNewPost;

import React, { useState } from "react";

const CommentWrap = ({ comments, handleDelete, handleAdd }) => {
  const [newComment, setNewComment] = useState(null);
  // khi mở form thêm mới comment, set newComment = "" thay vì null

  const handleAddClick = () => {
    if (newComment !== null) {
      handleAdd(newComment, () => setNewComment(null));
    } else {
      setNewComment("");
    }
  };

  const handleDeleteClick = (item) => {
    console.log("item: ", item);
    if (item.id) {
      handleDelete(item.id);
    } else {
      setNewComment(null);
    }
  };

  return (
    <div>
      <div className="d-flex justify-content-between">
        <span>Danh sách comments:</span>
        <button
          className="btn btn-sm btn-primary mb-2"
          onClick={handleAddClick}>
          {newComment === null ? "Thêm mới" : "Lưu"}
        </button>
      </div>

      <ul className="list-group">
        {comments.length === 0 ? (
          <p>Bài viết này hiện không có comment nào</p>
        ) : (
          comments?.map((item) => (
            <li
              key={item.id}
              className="list-group-item d-flex align-items-center justify-content-between">
              <span>{`${item.id}. ${item.body}`}</span>
              <button
                className="btn btn-sm btn-outline-danger"
                onClick={() => handleDeleteClick(item)}>
                Xóa
              </button>
            </li>
          ))
        )}
        {newComment !== null && (
          <li
            key={"newComment"}
            className="list-group-item d-flex justify-content-between">
            <input
              className="form-control form-control-sm mr-3"
              type="text"
              name="title"
              value={newComment}
              onChange={(event) => {
                setNewComment(event.target.value);
              }}
              placeholder="Nhập tiêu đề"
            />
            <button
              className="btn btn-sm btn-outline-danger"
              onClick={() => handleDeleteClick(newComment)}>
              Xóa
            </button>
          </li>
        )}
      </ul>
    </div>
  );
};

export default CommentWrap;

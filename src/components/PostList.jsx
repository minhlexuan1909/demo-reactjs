import React from "react";
import { useNavigate } from "react-router-dom";
// import fetch from "cross-fetch";
const url = "https://jsonplaceholder.typicode.com/posts";

const PostList = () => {
  const [posts, setPosts] = React.useState([]);
  const [error, setError] = React.useState("");

  const navigate = useNavigate();

  const handleError = (message) => {
    setError(message);
    const timeout = setTimeout(() => {
      setError("");
      clearTimeout(timeout);
    }, 2000);
  };

  const handleDelete = (selectedItem) => {
    fetch(`${url}/${selectedItem.id}`, {
      method: "DELETE",
    })
      .then((data) => {
        if (data.status >= 400) {
          throw new Error(data.message || "Bad response from server");
        }
        return data.json();
      })
      .then((data) => {
        setPosts(posts.filter((item) => item.id !== selectedItem.id));
      })
      .catch((error) => {
        handleError(error.message);
      });
  };

  const handleAddClick = () => {
    navigate("/posts/add-new");
  };

  React.useEffect(() => {
    // sử dụng Promise
    const getPostsListPromise = () => {
      fetch(url)
        .then((data) => {
          if (data.status >= 400) {
            throw new Error(data.message || "Bad response from server");
          }
          console.log("data1: ", data);
          return data.json();
        })
        .then((data) => {
          setPosts(data);
        })
        .catch((error) => {
          setPosts([]);
          handleError(error.message);
        });
    };

    // sử dụng async await
    const getPostsListAsyncAwait = async () => {
      try {
        const response = await fetch(url);
        const jsonData = await response.json();
        setPosts(jsonData);
      } catch (error) {
        setPosts([]);
        setError(error.message);
      }
    };

    getPostsListPromise();
  }, []);

  return (
    <div className="container">
      <div className="d-flex align-items-center justify-content-between">
        <h3 className="  my-4">Danh sách bài viết</h3>
        <button className="btn btn-primary" onClick={handleAddClick}>
          Tạo mới
        </button>
      </div>
      {error && <p className="text-danger">Lỗi: {error}</p>}
      <table className="table">
        <thead>
          <tr>
            <th scope="col" style={{ textAlign: "center" }}>
              ID
            </th>
            <th scope="col">Tiêu đề</th>
            <th scope="col">Nội dung</th>
            <th
              scope="col"
              style={{ textAlign: "center", whiteSpace: "nowrap" }}>
              Hành động
            </th>
          </tr>
        </thead>
        <tbody>
          {posts.map((item) => (
            <tr key={item.id}>
              <th scope="row" style={{ textAlign: "center" }}>
                {item.id}
              </th>
              <td>
                <a href={`/posts/${item.id}`}>{item.title}</a>
              </td>
              <td> {item.body} </td>
              <td style={{ textAlign: "center" }}>
                <button
                  className="btn btn-primary"
                  onClick={() => handleDelete(item)}>
                  Xóa
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PostList;

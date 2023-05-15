import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import AddNewPost from "./components/AddNewPost";
import PostList from "./components/PostList";
import PostDetail from "./components/PostDetail";

const router = createBrowserRouter([
  {
    path: "/",
    element: <PostList />,
  },
  {
    path: "/posts/:id",
    element: <PostDetail />,
  },
  {
    path: "/posts/add-new",
    element: <AddNewPost />,
  },
]);

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;

import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import PostList from "./components/PostList";
import AddNewPost from "./components/AddNewPost";
import PhotoList from "./components/PhotoList";

const router = createBrowserRouter([
  {
    path: "/",
    element: <PostList />,
  },
  {
    path: "/posts/:id",
    element: <PostList />,
  },
  {
    path: "/posts/add-new",
    element: <AddNewPost />,
  },

  {
    path: "/photos",
    element: <PhotoList />,
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

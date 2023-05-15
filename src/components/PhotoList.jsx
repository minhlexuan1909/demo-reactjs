import React from "react";

const PhotoList = () => {
  const [photos, setPhotos] = React.useState([]);
  const [error, setError] = React.useState("");

  const url = "https://jsonplaceholder.typicode.com/photos";

  React.useEffect(() => {
    // sử dụng Promise
    const getPhotosListPromise = () => {
      fetch(url)
        .then((data) => {
          if (data.status >= 400) {
            throw new Error(data.message || "Bad response from server");
          }
          console.log("data1: ", data);
          return data.json();
        })
        .then((data) => {
          setPhotos(data);
        })
        .catch((error) => {
          setPhotos([]);
          setError(error.message);
        });
    };

    // sử dụng async await
    const getPhotosListAsyncAwait = async () => {
      try {
        const response = await fetch(url);
        const jsonData = await response.json();
        setPhotos(jsonData);
      } catch (error) {
        setPhotos([]);
        setError(error.message);
      }
    };

    getPhotosListPromise();
  }, []);

  return (
    <div>
      <h3 className="text-center my-4">PHOTO LIST</h3>
      <div className="container">
        {error && <p className="text-danger">Error: {error}</p>}
        <div className="row">
          {photos.slice(0, 20).map((item) => (
            <div key={item.id} className="col-sm col-md-4 col-lg-3 my-3">
              <img
                className="h-100 w-100"
                style={{}}
                src={item.url}
                alt={item.title}
                title={`Title: ${item.title}`}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PhotoList;

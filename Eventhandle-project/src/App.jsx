import { useEffect, useState } from "react";
import "./index.css";
import axios from "axios";

export default function App() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false); // Corrected
  const [error, setError] = useState(null); // Added error state
  const [Pages, setPages] = useState(1);

  const getPostfromServer = async () => {
    setLoading(true);
    setError(null); // Reset error before fetching

    try {
      const res = await axios.get(
        `https://jsonplaceholder.typicode.com/posts?_limit=10&_page=${Pages}`
      );
      setPosts(res.data);
    } catch (err) {
      setError(" try Again data is error");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getPostfromServer();
  }, [Pages]);

  return (
    <div className="App w-50 m-auto">
      <h1 className="m-3">Posts below</h1>
      <button
        disabled={Pages == 1}
        onClick={() => setPages(Pages - 1)}
        className="btn btn-primary m-3"
      >
        Previous
      </button>
      {Pages}
      <button
        disabled={Pages == 10}
        onClick={() => setPages(Pages + 1)}
        className="btn btn-primary m-3"
      >
        Next
      </button>
      <hr />

      {loading && <h2>Loading data...</h2>}
      {error && <h3 style={{ color: "red" }}>{error}</h3>}

      {!loading &&
        !error &&
        posts.map((el) => (
          <div key={el.id} className="posts">
            <span>{el.id}</span>
            <h2>{el.title}</h2>
            <p>{el.body}</p>
          </div>
        ))}
    </div>
  );
}

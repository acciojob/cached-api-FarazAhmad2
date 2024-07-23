import React, { useState, useEffect, useMemo } from "react";

const App = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
    .then(response=>response.json())
    .then(data=>{
      setData(data)
      setLoading(false)
    })
  }, []);

  const memoizedData = useMemo(() => data, [data]);

  if (loading) {
    return <h3>Loading...</h3>;
  }

  return (
    <div>
      <ul>
        {memoizedData && memoizedData.map((item) => (
          <li key={item.id}>
            <h3>{item.title}</h3>
            <p>{item.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;

import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./table.css";

export default function CommentsTable(props) {
  const [commentsData, setCommentsData] = React.useState([]);
  const [loading, setLoading] = useState(true);

  const getCommentsData = async () => {
    setLoading(true);
    const response = await fetch("http://localhost:3000/comments", {
      headers: { "no-cors": true },
    });
    const data = await response.json();
    setLoading(false);
    if (commentsData.length === 0) setCommentsData(data);
  };
  React.useEffect(async () => {
    getCommentsData();
  }, []);
  const fetchData = () => {
    getCommentsData();
  };

  console.log(commentsData);
  return (
    <div className="mt10">
      <div className={"pl15Left"}>
        <Link to="/home">Back</Link>
      </div>
      <div className={"pl15Right"}>
        <button onClick={fetchData}>refresh</button>
      </div>
      <div className={"mt15"}>
        {!loading ? (
          <table className="columnWidth">
            <tr>
              <th>Id</th>
              <th>Name</th>
              <th>Email</th>
              <th>Body</th>
            </tr>
            {commentsData.map((key) => {
              return (
                <tr>
                  <td>{key.id}</td>
                  <td>{key.name}</td>
                  <td>{key.email}</td>
                  <td>{key.body}</td>
                </tr>
              );
            })}
          </table>
        ) : (
          <div className="mt10">...loading Data</div>
        )}
      </div>
    </div>
  );
}

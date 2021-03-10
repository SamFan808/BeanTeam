import React, { useContext } from "react";
import { Link, useLocation } from "react-router-dom";
// import { Container, Card, Grid } from "semantic-ui-react";
import UserContext from "../utils/UserContext";

function VideoForm() {
  const location = useLocation();
  const user = useContext(UserContext);
<<<<<<< HEAD

  console.log(user);
  if (!user) {
    return null;
  }
=======
  // console.log(user);
  // if (!user) {
  //   return null;
  // }
>>>>>>> 09ae55e58f9aca2e6df7ed0f23e5facd785c03ac
  // If the page uses user, the above code needs to be added

  return (
    <>
      <h1>Hello {user.first_name}!</h1>
      <div className="card">
        <div className="content">
          <ul>
            <strong>Your Watch List</strong>
            {user.videos.map((video) => (
              <li>
                <Link
                  to={`/Videos/${video._id}`}
                  className={
                    location.pathname === "/videos"
                      ? "nav-link active"
                      : "nav-link"
                  }
                >
                  {video.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}

export default VideoForm;

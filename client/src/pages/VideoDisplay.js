import React from "react";
import NavBar from "../components/Header";
import VideoPlayer from "../components/VideoPlayer";
import VideoForm from "../components/VideoForm";
// import { Grid } from "semantic-ui-react";

function VideoDisplay() {
  return (
    <>
      <NavBar />
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <VideoPlayer />
      <br></br>
      <br></br>
      <VideoForm />
    </>
  );
}

export default VideoDisplay;

import video from "../data/video.js";
import React from "react";
import { useState } from "react";
import Comment from "./Comments";

function App() {
  console.log("Here's your data:", video);
  const [ likes, setLikes ] = useState(video.likes);
  const [ dislikes, setDislikes ] = useState(video.dislikes);
  const [isHidden, setIsHidden] = useState(false);

  const thumbsUp = () => {
    setLikes(likes + 1);
  }

  const thumbsDown = () => {
    setDislikes(dislikes + 1);
  }

  
  return (
    <div className="App">
      <iframe
        width="919"
        height="525"
        src="https://www.youtube.com/embed/dQw4w9WgXcQ"
        frameBorder="0"
        allowFullScreen
        title="Thinking in React"
      />
      <div>
      <h1>{video.title}</h1>
      <span>{video.views} Views | Uploaded {video.createdAt}</span>
      </div>
      <div>
        <button onClick={thumbsUp}>👍{likes}</button>
        <button onClick={thumbsDown}>👎{dislikes}</button>
      </div>
      <div>
        <button onClick={() => setIsHidden(!isHidden)}>{isHidden ? "Show" : "Hide"}</button>
        </div>
        <div>
        <h2>{video.comments.length} Comments</h2>
        </div>
        {!isHidden ? null : <div>{video.comments.map((comment) =>{
        return <Comment key={comment.id} comment={comment.comment} user={comment.user}/>
        })}
        </div>
        }
        </div>
    );
}

export default App;


import axios from "axios";
import { useState, useEffect } from "react";
import NewForm from "./components/Form";
import React from "react";

import YoutubeEmbed from "./components/YoutubeEmbed";

//const host = "http://127.0.0.1:8000"
const host = "https://pickend.herokuapp.com"
export default function App() {
  const [songs, setSongs] = useState([
    // { title: "almost home", id: 1 },
    // { title: "almost there", id: 2 },
    // { title: "almost that", id: 3 },
  ]);

  const addSong = (data) => {
    console.log(data);
    setSongs([
      ...songs,
      { id: data.id, title: data.title, completed: data.completed },
    ]);
  };
  // "https://pickend.herokuapp.com/api/task-list/
  useEffect(() => {
    axios
      .get(host.concat("/api/task-list/"))
      .then((res) => {
        setSongs(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const Delete = (id) =>{
    const address = host.concat("/api/task-delete/"+id+"/")
    axios
      .delete(address)
      .then((res)=>{
        setSongs(songs.filter(res => res.id !== id));
      })
      .catch((err)=>{
        console.log(err)
      });
  }

  return (
    <div className="App">
      <h1>Youtube Embed</h1>
      
      <div>
        {songs.map((song) => {
          return (
          <div key={song.id} >
          <li style = {{display: "inline-block"}}>{song.title} </li>
          <YoutubeEmbed embedId={song.title}/>
          <button onClick={()=>Delete(song.id)}>Delete</button>
          </div>
          );
        })}
      </div>
      <NewForm addSong={addSong} />
    </div>
  );
}

import Header from "./components/Header";
import axios from "axios";
import { useState, useEffect } from "react";
import NewForm from "./components/Form";
import React from "react";
import { v1 as uuid } from "uuid";
import YoutubeEmbed from "./components/YoutubeEmbed";

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

  useEffect(() => {
    axios
      .get("https://pickend.herokuapp.com/api/task-list/")
      .then((res) => {
        setSongs(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="App">
      <h1>Youtube Embed</h1>
      <YoutubeEmbed embedId="NdwFmtLgDVU" />
      <div>
        {songs.map((song) => {
          return <li key={song.id}>{song.title}</li>;
        })}
      </div>
      <NewForm addSong={addSong} />
    </div>
  );
}

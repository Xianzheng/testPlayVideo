import Header from "./components/Header";
import { useState } from "react";

import React from "react";

import YoutubeEmbed from "./components/YoutubeEmbed";

export default function App() {
  return (
    <div className="App">
      <h1>Youtube Embed</h1>
      <YoutubeEmbed embedId="NdwFmtLgDVU" />
    </div>
  );
}

import axios from "axios";
import { useState } from "react";

// const host = "http://127.0.0.1:8000"
const host = "https://pickend.herokuapp.com"

const NewForm = ({ addSong }) => {
  const [url, setURL] = useState("");

  const handle = (e) => {
    e.preventDefault();
    const address = host.concat("/api/task-create/")
    const data = { title: url, completed: false };
    axios
      .post(address, data)
      .then((res) => {
        addSong(res.data);
      })
      .catch((err) => err);
  };
  return (
    <form onSubmit={handle}>
      <label>add youtube url</label>
      <input
        type="text"
        value={url}
        required
        onChange={(e) => {
          setURL(e.target.value);
        }}
      ></input>
      <input type="submit" value="add URL" />
    </form>
  );
};

export default NewForm;

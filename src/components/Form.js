import axios from "axios";
import { useState } from "react";
const NewForm = ({ addSong }) => {
  const [url, setURL] = useState("");

  const handle = (e) => {
    e.preventDefault();
    const address = "https://pickend.herokuapp.com/api/task-create/";
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

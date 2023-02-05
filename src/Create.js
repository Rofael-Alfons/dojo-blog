import { useState } from "react";
import { useHistory } from "react-router-dom";

const Create = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [author, setAuthor] = useState("");
  const [isPending, setIsPending] = useState(false);
  const history = useHistory();

  const titleChangeHandler = (e) => {
    setTitle(e.target.value);
  };
  const bodyChangeHandler = (e) => {
    setBody(e.target.value);
  };
  const authorChangeHandler = (e) => {
    setAuthor(e.target.value);
  };
  const formSubmitHandler = (e) => {
    e.preventDefault();
    const blog = { title, body, author };
    setIsPending(true);

    fetch("http://localhost:8000/blogs", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(blog),
    }).then(() => {
      console.log("added");
      setIsPending(false);
      history.push("/");
    });
  };
  return (
    <div className="create">
      <h2>Add a New Blog</h2>
      <form onSubmit={formSubmitHandler}>
        <label>Blog Title</label>
        <input
          type="text"
          required
          value={title}
          onChange={titleChangeHandler}
        />
        <label>Blog Body</label>
        <textarea required onChange={bodyChangeHandler}></textarea>
        <label>Blog Author:</label>
        <select onChange={authorChangeHandler}>
          <option value="">Select Author</option>
          <option value="Mario">Mario</option>
          <option value="Rofa">Rofa</option>
        </select>
        {!isPending && <button>Add Blog</button>}
        {isPending && <button disabled>Adding Blog...</button>}
      </form>
    </div>
  );
};

export default Create;

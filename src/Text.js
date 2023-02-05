import { useState } from "react";
const Text = () => {
  const [text, setText] = useState("Invalid message");
  const change = (e) => {
    if (e.target.value.length > 3) {
      setText("Valid Message");
    } else setText("Invalid Message");
  };
  return (
    <form>
      <label>Your message</label>
      <input onChange={(e) => change(e)} type="text" />
      <p>{text}</p>
    </form>
  );
};

export default Text;

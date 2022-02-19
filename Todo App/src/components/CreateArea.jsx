import React, { useState } from "react";

function CreateArea(props) {
  const [usernote, setNote] = useState({
    title: "",
    content: ""
  });

  function handleChange(event) {
    const { name, value } = event.target;

    setNote((usertyped) => {
      return {
        ...usertyped,
        [name]: value
      };
    });
  }

  function submitNote(event) {
    props.nowAdd(usernote);
    setNote({
      title: "",
      content: ""
    });
    event.preventDefault();
  }

  return (
    <div>
      <form>
        <input
          name="title"
          onChange={handleChange}
          value={usernote.title}
          placeholder="_____________ !"
        />
        <textarea
          name="content"
          onChange={handleChange}
          value={usernote.content}
          placeholder="_____________ ?"
          rows="3"
        />
        <button onClick={submitNote}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;

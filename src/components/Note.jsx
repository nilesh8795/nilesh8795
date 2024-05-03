import React, { useState } from "react";

function Note(props) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedTitle, setEditedTitle] = useState(props.title);
  const [editedContent, setEditedContent] = useState(props.content);

  function handleEditButtonClick() {
    setIsEditing(true);
  }

  function handleSaveButtonClick() {
    // Create an object with the updated note data
   
      props.onDelete(props.id);
  
    const updatedNote = {
      id: props.id,
      title: editedTitle,
      content: editedContent,
    };

    // Call the onEdit function from the parent component
    props.onEdit(updatedNote);

    // Exit the editing mode
    setIsEditing(false);
  }

  function handleCancelButtonClick() {
    // Exit the editing mode without saving changes
    setIsEditing(false);
  }

  function handleChangeTitle(event) {
    setEditedTitle(event.target.value);
  }

  function handleChangeContent(event) {
    setEditedContent(event.target.value);
  }

  function handleClick() {
    props.onDelete(props.id);
  }

  return (
    <div className="note">
      <p>{props.id}</p>
      {isEditing ? (
        <>
          <input
            type="text"
            value={editedTitle}
            onChange={handleChangeTitle}
          />
          <textarea
            value={editedContent}
            onChange={handleChangeContent}
          ></textarea>
          <button onClick={handleSaveButtonClick}>SAVE</button>
          <button onClick={handleCancelButtonClick}>CANCEL</button>
        </>
      ) : (
        <>
          <h1>{props.title}</h1>
          <p>{props.content}</p>
          <button onClick={handleEditButtonClick}>EDIT</button>
        </>
      )}
      <button onClick={handleClick}>DELETE</button>
    </div>
  );
}

export default Note;

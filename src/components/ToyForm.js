import React, {useState} from "react";

function ToyForm( {onHandleSubmit} ) {

  const [formName, setFormName] = useState("")
  const [formImage, setFormImage] = useState("")

  function handleFormName (e) {
    setFormName(e.target.value)
  }

  function handleFormImage (e) {
    setFormImage(e.target.value)
  }

  function handleSubmit (e) {
    e.preventDefault()
    const formObj = {
      "name":formName,
      "image":formImage,
      "likes":0
    }
    onHandleSubmit(formObj)
  }


  return (
    <div className="container">
      <form className="add-toy-form" onSubmit={handleSubmit}>
        <h3>Create a toy!</h3>
        <input
          type="text"
          name="name"
          placeholder="Enter a toy's name..."
          className="input-text"
          value={formName}
          onChange={handleFormName}
        />
        <br />
        <input
          type="text"
          name="image"
          placeholder="Enter a toy's image URL..."
          className="input-text"
          value={formImage}
          onChange={handleFormImage}
        />
        <br />
        <input
          type="submit"
          name="submit"
          value="Create New Toy"
          className="submit"
        />
      </form>
    </div>
  );
}

export default ToyForm;

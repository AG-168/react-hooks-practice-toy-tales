import React ,{useState} from "react";

function ToyCard( {toyObj, handleDonateClick} ) {

  const [toyLikes, setToyLikes] = useState(toyObj.likes)

  function handleClick () {
    handleDonateClick(toyObj.id)
  }

  function handleLikeClick () {
    fetch(`http://localhost:3001/toys/${toyObj.id}`, {
    method:"PATCH",
    headers:{"Content-Type":"application/json"},
    body: JSON.stringify({likes:(toyLikes+1)})
  })
    .then((r)=>r.json())
    .then((data)=>setToyLikes(data.likes))
  }


  return (
    <div className="card">
      <h2>{toyObj.name}</h2>
      <img
        src={toyObj.image}
        alt={toyObj.name}
        className="toy-avatar"
      />
      <p>{toyLikes} Likes </p>
      <button className="like-btn" onClick={handleLikeClick}>Like {"<3"}</button>
      <button className="del-btn" onClick={handleClick}>Donate to GoodWill</button>
    </div>
  );
}

export default ToyCard;

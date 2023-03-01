import React, { useState, useEffect } from "react";
import Header from "./Header";
import ToyForm from "./ToyForm";
import ToyContainer from "./ToyContainer";

function App() {
  const [showForm, setShowForm] = useState(false);
  const [toys, setToys] = useState([])

  function handleClick() {
    setShowForm((showForm) => !showForm);
  }

  useEffect(()=>{
    fetch('http://localhost:3001/toys')
    .then((r)=>r.json())
    .then((data)=>setToys(data))
  }, [])

 const filteredToys = toys.filter((toy)=>{
  return true
 })

 function handleSubmit (newToy) {
  fetch('http://localhost:3001/toys', {
    method:"POST",
    headers:{"Content-Type":"application/json"},
    body: JSON.stringify(newToy)
  })
    .then((r)=>r.json())
    .then((data)=>{
      setToys([...toys,data])
    })
 }

 function handleDonateClick (toyId) {
  fetch(`http://localhost:3001/toys/${toyId}`, {
    method:"DELETE",
  })
    .then((r)=>r.json())
    .then((data)=>{
      const postDeleteToys = toys.filter((toy)=>toy.id !== toyId)
      setToys(postDeleteToys)
    })
 }

 


  return (
    <>
      <Header />
      {showForm ? <ToyForm onHandleSubmit={handleSubmit}/> : null}
      <div className="buttonContainer">
        <button onClick={handleClick}>Add a Toy</button>
      </div>
      <ToyContainer 
      onToys={filteredToys} 
      onHandleDonateClick={handleDonateClick}
      />
    </>
  );
}

export default App;

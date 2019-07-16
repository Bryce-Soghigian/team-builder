import React, { useState } from "react";


function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [role,setRole] = useState("")

  const handleNameChange = event => {
    setName(event.target.value);
  };
  
  const handleEmailChange = event => {
      setEmail(event.target.value)
  }


  const handleSubmit = event => {
    event.preventDefault();
    console.log(name);
    console.log(email);
  };
  return (
    <div className="App">
      {console.log(name)}
      <form>
        <label>
          name:
          <input type="text" onChange={event => handleNameChange(event)} />
        </label>
        <button onSubmit={() => handleSubmit()}>Submit!</button>
      </form>
      {console.log(email)}
      <form>
          <label>
              email:
              <input type="text" onChange={event => handleEmailChange(event)}/>
          </label>
        <button onSubmit={() => handleSubmit()}>Submit brudda</button>
      </form>
    <form>
        {console.log(role)}
        <label>
        role:
        <input type="text" onChange = {event => setRole(event.target.value)}/>
        <button onSubmit={() => handleSubmit()}>Get employed</button>
        </label>
    </form>
    </div>
  );
}

export default App;
//name email role
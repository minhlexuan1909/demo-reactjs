import React, { useRef } from "react";

function UncontrolledForms() {
  const nameInputRef = useRef();
  const emailInputRef = useRef();
  const passwordInputRef = useRef();

  const handleSubmit = (event) => {
    event.preventDefault();
    // Access form data using refs
    const name = nameInputRef.current.value;
    const email = emailInputRef.current.value;
    const password = passwordInputRef.current.value;
    // Perform form submission logic here
    console.log(name, email, password);
    alert(name + "    " + email + "    " +  password);
    // Reset the form
    event.target.reset();
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" ref={nameInputRef} />
      </label>
      <br />
      <label>
        Email:
        <input type="email" ref={emailInputRef} />
      </label>
      <br />
      <label>
        Password:
        <input type="password" ref={passwordInputRef} />
      </label>
      <br />
      <button type="submit">Submit</button>
    </form>
  );
}

export default UncontrolledForms;
